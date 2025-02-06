'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production',
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({
      defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
    }),
  ],
})