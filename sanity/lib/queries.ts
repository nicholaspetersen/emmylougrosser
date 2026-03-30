import { groq } from 'next-sanity'

export const workshopsQuery = groq`
  *[_type == "workshop"] | order(order asc) {
    _id,
    title,
    date,
    event,
    location,
    description,
    cta
  }
`

export const presentationsQuery = groq`
  *[_type == "presentation"] | order(order asc) {
    _id,
    title,
    event,
    organizer,
    location,
    date,
    link
  }
`

export const publicationsQuery = groq`
  *[_type == "publication"] | order(order asc) {
    _id,
    title,
    type,
    series,
    publisher,
    journal,
    description,
    note,
    link,
    relatedLinks
  }
`

export const resourcesQuery = groq`
  *[_type == "resource"] | order(order asc) {
    _id,
    title,
    type,
    source,
    description,
    note,
    link
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    collaborators,
    links
  }
`

export const faqItemsQuery = groq`
  *[_type == "faqItem"] | order(order asc) {
    _id,
    question,
    answer
  }
`

export const homePageQuery = groq`
  *[_type == "homePage" && _id == "homePage"][0] {
    heroHeadline,
    heroSubtitle,
    aboutBio,
    featuredBookDescription,
    featuredBookProgress
  }
`

export const bioPageQuery = groq`
  *[_type == "bioPage" && _id == "bioPage"][0] {
    bioParagraphs,
    education
  }
`

export const supportPageQuery = groq`
  *[_type == "supportPage" && _id == "supportPage"][0] {
    gofundmeUrl,
    mesaGlobalUrl,
    openAccessProgress
  }
`
