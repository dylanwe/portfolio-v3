import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

type Props = {
	title: string;
	coverImage: string;
	date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
	return (
		<>
			<h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left text-neutral-800 dark:text-neutral-200">
				{title}
			</h1>
				<div className="mb-6 text-lg text-neutral-800 dark:text-neutral-200 text-center md:text-left">
					<DateFormatter dateString={date} />
				</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
			</div>
		</>
	);
};

export default PostHeader;
