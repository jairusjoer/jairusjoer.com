import { fields } from '@keystatic/core';
import type { CollectionKey } from 'astro:content';

export const fieldPresets = {
  // Required
  from: fields.text({ label: 'From', validation: { isRequired: true } }),
  institution: fields.text({ label: 'Institution', validation: { isRequired: true } }),
  title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
  to: fields.text({ label: 'To', validation: { isRequired: true } }),
  year: fields.text({ label: 'Year', validation: { isRequired: true } }),
  // Optional
  client: fields.text({ label: 'Client' }),
  content: (collection: CollectionKey) =>
    fields.mdx({
      label: 'Content',
      description: 'Entering more than 300 characters turns the content into a page',
      options: {
        image: {
          directory: `src/assets/images/${collection}`,
          publicPath: `/src/assets/images/${collection}`,
        },
      },
    }),
  draft: fields.checkbox({ label: 'Draft' }),
  host: fields.text({ label: 'Host' }),
  location: fields.text({ label: 'Location' }),
  url: fields.url({ label: 'URL' }),
};
