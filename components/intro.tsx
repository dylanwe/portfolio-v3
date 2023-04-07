import avatar from '../public/assets/blog/authors/dylan.jpg';
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
		text: ['2nd year Software Engineer @HVA 2021 - Current', 'Graduate Web Developer @GLU 2017 - 2021']
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
	}
];

const Intro = () => {
	return (
		<section className="mt-16 mb-16 md:mb-12">
			<header className="mb-12 text-center max-w-2xl mx-auto">
				<div className="flex items-center justify-center mb-6">
					<div className="w-48 rounded-full overflow-clip">
						<Image src={avatar} alt="pf" />
					</div>
				</div>
				<h1 className="text-6xl text-neutral-800 mb-4">
					Hi 👋 I’m Dylan!
				</h1>
				<p className="text-neutral-600 text-lg mb-4">
					I'm a Software Engineer student at the Amsterdam University
					of Applied Sciences who enjoys programming and reading.
				</p>
				<p className="text-neutral-600 text-lg">
					LinkedIn Github
				</p>
			</header>

			<section className="grid grid-cols-3 space-x-4">
				{aboutSection.map((about) => {
					return (
						<article className="bg-neutral-100 p-4 rounded-xl space-y-2">
							<div className="flex h-12 w-12 bg-neutral-200 items-center justify-center text-2xl rounded-xl">
								{about.icon}
							</div>
							<h4 className="text-lg text-neutral-800 font-bold">
								{about.title}
							</h4>
							<ul className="text-slate-600 text-sm list-disc list-inside">
								{about.text.map(text => {
									return <li>{text}</li>
								})}
							</ul>
						</article>
					);
				})}
			</section>
		</section>
	);
};

export default Intro;
