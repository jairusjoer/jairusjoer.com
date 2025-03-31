const keystatic = async () => {
    const { fields, collection } = await import('@keystatic/core');
    const { fieldPresets } = await import('./presets/Fields');

    return collection({
      columns: ['title', 'year'],
      entryLayout: 'content',
      format: { contentField: 'content' },
      label: 'Features',
      path: 'src/content/Features/*',
      slugField: 'title',
      schema: {
        draft: fieldPresets.draft,
        title: fieldPresets.title,
        year: fieldPresets.year,
        publisher: fields.text({ label: 'Publisher' }),
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
        base: './src/content/Features',
        pattern: '**/*.{md,mdx}',
      }),
      schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        year: z.string(),
        publisher: z.string().optional(),
        url: z.string().optional(),
      }),
    });
  };

  export const Features = { keystatic, astro };
