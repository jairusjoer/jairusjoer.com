const keystatic = async () => {
    const { fields, collection } = await import('@keystatic/core');

    return collection({
      columns: ['title', 'from', 'to'],
      entryLayout: 'content',
      format: { contentField: 'content' },
      label: 'Volunteering',
      path: 'src/content/Volunteering/*',
      slugField: 'title',
      schema: {
        draft: fields.checkbox({ label: 'Draft' }),
        from: fields.text({ label: 'From', validation: { isRequired: true } }),
        to: fields.text({ label: 'To', validation: { isRequired: true } }),
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        organization: fields.text({
          label: 'Organization',
          validation: { isRequired: true },
        }),
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
        base: './src/content/Volunteering',
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

  export const Volunteering = { keystatic, astro };
