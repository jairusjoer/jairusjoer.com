const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');

  return collection({
    columns: ['title', 'year'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Exhibitions',
    path: 'src/content/Exhibitions/*',
    slugField: 'title',
    schema: {
      draft: fields.checkbox({ label: 'Draft' }),
      title: fields.slug({
        name: { label: 'Title', validation: { isRequired: true } },
      }),
      year: fields.text({ label: 'Year', validation: { isRequired: true } }),
      venue: fields.text({ label: 'Venue' }),
      location: fields.text({ label: 'Location' }),
      url: fields.url({ label: 'URL' }),
      content: fields.mdx({ label: 'Content' }),
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
