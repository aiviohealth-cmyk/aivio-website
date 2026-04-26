import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPage",
  title: "Pricing Page",
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
      name: "plans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Plan Name", type: "string" },
            { name: "price", title: "Price (e.g. €99 / Monat)", type: "string" },
            { name: "description", title: "Short Description", type: "text", rows: 2 },
            {
              name: "features",
              title: "Included Features",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "ctaText", title: "CTA Button Text", type: "string" },
            { name: "ctaUrl", title: "CTA URL", type: "string" },
            { name: "highlighted", title: "Highlight (recommended)", type: "boolean" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 4 },
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
      return { title: "Pricing Page" };
    },
  },
});
