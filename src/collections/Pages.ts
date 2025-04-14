import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Pages';

const keystatic = async () => {
  const { collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['draft', 'title', 'description'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      image: presets.image(collectionKey),
      title: presets.titleSlug,
      description: presets.description,
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
    schema: ({ image }) =>
      z.object({
        draft: presets.draft,
        image: image().optional(),
        title: presets.title,
        description: presets.description,
      }),
  });
};

export const Pages = { keystatic, astro };
