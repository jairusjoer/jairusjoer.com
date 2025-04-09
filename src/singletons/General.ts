import _ from 'lodash';
import { Presets } from '../collections/Presets';

const singletonKey: string = 'General';

const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return singleton({
    label: _.startCase(singletonKey),
    path: `src/content/${singletonKey}/`,
    schema: {
      portrait: fields.image({
        label: 'Portrait',
        directory: `src/assets/images/${singletonKey}`,
        publicPath: `/src/assets/images/${singletonKey}`,
      }),
      name: fields.text({ label: 'Name', validation: { isRequired: true } }),
      profession: fields.text({ label: 'Profession' }),
      location: presets.location,
      pronouns: fields.text({ label: 'Pronouns' }),
      about: fields.mdx({
        label: 'About',
        options: {
          image: {
            directory: `src/assets/images/${singletonKey}`,
            publicPath: `/src/assets/images/${singletonKey}`,
          },
        },
      }),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');
  const presets = await Presets.z();

  return defineCollection({
    loader: glob({
      base: `./src/content/${singletonKey}`,
      pattern: '**/*.{yml,yaml}',
    }),
    schema: ({ image }) =>
      z.object({
        portrait: image().optional(),
        name: z.string(),
        profession: z.string().optional(),
        location: presets.location,
        pronouns: z.string().optional(),
      }),
  });
};

export const General = { keystatic, astro };
