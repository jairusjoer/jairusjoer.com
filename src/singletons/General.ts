const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const { fieldPresets } = await import('../collections/presets/Fields');

  return singleton({
    label: 'General',
    path: 'src/content/General/',
    schema: {
      name: fields.text({ label: 'Name', validation: { isRequired: true } }),
      profession: fields.text({ label: 'Profession' }),
      location: fieldPresets.location,
      pronouns: fields.text({ label: 'Pronouns' }),
      about: fields.mdx({ label: 'About' }),
      order: fields.array(
        fields.select({
          label: 'Collection',
          options: [
            { label: 'Awards', value: 'Awards' },
            { label: 'Certifications', value: 'Certifications' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Exhibitions', value: 'Exhibitions' },
            { label: 'Features', value: 'Features' },
            { label: 'Pages', value: 'Pages' },
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
          itemLabel: (props) => props.value,
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
      base: './src/content/General',
      pattern: '**/*.{yml,yaml}',
    }),
    schema: z.object({
      name: z.string(),
      profession: z.string().optional(),
      location: z.string().optional(),
      pronouns: z.string().optional(),
      order: z.array(z.string()),
    }),
  });
};

export const General = { keystatic, astro };
