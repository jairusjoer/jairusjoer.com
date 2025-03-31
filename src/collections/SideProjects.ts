const keystatic = async () => {
    const { fields, collection } = await import('@keystatic/core');
    const { fieldPresets } = await import('./presets/Fields');

    return collection({
      columns: ['title', 'year'],
      entryLayout: 'content',
      format: { contentField: 'content' },
      label: 'Side Projects',
      path: 'src/content/SideProjects/*',
      slugField: 'title',
      schema: {
        draft: fieldPresets.draft,
        title: fieldPresets.title,
        year: fieldPresets.year,
        client: fieldPresets.client,
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
        base: './src/content/SideProjects',
        pattern: '**/*.{md,mdx}',
      }),
      schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        year: z.string(),
        client: z.string().optional(),
        url: z.string().optional(),
      }),
    });
  };

  export const SideProjects = { keystatic, astro };
