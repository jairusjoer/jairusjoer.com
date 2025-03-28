import { defineCollection, z } from 'astro:content';
import { fields, singleton } from '@keystatic/core';
import { glob } from 'astro/loaders';

const keystatic = singleton({
  label: 'General',
  path: 'src/content/General/',
  schema: {
    name: fields.text({ label: 'Name', validation: { isRequired: true } }),
    profession: fields.text({ label: 'Profession' }),
    location: fields.text({ label: 'Location' }),
    pronouns: fields.text({ label: 'Pronouns' }),
    about: fields.mdx({ label: 'About' }),
  },
});

const astro = defineCollection({
  loader: glob({
    base: './src/content/General',
    pattern: '**/*.{yml,yaml}',
  }),
  schema: z.object({
    name: z.string(),
    profession: z.string().optional(),
    location: z.string().optional(),
    pronouns: z.string().optional(),
  }),
});

export const General = { keystatic, astro };
