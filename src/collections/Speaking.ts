import type { CollectionKey } from 'astro:content';

const collectionKey: CollectionKey = 'Speaking';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'year'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: collectionKey,
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      title: fieldPresets.title,
      year: fieldPresets.year,
      event: fields.text({ label: 'Event' }),
      location: fieldPresets.location,
      url: fieldPresets.url,
      content: fieldPresets.content(collectionKey),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: `./src/content/${collectionKey}`,
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      year: z.string(),
      event: z.string().optional(),
      location: z.string().optional(),
      url: z.string().optional(),
    }),
  });
};

export const Speaking = { keystatic, astro };
