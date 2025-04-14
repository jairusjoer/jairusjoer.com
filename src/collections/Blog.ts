import type { CollectionKey } from 'astro:content';

const collectionKey: CollectionKey = 'blog';

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

  return defineCollection({
    loader: glob({
      base: `./src/content/${collectionKey}`,
      pattern: '**/*.{md,mdx}',
    }),
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().optional(),
        image: image().optional(),
        title: z.string(),
        description: z.string().optional(),
        date: z.date().optional(),
      }),
  });
};

export const blog = { astro };
