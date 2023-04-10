import Meta from './meta';
import ThemeSwitch from './theme-switch';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<div className="min-h-screen max-w-4xl mx-auto px-8">
				<ThemeSwitch />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
