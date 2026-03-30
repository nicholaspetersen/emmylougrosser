'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .id('homePage')
                      .child(
                        S.document()
                          .schemaType('homePage')
                          .documentId('homePage')
                      ),
                    S.listItem()
                      .title('Bio Page')
                      .id('bioPage')
                      .child(
                        S.document()
                          .schemaType('bioPage')
                          .documentId('bioPage')
                      ),
                    S.listItem()
                      .title('Support Page')
                      .id('supportPage')
                      .child(
                        S.document()
                          .schemaType('supportPage')
                          .documentId('supportPage')
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Collections')
              .child(
                S.list()
                  .title('Collections')
                  .items([
                    S.documentTypeListItem('workshop').title('Workshops'),
                    S.documentTypeListItem('presentation').title('Presentations'),
                    S.documentTypeListItem('publication').title('Publications'),
                    S.documentTypeListItem('resource').title('Other Resources'),
                    S.documentTypeListItem('project').title('Research Projects'),
                    S.documentTypeListItem('faqItem').title('FAQ Items'),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
