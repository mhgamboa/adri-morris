import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPostType";
import { frontPage } from "./frontPageType";
import { aboutPage } from "./aboutPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, frontPage, aboutPage],
};
