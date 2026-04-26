import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuresPage",
  title: "Features Page",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Introduction Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "features",
      title: "Feature List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Feature Name", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "icon", title: "Icon (emoji or lucide name)", type: "string" },
            { name: "screenshot", title: "Screenshot", type: "image", options: { hotspot: true } },
            {
              name: "highlights",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text", rows: 3 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Features Page" };
    },
  },
});
