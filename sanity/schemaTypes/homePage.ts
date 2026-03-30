import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main heading displayed in the hero banner',
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
      description: 'Each item becomes a paragraph in the About Dr. Grosser section',
    }),
    // Featured book section
    defineField({
      name: 'featuredBookDescription',
      title: 'Featured Book Description',
      type: 'text',
      rows: 5,
      description: 'Description paragraph in the Unparalleled Poetry section',
    }),
    defineField({
      name: 'featuredBookProgress',
      title: 'Open Access Progress (%)',
      type: 'number',
      description: 'Percentage toward open access goal (0–100)',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
