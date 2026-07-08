import { defineField } from 'sanity'
import type { DocumentDefinition } from 'sanity'

export const supportPage = {
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'gofundmeUrl',
      title: 'GoFundMe URL',
      type: 'url',
    }),
    defineField({
      name: 'mesaGlobalUrl',
      title: 'Mesa Global Donation URL',
      type: 'url',
    }),
    defineField({
      name: 'openAccessBlurb',
      title: 'Open Access Blurb',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Short paragraph about the open access campaign shown in the GoFundMe section',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Support Page' }
    },
  },
} satisfies DocumentDefinition & { __experimental_actions: string[] }
