import DateFormatter from './date-formatter';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	title: string;
	thumbnailImage: string;
	date: string;
	excerpt: string;
	emoji: string;
	slug: string;
};

const PostPreview = ({
	title,
	thumbnailImage,
	date,
	excerpt,
	emoji,
	slug
}: Props) => {
	return (
		<Link
			href={`/posts/${slug}`}
			className="bg-neutral-100 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:scale-[102%] rounded-2xl flex flex-col md:flex-row overflow-clip hover:shadow-xl transition-all duration-500"
		>
			<div className="flex-1 p-12 pb-4 md:p-16 md:pr-12 flex flex-col">
				<div className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl mb-4">
					{emoji}
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">{title}</h2>
				<span className="md:text-lg text-neutral-800 dark:text-neutral-300">
					<DateFormatter dateString={date} />
				</span>
				<p className="md:text-lg text-neutral-600 dark:text-neutral-400 py-4">{excerpt}</p>
				<div>
					<button
						type="button"
						className="text-white bg-gradient-to-r from-cyan-500 to-sky-500 hover:opacity-80 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 flex items-center space-x-2 transition-opacity"
					>
						<span>Read more</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="24" fill="currentColor"><path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path></svg>
					</button>
				</div>
			</div>
			<div className="flex-1 md:relative md:pt-6 flex items-end justify-end">
				<Image
					src={thumbnailImage}
					alt={`Cover Image for ${title}`}
					className="md:bottom-0 md:absolute max-w-sm"
					width={600}
					height={630}
				/>
			</div>
		</Link>
	);
};

export default PostPreview;
