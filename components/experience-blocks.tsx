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

const ExperienceBlocks = () => {
	return (
		<section className="grid grid-cols-2 gap-4 mx-auto mb-12">
			{aboutSection.map((about) => {
				return (
					<article
						key={about.icon}
						className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2"
					>
						<div className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
							{about.icon}
						</div>
						<h4 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
							{about.title}
						</h4>
						<ul className="text-slate-600 dark:text-neutral-400 text-sm list-disc list-inside">
							{about.text.map((text) => {
								return <li key={text}>{text}</li>;
							})}
						</ul>
					</article>
				);
			})}
		</section>
	);
};

export default ExperienceBlocks;
