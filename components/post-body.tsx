type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    return (
        <div
            className="prose md:prose-lg dark:prose-invert mx-0"
            dangerouslySetInnerHTML={{ __html: content }}
        ></div>
    );
};

export default PostBody;
