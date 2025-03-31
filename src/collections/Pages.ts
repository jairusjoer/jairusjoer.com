const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'description'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Pages',
    path: 'src/content/Pages/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      image: fields.image({ label: 'Image' }),
      title: fieldPresets.title,
      description: fields.text({ label: 'Description' }),
      content: fieldPresets.content,
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: './src/content/Pages',
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      image: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
    }),
  });
};

export const Pages = { keystatic, astro };
