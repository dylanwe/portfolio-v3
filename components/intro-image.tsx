import { useEffect, useState } from 'react';
import background from '../public/assets/img/background.png';
import Image from 'next/image';

const IntroImage = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Image
			src={background}
			alt=""
			className={`fixed top-0 left-0 -z-50 w-full transition-all ease-out duration-500 min-h-[600px] object-cover ${
				scrollY < 300 ? 'opacity-100 dark:opacity-80' : 'opacity-0'
			}`}
			style={{
				transform: `scale(${1 + scrollY / 5_000})`,
				willChange: 'transform, opacity'
			}}
		/>
	);
};

export default IntroImage;
