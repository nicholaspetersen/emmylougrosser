import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Podcast', value: 'Podcast' },
          { title: 'Interview', value: 'Interview' },
          { title: 'Article', value: 'Article' },
          { title: 'Presentation', value: 'Presentation' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source / Venue',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'e.g. "Coming soon" or "Link forthcoming"',
    }),
    defineField({
      name: 'link',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
})
