const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');

  return collection({
    columns: ['title'],
    label: 'Contact',
    path: 'src/content/Contact/*',
    slugField: 'title',
    schema: {
      draft: fields.checkbox({ label: 'Draft' }),
      title: fields.text({ label: 'Title', validation: { isRequired: true } }),
      url: fields.url({ label: 'URL', validation: { isRequired: true } }),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: './src/content/Contact',
      pattern: '**/*.{yml,yaml}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      url: z.string(),
    }),
  });
};

export const Contact = { keystatic, astro };
