import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "headline", title: "Headline", type: "string" },
        { name: "subheadline", title: "Subheadline", type: "text", rows: 3 },
        { name: "ctaText", title: "CTA Button Text", type: "string" },
        { name: "ctaUrl", title: "CTA URL", type: "string" },
        { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits / Key Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (emoji or class)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "socialProof",
      title: "Social Proof / Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value (e.g. 500+)", type: "string" },
            { name: "label", title: "Label (e.g. Pflegedienste)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "quote", title: "Quote", type: "text", rows: 4 },
            { name: "author", title: "Author Name", type: "string" },
            { name: "role", title: "Role / Company", type: "string" },
            { name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } },
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
      return { title: "Homepage" };
    },
  },
});
