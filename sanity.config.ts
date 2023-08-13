import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "portfolio-sanity",
  title: "portfolio-sanity",

  projectId: "wt7y33vj",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
