import type { CollectionKey } from 'astro:content';

const collectionKey: CollectionKey = 'Pages';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'description'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: collectionKey,
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      image: fields.image({
        label: 'Image',
        directory: `src/assets/images/${collectionKey}`,
        publicPath: `/src/assets/images/${collectionKey}`,
      }),
      title: fieldPresets.title,
      description: fields.text({ label: 'Description' }),
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
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().optional(),
        image: image().optional(),
        title: z.string(),
        description: z.string().optional(),
      }),
  });
};

export const Pages = { keystatic, astro };
