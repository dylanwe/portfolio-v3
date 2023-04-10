import Head from 'next/head';

const Meta = () => {
    return (
        <Head>
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.ico"
            />
            <link rel="shortcut icon" href="/favicon/logo.svg" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta
                name="msapplication-config"
                content="/favicon/browserconfig.xml"
            />
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content="Hey welcome to my portfolio, I'm Dylan Weijgertze a software engineer"
            />
            <meta property="og:title" content="Portfolio | Dylan Weijgertze" />
            <meta
                property="og:description"
                content="Hey welcome to my portfolio, I'm Dylan Weijgertze a software engineer"
            />
        </Head>
    );
};

export default Meta;
