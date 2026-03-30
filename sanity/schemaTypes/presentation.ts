import { defineField, defineType } from 'sanity'

export const presentation = defineType({
  name: 'presentation',
  title: 'Presentation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Display date string, e.g. "Sunday, April 26, 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'url', title: 'URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
