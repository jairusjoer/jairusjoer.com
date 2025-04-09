import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Blog';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['title', 'description'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      image: fields.image({
        label: 'Image',
        directory: `src/assets/images/${collectionKey}`,
        publicPath: `/src/assets/images/${collectionKey}`,
      }),
      title: presets.title,
      description: fields.text({ label: 'Description' }),
      date: fields.date({ label: 'Date', validation: { isRequired: true } }),
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
        date: z.date(),
      }),
  });
};

export const Blog = { keystatic, astro };
