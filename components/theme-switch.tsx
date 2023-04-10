import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

enum Theme {
	SYSTEM = 'system',
	LIGHT = 'light',
	DARK = 'dark'
}

const ThemeSwitch = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const getIcon = (theme: Theme) => {
		switch (theme) {
			case Theme.LIGHT:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-2 -2 24 24"
						width="24"
						fill="currentColor"
					>
						<path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"></path>
					</svg>
				);
			case Theme.DARK:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-4 -2 24 24"
						width="24"
						fill="currentColor"
					>
						<path d="M2 10c0 4.43 3.478 8 7.742 8 .658 0 1.302-.085 1.922-.248-2.996-2.2-4.896-5.786-4.896-9.752 0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10zm6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.086 10.086 0 0 0 8.768 8z"></path>
					</svg>
				);
			case Theme.SYSTEM:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-2 -3 24 24"
						width="24"
						fill="currentColor"
					>
						<path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path>
					</svg>
				);
			default:
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-2 -3 24 24"
						width="24"
						fill="currentColor"
					>
						<path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path>
					</svg>
				);
		}
	};

	const switchTheme = (theme: string) => {
		setTheme(theme);
		setMenuOpen(false);
	};

	const capitalizeFirstLetter = (str: string): string => {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	};

	return (
		<div className="fixed top-8 right-8">
			<button
				id="dropdownDividerButton"
				data-dropdown-toggle="dropdownDivider"
				className="ml-auto bg-neutral-50 hover:bg-neutral-200 transition-colors border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 backdrop-blur-xl bg-opacity-80 dark:bg-opacity-80"
				type="button"
				onClick={() => setMenuOpen((prev) => !prev)}
			>
				{getIcon(theme as Theme)}
			</button>

			<div
				id="dropdownDivider"
				className={`${
					isMenuOpen ? '' : 'hidden'
				} z-10 bg-white divide-y divide-neutral-100 rounded-lg shadow w-44 dark:bg-neutral-700 dark:divide-neutral-600`}
			>
				<ul
					className="py-2 text-sm text-neutral-700 dark:text-neutral-200"
					aria-labelledby="dropdownDividerButton"
				>
					{Object.values(Theme).map((theme) => {
						return (
							<li key={theme}>
								<button
									onClick={() => switchTheme(theme)}
									className="flex items-center space-x-2 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white w-full"
								>
									{getIcon(theme)}
									<span>{capitalizeFirstLetter(theme)}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ThemeSwitch;
