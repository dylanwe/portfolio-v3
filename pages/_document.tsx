import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-neutral-50 dark:bg-neutral-900 overflow-x-hidden transition-colors duration-500">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
