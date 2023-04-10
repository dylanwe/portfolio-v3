import { remark } from 'remark';
import prism from 'remark-prism';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
	const result = await remark()
		.use(html, { sanitize: false })
		.use(prism)
		.process(markdown);
	return result.toString();
}
