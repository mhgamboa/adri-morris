import { defineType, Rule } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 200 },
      validation: (Rule: Rule) => Rule.required().error("Max 200 characters"),
    },
    {
      name: "titleImage",
      title: "Title image",
      type: "image",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", fields: [{ type: "text", name: "alt", title: "Alt" }] },
      ],
    },
  ],
});
