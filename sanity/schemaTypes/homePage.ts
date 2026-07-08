import { defineField } from 'sanity'
import type { DocumentDefinition } from 'sanity'

export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
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
    defineField({
      name: 'aboutBio',
      title: 'About Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text shown in the About Dr. Grosser section on the homepage',
    }),
    defineField({
      name: 'featuredBookDescription',
      title: 'Featured Book Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text shown in the Unparalleled Poetry section',
    }),
    defineField({
      name: 'openAccessBlurb',
      title: 'Open Access Blurb',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Short paragraph about the open access campaign shown below the book description on the home page',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
} satisfies DocumentDefinition & { __experimental_actions: string[] }
