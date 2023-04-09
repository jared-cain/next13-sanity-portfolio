import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'f1633pru',
  dataset: 'production',
  title: 'Sanity Next Portfolio',
  apiVersion: '2023-04-08',
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;