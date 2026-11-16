import { defineField } from 'sanity'
import type { DocumentDefinition } from 'sanity'

export const resourcesPage = {
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'featuredResource',
      title: 'Featured Resource',
      type: 'reference',
      to: [{ type: 'resource' }],
      description:
        'Optional. Shown as a single card above Selected Publications. The resource still appears in Other Resources.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Resources Page' }
    },
  },
} satisfies DocumentDefinition & { __experimental_actions: string[] }
