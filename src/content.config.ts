// Collections
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog
const blog = defineCollection({
  loader: glob({
    base: `./src/content/blog`,
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      image: image().optional(),
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
    }),
});

// Pages
const pages = defineCollection({
  loader: glob({
    base: `./src/content/pages`,
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      image: image().optional(),
      title: z.string(),
      description: z.string().optional(),
    }),
});

// Site
const site = defineCollection({
  loader: glob({
    base: `./src/content`,
    pattern: 'site.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      general: z.object({
        image: image().optional(),
        name: z.string(),
        description: z.string().optional(),
        links: z.record(z.string()),
      }),
      collections: z.record(
        z.array(
          z.object({
            meta: z.string(),
            title: z.string(),
            description: z.string().optional(),
            url: z.string().url().optional(),
          }),
        ),
      ),
      footer: z.record(z.string()),
    }),
});

export const collections = {
  blog,
  pages,
  site,
};
