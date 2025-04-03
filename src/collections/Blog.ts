const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'description'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Blog',
    path: 'src/content/Blog/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      image: fields.image({ label: 'Image' }),
      title: fieldPresets.title,
      description: fields.text({ label: 'Description' }),
      date: fields.date({ label: 'Date' }),
      content: fieldPresets.content,
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: './src/content/Blog',
      pattern: '**/*.{md,mdx}',
    }),
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().optional(),
        image: image().optional(),
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
      }),
  });
};

export const Blog = { keystatic, astro };
