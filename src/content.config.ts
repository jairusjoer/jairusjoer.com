import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const Pages = defineCollection({
  loader: glob({
    base: './src/content/Pages',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const WorkExperience = defineCollection({
  loader: glob({
    base: './src/content/WorkExperience',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    from: z.string(),
    to: z.string(),
    title: z.string(),
    description: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = {
  Pages,
  WorkExperience,
};
