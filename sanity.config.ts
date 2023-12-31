import {defineConfig, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { pTheme } from './theme';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export default defineConfig({
  basePath: '/studio',
  name: 'POMA_Content_Studio',
  title: 'POMA Content Studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: pTheme,
})
