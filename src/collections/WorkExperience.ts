const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'from', 'to'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: 'Work Experience',
    path: 'src/content/WorkExperience/*',
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      from: fields.text({ label: 'From', validation: { isRequired: true } }),
      to: fields.text({ label: 'To', validation: { isRequired: true } }),
      title: fieldPresets.title,
      client: fieldPresets.client,
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
      base: './src/content/WorkExperience',
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      from: z.string(),
      to: z.string(),
      title: z.string(),
      client: z.string(),
      location: z.string().optional(),
      url: z.string().optional(),
    }),
  });
};

export const WorkExperience = { keystatic, astro };
