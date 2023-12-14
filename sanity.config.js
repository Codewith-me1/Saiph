//configuring and gennerate sanity studio to admin path in next js project

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

// import project from './sanity/schemas/project-schemas';

const config = defineConfig({
  projectId: '8v3cy1at',

  dataset: 'production',

  title: 'saiph',

  apiVersion: '2022-03-07',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: { types: schemaTypes },
});
export default config;
