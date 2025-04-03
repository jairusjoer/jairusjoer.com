import type { CollectionKey } from 'astro:content';

const collectionKey: CollectionKey = 'Contact';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['draft', 'title', 'url', 'username'],
    label: collectionKey,
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      title: fieldPresets.title,
      url: fields.url({ label: 'URL', validation: { isRequired: true } }),
      username: fields.text({ label: 'Username', validation: { isRequired: true } }),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: `./src/content/${collectionKey}`,
      pattern: '**/*.{yml,yaml}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      url: z.string(),
      username: z.string(),
    }),
  });
};

export const Contact = { keystatic, astro };
