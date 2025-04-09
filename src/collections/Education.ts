import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Education';

const keystatic = async () => {
  const { collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['title', 'from'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      from: presets.from,
      to: presets.to,
      title: presets.title,
      institution: presets.institution,
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
      from: presets.from,
      to: presets.to,
      draft: presets.draft,
      title: presets.title,
      institution: presets.institution,
      location: presets.location,
      url: presets.url,
    }),
  });
};

export const Education = { keystatic, astro };
