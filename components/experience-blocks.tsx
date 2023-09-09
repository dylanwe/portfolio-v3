type AboutMe = {
    icon: string;
    title: string;
    text: string[];
};

const aboutSection: Array<AboutMe> = [
    {
        icon: '🌎',
        title: 'Languages',
        text: ['🇳🇱 Dutch fluent', '🇬🇧 English C1'],
    },
    {
        icon: '🧑🏻‍💻',
        title: 'Skills',
        text: ['TypeScript, Kotlin, Java, MySQL, React', 'Scrum, Git'],
    },
];

const ExperienceBlocks = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mb-12">
            <article className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2">
                <div
                    className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
                    🎓
                </div>
                <h4 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
                    Education
                </h4>
                <ul className="px-4 text-slate-600 dark:text-neutral-400 text-sm list-disc list-outside space-y-2">
                    <li>
                        Software Engineer{' '}
                        <a
                            href="https://www.hva.nl/"
                            target="_blank"
                            className="text-primary-500 font-medium"
                        >
                            @HVA
                        </a>{' '}
                        <div>
                            2021-Present
                        </div>
                    </li>
                    <li>
                        Graduate Web Developer{' '}
                        <a
                            href="https://www.glu.nl/opleiding/webdesign/"
                            target="_blank"
                            className="text-primary-500 font-medium"
                        >
                            @GLU
                        </a>{' '}
                        <div>
                            2017-2021
                        </div>
                    </li>
                </ul>
            </article>
            <article className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2">
                <div
                    className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
                    💻
                </div>
                <h4 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
                    Previous experience
                </h4>
                <ul className="px-4 text-slate-600 dark:text-neutral-400 text-sm list-disc list-outside space-y-2">
                    <li>
                        Software Engineer intern{' '}
                        <a
                            href="https://www.ah.nl/"
                            target="_blank"
                            className="text-primary-500 font-medium"
                        >
                            @Albert Heijn
                        </a>{' '}
                        <div>
                            2023-Present
                        </div>
                    </li>
                    <li>
                        Web-developer intern{' '}
                        <a
                            href="https://www.otys.nl/"
                            target="_blank"
                            className="text-primary-500 font-medium"
                        >
                            @Otys
                        </a>{' '}
                        <div>
                            2020-2021
                        </div>
                    </li>
                </ul>
            </article>
            {aboutSection.map((about) => {
                return (
                    <article
                        key={about.icon}
                        className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2"
                    >
                        <div
                            className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
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
