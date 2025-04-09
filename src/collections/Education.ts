import type { CollectionKey } from 'astro:content';
import _ from 'lodash';

const collectionKey: CollectionKey = 'Education';

const keystatic = async () => {
  const { collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'from'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      from: fieldPresets.from,
      to: fieldPresets.to,
      title: fieldPresets.title,
      institution: fieldPresets.institution,
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
      from: z.string(),
      to: z.string(),
      draft: z.boolean().optional(),
      title: z.string(),
      institution: z.string(),
      location: z.string().optional(),
      url: z.string().optional(),
    }),
  });
};

export const Education = { keystatic, astro };
