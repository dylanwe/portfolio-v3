import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import ThemeSwitch from '../../components/theme-switch';

type Props = {
	post: PostType;
	morePosts: PostType[];
	preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
	const router = useRouter();
	const title = `${post.title} | Dylan Weijgertze`;
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<ThemeSwitch />
			<Header />
			{router.isFallback ? (
				<p>Loading…</p>
			) : (
				<>
					<article className="mb-32 max-w-2xl mx-auto px-8">
						<Head>
							<title>{title}</title>
							<meta
								property="og:image"
								content={post.ogImage.url}
							/>
						</Head>
						<PostHeader
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
						/>
						<PostBody content={post.content} />
					</article>
				</>
			)}
		</Layout>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage'
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				}
			};
		}),
		fallback: false
	};
}
