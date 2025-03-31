const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'year'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Exhibitions',
    path: 'src/content/Exhibitions/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      title: fieldPresets.title,
      year: fieldPresets.year,
      venue: fields.text({ label: 'Venue' }),
      location: fieldPresets.location,
      url: fieldPresets.url,
      content: fieldPresets.content,
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: './src/content/Exhibitions',
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      year: z.string(),
      venue: z.string().optional(),
      location: z.string().optional(),
      url: z.string().optional(),
    }),
  });
};

export const Exhibitions = { keystatic, astro };
