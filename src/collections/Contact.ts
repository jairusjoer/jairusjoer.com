const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title'],
    label: 'Contact',
    path: 'src/content/Contact/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      title: fieldPresets.title,
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
