import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPostType";
import { frontPage } from "./frontPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, frontPage],
};
