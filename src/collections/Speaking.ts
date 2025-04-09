import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Speaking';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['title', 'year'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      title: presets.title,
      year: presets.year,
      event: fields.text({ label: 'Event' }),
      location: presets.location,
      url: presets.url,
      content: presets.content(collectionKey),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');
  const presets = await Presets.z();

  return defineCollection({
    loader: glob({
      base: `./src/content/${collectionKey}`,
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      draft: presets.draft,
      title: presets.title,
      year: presets.year,
      event: z.string().optional(),
      location: presets.location,
      url: presets.url,
    }),
  });
};

export const Speaking = { keystatic, astro };
