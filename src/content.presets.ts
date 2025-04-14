export const fields = async () => {
  const { fields } = await import('@keystatic/core');

  return {
    // Required
    titleSlug: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
    titleString: fields.text({ label: 'Title', validation: { isRequired: true } }),
    // Optional
    content: (collection: string) =>
      fields.mdx({
        label: 'Content',
        options: {
          image: {
            directory: `src/assets/images/${collection}`,
            publicPath: `/src/assets/images/${collection}`,
          },
        },
      }),
    description: fields.text({ label: 'Description' }),
    draft: fields.checkbox({ label: 'Draft' }),
    image: (collection: string) =>
      fields.image({
        label: 'Image',
        directory: `src/assets/images/${collection}`,
        publicPath: `/src/assets/images/${collection}`,
      }),
    url: fields.url({ label: 'URL' }),
  };
};

export const z = async () => {
  const { z } = await import('astro:content');

  return {
    // Required
    title: z.string(),
    // Optional
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
    url: z.string().optional(),
  };
};

export const presets = { fields, z };
