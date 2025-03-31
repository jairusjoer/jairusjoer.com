const keystatic = async () => {
    const { fields, collection } = await import('@keystatic/core');

    return collection({
      columns: ['title', 'issued', 'expires'],
      entryLayout: 'content',
      format: { contentField: 'content' },
      label: 'Certifications',
      path: 'src/content/Certifications/*',
      slugField: 'title',
      schema: {
        draft: fields.checkbox({ label: 'Draft' }),
        issued: fields.text({ label: 'Issued', validation: { isRequired: true } }),
        expires: fields.text({ label: 'Expires', validation: { isRequired: true } }),
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        organization: fields.text({ label: 'Organization', validation: { isRequired: true } }),
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
        base: './src/content/Certifications',
        pattern: '**/*.{md,mdx}',
      }),
      schema: z.object({
        draft: z.boolean().optional(),
        issued: z.string(),
        expires: z.string(),
        title: z.string(),
        organization: z.string(),
        url: z.string().optional(),
      }),
    });
  };

  export const Certifications = { keystatic, astro };
