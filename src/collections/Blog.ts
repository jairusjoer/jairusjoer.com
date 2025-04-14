import _ from 'lodash';
import { presets } from '../content.presets';
import type { CollectionKey } from 'astro:content';

const collectionKey: CollectionKey = 'blog';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const fieldPresets = await presets.fields();

  return collection({
    columns: ['draft', 'title', 'description', 'date'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      image: fieldPresets.image(collectionKey),
      title: fieldPresets.titleSlug,
      description: fieldPresets.description,
      date: fields.date({ label: 'Date' }),
      content: fieldPresets.content(collectionKey),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');
  const zPresets = await presets.z();

  return defineCollection({
    loader: glob({
      base: `./src/content/${collectionKey}`,
      pattern: '**/*.{md,mdx}',
    }),
    schema: ({ image }) =>
      z.object({
        draft: zPresets.draft,
        image: image().optional(),
        title: zPresets.title,
        description: zPresets.description,
        date: z.date().optional(),
      }),
  });
};

export const blog = { keystatic, astro };
