import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Contact';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['draft', 'title', 'url', 'username'],
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      title: presets.title,
      url: fields.url({ label: 'URL', validation: { isRequired: true } }),
      username: fields.text({ label: 'Username', validation: { isRequired: true } }),
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
      pattern: '**/*.{yml,yaml}',
    }),
    schema: z.object({
      draft: presets.draft,
      title: presets.title,
      url: z.string(),
      username: z.string(),
    }),
  });
};

export const Contact = { keystatic, astro };
