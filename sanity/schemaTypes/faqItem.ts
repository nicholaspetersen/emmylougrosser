import { defineField, defineType } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item in the list becomes a separate paragraph.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
})
