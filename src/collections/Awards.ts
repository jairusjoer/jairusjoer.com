import { defineCollection, z } from 'astro:content';
import { fields, collection } from '@keystatic/core';
import { glob } from 'astro/loaders';

const keystatic = collection({
  columns: ['title', 'year'],
  entryLayout: 'content',
  format: { contentField: 'description' },
  label: 'Awards',
  path: 'src/content/Awards/*',
  slugField: 'title',
  schema: {
    draft: fields.checkbox({ label: 'Draft' }),
    title: fields.slug({
      name: { label: 'Title', validation: { isRequired: true } },
    }),
    year: fields.text({ label: 'Year', validation: { isRequired: true } }),
    host: fields.text({ label: 'Host' }),
    url: fields.url({ label: 'URL' }),
    description: fields.mdx({ label: 'Description' }),
  },
});

const astro = defineCollection({
  loader: glob({
    base: './src/content/Awards',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    year: z.string(),
    host: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const Awards = { keystatic, astro };
