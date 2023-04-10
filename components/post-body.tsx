type Props = {
	content: string;
};

const PostBody = ({ content }: Props) => {
	return (
		<div className="prose md:prose-lg dark:prose-invert max-w-2xl mx-auto">
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};

export default PostBody;
