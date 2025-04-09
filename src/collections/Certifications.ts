import type { CollectionKey } from 'astro:content';
import _ from 'lodash';
import { Presets } from './Presets';

const collectionKey: CollectionKey = 'Certifications';

const keystatic = async () => {
  const { fields, collection } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return collection({
    columns: ['title', 'issued', 'expires'],
    entryLayout: 'content',
    format: { contentField: 'content' },
    label: _.startCase(collectionKey),
    path: `src/content/${collectionKey}/*`,
    slugField: 'title',
    schema: {
      draft: presets.draft,
      issued: fields.text({ label: 'Issued', validation: { isRequired: true } }),
      expires: fields.text({ label: 'Expires' }),
      title: presets.title,
      institution: presets.institution,
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
      issued: z.string(),
      expires: z.string().optional(),
      title: presets.title,
      institution: presets.institution,
      url: presets.url,
    }),
  });
};

export const Certifications = { keystatic, astro };
