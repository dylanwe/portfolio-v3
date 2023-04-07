import DateFormatter from './date-formatter';
import Link from 'next/link';
import Image from 'next/image';
import type Author from '../interfaces/author';

type Props = {
	title: string;
	thumbnailImage: string;
	date: string;
	excerpt: string;
	emoji: string;
	author: Author;
	slug: string;
};

const PostPreview = ({
	title,
  thumbnailImage,
	date,
	excerpt,
	emoji,
	author,
	slug
}: Props) => {
	return (
		<Link
			href={`/posts/${slug}`}
			className="bg-neutral-100 hover:bg-neutral-50 hover:scale-[102%] rounded-2xl flex overflow-clip hover:shadow-xl transition-all duration-500"
		>
			<div className="flex-1 p-16 pr-12 flex flex-col">
				<div className="flex h-12 w-12 bg-neutral-200 items-center justify-center text-2xl rounded-xl mb-4">
					{emoji}
				</div>
				<h1 className="text-4xl font-bold text-neutral-800">{title}</h1>
				<span className="text-lg">
					<DateFormatter dateString={date} />
				</span>
				<p className="text-lg text-neutral-600 py-4">{excerpt}</p>
			</div>
			<div className="flex-1 relative pt-6">
				<Image
					src={thumbnailImage}
					alt={`Cover Image for ${title}`}
					className='bottom-0 absolute'
					width={600}
					height={630}
				/>
			</div>
		</Link>
	);
};

export default PostPreview;
