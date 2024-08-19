import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPostType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost],
};
