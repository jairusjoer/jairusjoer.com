const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');
  return collection({
    columns: ['title'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Volunteering',
    path: 'src/content/Volunteering/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      title: fieldPresets.title,
      organization: fields.text({
        label: 'Organization',
        validation: { isRequired: true },
      }),
      location: fields.text({ label: 'Location' }),
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
      base: './src/content/Volunteering',
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      organization: z.string(),
      location: z.string().optional(),
      url: z.string().optional(),
    }),
  });
};

export const Volunteering = { keystatic, astro };
