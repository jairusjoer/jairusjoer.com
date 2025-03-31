import { fields } from '@keystatic/core';

export const fieldPresets = {
  // Required
  from: fields.text({ label: 'From', validation: { isRequired: true } }),
  title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
  to: fields.text({ label: 'To', validation: { isRequired: true } }),
  year: fields.text({ label: 'Year', validation: { isRequired: true } }),
  // Optional
  client: fields.text({ label: 'Client' }),
  content: fields.mdx({ label: 'Content' }),
  draft: fields.checkbox({ label: 'Draft' }),
  host: fields.text({ label: 'Host' }),
  location: fields.text({ label: 'Location' }),
  url: fields.url({ label: 'URL' }),
};
