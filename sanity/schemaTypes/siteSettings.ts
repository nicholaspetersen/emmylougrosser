import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main heading on the homepage hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Subtitle text below the headline',
    }),
    // About section
    defineField({
      name: 'aboutBio',
      title: 'About Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item becomes a paragraph in the About section on the homepage and bio page',
    }),
    // Featured book
    defineField({
      name: 'featuredBookDescription',
      title: 'Featured Book Description',
      type: 'text',
      rows: 5,
      description: 'Description paragraph shown in the Unparalleled Poetry section',
    }),
    defineField({
      name: 'featuredBookProgress',
      title: 'Open Access Progress (%)',
      type: 'number',
      description: 'Percentage toward open access goal (0–100)',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    // Support page
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
    // Bio page
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
      return { title: 'Site Settings' }
    },
  },
})
