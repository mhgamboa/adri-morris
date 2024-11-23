import { defineType, Rule } from "sanity";

export const frontPage = defineType({
  name: "frontPage",
  title: "Front Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } },
  ],
});
