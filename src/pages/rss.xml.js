import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { useReader } from '../composables/useReader';

const reader = useReader();
const settings = await reader.singletons.Settings.read();

export async function GET(context) {
	const blog = await getCollection('Blog');
	return rss({
		title: settings.title,
		description: settings?.description,
		site: context.site,
		items: blog.map((entry) => ({
			...entry.data,
			link: `/blog/${entry.id}/`,
		})),
	});
}
