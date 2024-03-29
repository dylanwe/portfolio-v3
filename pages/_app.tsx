import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/index.css';
import '../styles/prismTheme.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
