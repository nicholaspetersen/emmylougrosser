import { defineField, defineType } from 'sanity'

export const bioPage = defineType({
  name: 'bioPage',
  title: 'Bio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'bioParagraphs',
      title: 'Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item becomes a paragraph in the bio section',
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
})
