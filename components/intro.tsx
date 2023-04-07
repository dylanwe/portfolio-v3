import { useEffect, useState } from 'react';
import avatar from '../public/assets/blog/authors/dylan.jpg';
import background from '../public/assets/img/background.png';
import Image from 'next/image';

type AboutMe = {
	icon: string;
	title: string;
	text: string[];
};

const aboutSection: Array<AboutMe> = [
	{
		icon: '🎓',
		title: 'Education',
		text: [
			'Software Engineer @HVA 2021 - Current',
			'Graduate Web Developer @GLU 2017 - 2021'
		]
	},
	{
		icon: '💻',
		title: 'Previous experience',
		text: ['Web-developer intern @Otys 2020-2021']
	},
	{
		icon: '🌎',
		title: 'Languages',
		text: ['🇳🇱 Dutch fluent', '🇬🇧 English C1']
	},
	{
		icon: '🧑🏻‍💻',
		title: 'Skills',
		text: ['TypeScript, Kotlin, Java, MySQL, React', 'Scrum, Git']
	}
];

const Intro = () => {
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
		<section className="mt-16 mb-16 md:mb-12">
			<header className="mb-12 text-center max-w-2xl mx-auto px-8">
				<div className="flex items-center justify-center mb-6">
					<div className="w-48 rounded-full overflow-clip">
						<Image src={avatar} alt="pf" />
					</div>
				</div>
				<h1 className="text-6xl text-neutral-800 mb-4">
					Hi{' '}
					<span className="inline-block animate-[wave_.5s_ease-in-out_2]">
						👋
					</span>{' '}
					I’m Dylan!
				</h1>
				<p className="text-neutral-600 text-lg mb-4">
					I'm a Software Engineer student at the Amsterdam University
					of Applied Sciences who enjoys programming and reading.
				</p>
				<p className="text-primary-600 text-lg flex space-x-8 justify-center">
					<a
						href="https://www.linkedin.com/in/dylan-weijgertze/"
						target="_blank"
						className="flex space-x-2 underline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-2 -2 24 24"
							width="24"
							fill="currentColor"
						>
							<path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
						</svg>
						<span>LinkedIn</span>
					</a>
					<a
						href="https://github.com/dylanwe"
						target="_blank"
						className="flex space-x-2 underline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-2 -2 24 24"
							width="24"
							fill="currentColor"
						>
							<path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
						</svg>
						<span>GitHub</span>
					</a>
					<a href="#projects" className="flex space-x-2 underline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-5 -2 24 24"
							width="24"
							fill="currentColor"
						>
							<path d="M5 18V1H3v17H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5zM6 4v2h5V4H6zm0 3v2h5V7H6zM3 18h2v2H3v-2z"></path>
						</svg>
						<span>Projects</span>
					</a>
				</p>
			</header>

			<section className="grid grid-cols-2 gap-4 max-w-4xl mx-auto px-8">
				{aboutSection.map((about) => {
					return (
						<article
							key={about.icon}
							className="bg-neutral-100 p-4 rounded-xl space-y-2"
						>
							<div className="flex h-12 w-12 bg-neutral-200 items-center justify-center text-2xl rounded-xl">
								{about.icon}
							</div>
							<h4 className="text-lg text-neutral-800 font-bold">
								{about.title}
							</h4>
							<ul className="text-slate-600 text-sm list-disc list-inside">
								{about.text.map((text) => {
									return <li key={text}>{text}</li>;
								})}
							</ul>
						</article>
					);
				})}
			</section>
			<Image
				src={background}
				alt=""
				className='absolute top-0 -z-50 w-full transition-all ease-out duration-500 min-h-[600px] object-cover overflow-visible'
				style={{transform: `scale(${1 + (scrollY / 5_000)})`, opacity: (scrollY < 500) ? 1 : 0, willChange: 'transform, opacity'}}
			/>
		</section>
	);
};

export default Intro;
