import type { CollectionKey } from 'astro:content';

export const fields = async () => {
  const { fields } = await import('@keystatic/core');

  return {
    // Required
    from: fields.text({ label: 'From', validation: { isRequired: true } }),
    institution: fields.text({ label: 'Institution', validation: { isRequired: true } }),
    title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
    to: fields.text({ label: 'To', validation: { isRequired: true } }),
    year: fields.text({ label: 'Year', validation: { isRequired: true } }),
    // Optional
    client: fields.text({ label: 'Client' }),
    content: (collection: CollectionKey) =>
      fields.mdx({
        label: 'Content',
        description: 'Entering more than 300 characters turns the content into a page.',
        options: {
          image: {
            directory: `src/assets/images/${collection}`,
            publicPath: `/src/assets/images/${collection}`,
          },
        },
      }),
    description: fields.text({ label: 'Description' }),
    draft: fields.checkbox({ label: 'Draft' }),
    host: fields.text({ label: 'Host' }),
    location: fields.text({ label: 'Location' }),
    url: fields.url({ label: 'URL' }),
  };
};

export const z = async () => {
  const { z } = await import('astro:content');

  return {
    // Required
    from: z.string(),
    institution: z.string(),
    title: z.string(),
    to: z.string(),
    year: z.string(),
    // Optional
    client: z.string().optional(),
    content: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    host: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
  };
};

export const Presets = { fields, z };
