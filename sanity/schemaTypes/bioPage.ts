import { defineField } from 'sanity'
import type { DocumentDefinition } from 'sanity'

export const bioPage = {
  name: 'bioPage',
  title: 'Bio Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'bioParagraphs',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text shown in the bio section',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'degrees',
              title: 'Degrees',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'institution' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Bio Page' }
    },
  },
} satisfies DocumentDefinition & { __experimental_actions: string[] }
