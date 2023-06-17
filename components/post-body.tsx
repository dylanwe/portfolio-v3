type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    return (
        <div className="prose md:prose-lg dark:prose-invert flex mx-0">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostBody;
