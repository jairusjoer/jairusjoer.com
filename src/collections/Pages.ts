import { defineCollection, z } from 'astro:content';
import { fields, collection } from '@keystatic/core';
import { glob } from 'astro/loaders';

const keystatic = collection({
  columns: ['title', 'description'],
  entryLayout: 'content',
  format: { contentField: 'content' },
  label: 'Pages',
  path: 'src/content/Pages/*',
  slugField: 'title',
  schema: {
    draft: fields.checkbox({ label: 'Draft' }),
    image: fields.image({ label: 'Image' }),
    title: fields.slug({
      name: { label: 'Title', validation: { isRequired: true } },
    }),
    description: fields.text({ label: 'Description' }),
    content: fields.mdx({ label: 'Content' }),
  },
});

const astro = defineCollection({
  loader: glob({
    base: './src/content/Pages',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    description: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    title: z.string(),
  }),
});

export const Pages = { keystatic, astro };
