import _ from 'lodash';

const singletonKey: string = 'General';

const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const { fieldPresets } = await import('../collections/presets/Fields');

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
      location: fieldPresets.location,
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
      order: fields.array(
        fields.select({
          label: 'Collection',
          options: [
            { label: 'Awards', value: 'Awards' },
            { label: 'Certifications', value: 'Certifications' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Education', value: 'Education' },
            { label: 'Exhibitions', value: 'Exhibitions' },
            { label: 'Features', value: 'Features' },
            { label: 'Projects', value: 'Projects' },
            { label: 'Side Projects', value: 'SideProjects' },
            { label: 'Speaking', value: 'Speaking' },
            { label: 'Volunteering', value: 'Volunteering' },
            { label: 'Work Experience', value: 'WorkExperience' },
            { label: 'Writing', value: 'Writing' },
          ],
          defaultValue: 'WorkExperience',
        }),
        {
          label: 'Order',
          itemLabel: (props) => _.startCase(props.value),
        },
      ),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');

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
        location: z.string().optional(),
        pronouns: z.string().optional(),
        order: z.array(z.string()),
      }),
  });
};

export const General = { keystatic, astro };
