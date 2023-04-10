import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import ExperienceBlocks from '../components/experience-blocks';
import IntroImage from '../components/intro-image';

type Props = {
	allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
	const morePosts = allPosts;
	return (
		<>
			<Layout>
				<Head>
					<title>"Portfolio | Dylan Weijgertze"</title>
					<meta
						property="og:image"
						content="/assets/img/ogImage.png"
					/>
				</Head>
				<div>
					<Intro />
					<IntroImage />
					<ExperienceBlocks />
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</div>
			</Layout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'emoji',
		'technologies',
		'thumbnailImage',
		'excerpt'
	]);

	return {
		props: { allPosts }
	};
};
