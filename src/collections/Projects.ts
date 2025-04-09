import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Projects';

const keystatic = async () => {
  const { collection } = await import('@keystatic/core');
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
      client: presets.client,
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
      client: presets.client,
      url: presets.url,
    }),
  });
};

export const Projects = { keystatic, astro };
