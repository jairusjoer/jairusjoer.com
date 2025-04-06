import type { CollectionKey } from 'astro:content';
import _ from 'lodash';

const collectionKey: CollectionKey = 'Certifications';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const { fieldPresets } = await import('./presets/Fields');

  return collection({
    columns: ['title', 'issued', 'expires'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: fieldPresets.draft,
      issued: fields.text({ label: 'Issued', validation: { isRequired: true } }),
      expires: fields.text({ label: 'Expires' }),
      title: fieldPresets.title,
      organization: fields.text({ label: 'Organization', validation: { isRequired: true } }),
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
      issued: z.string(),
      expires: z.string().optional(),
      title: z.string(),
      organization: z.string(),
      url: z.string().optional(),
    }),
  });
};

export const Certifications = { keystatic, astro };
