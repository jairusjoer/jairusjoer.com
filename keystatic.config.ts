import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    Pages: collection({
      columns: ["title", "description"],
      entryLayout: "content",
      format: { contentField: "content" },
      label: "Pages",
      path: "src/content/Pages/*",
      slugField: "title",
      schema: {
        image: fields.image({ label: "Image" }),
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),

    WorkExperience: collection({
      columns: ["title", "from", "to"],
      entryLayout: "content",
      format: { contentField: "content" },
      label: "Work Experience",
      path: "src/content/WorkExperience/*",
      slugField: "title",
      schema: {
        from: fields.text({ label: "From" }),
        to: fields.text({ label: "To" }),
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        company: fields.text({ label: "Company" }),
        location: fields.text({ label: "Location " }),
        url: fields.url({ label: "URL" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
});
