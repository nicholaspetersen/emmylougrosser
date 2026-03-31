import { defineField, defineType } from 'sanity'

export const supportPage = defineType({
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __experimental_actions: ['update', 'publish'] as any,
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
      name: 'openAccessProgress',
      title: 'Open Access Progress (%)',
      type: 'number',
      description: 'Percentage toward open access goal shown on this page (0–100)',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Support Page' }
    },
  },
})
