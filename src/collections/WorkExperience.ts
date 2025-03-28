import { defineCollection, z } from 'astro:content';
import { fields, collection } from '@keystatic/core';
import { glob } from 'astro/loaders';

const keystatic = collection({
  columns: ['title', 'from', 'to'],
  entryLayout: 'content',
  format: { contentField: 'description' },
  label: 'Work Experience',
  path: 'src/content/WorkExperience/*',
  slugField: 'title',
  schema: {
    draft: fields.checkbox({ label: 'Draft' }),
    from: fields.text({ label: 'From', validation: { isRequired: true } }),
    to: fields.text({ label: 'To', validation: { isRequired: true } }),
    title: fields.slug({
      name: { label: 'Title', validation: { isRequired: true } },
    }),
    company: fields.text({
      label: 'Company',
      validation: { isRequired: true },
    }),
    location: fields.text({ label: 'Location ' }),
    url: fields.url({ label: 'URL' }),
    description: fields.mdx({ label: 'Description' }),
  },
});

const astro = defineCollection({
  loader: glob({
    base: './src/content/WorkExperience',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    draft: z.boolean().optional(),
    from: z.string(),
    to: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    url: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const WorkExperience = { keystatic, astro };
