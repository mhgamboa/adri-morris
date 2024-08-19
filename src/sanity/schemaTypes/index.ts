import { type SchemaTypeDefinition } from "sanity";
import { post } from "./PostType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
};
