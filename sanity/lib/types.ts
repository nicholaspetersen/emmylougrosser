export interface Workshop {
  _id: string
  title: string
  date: string
  event?: string
  location?: string
  description?: string
  cta?: { label: string; href: string }
}

export interface Presentation {
  _id: string
  title: string
  event: string
  organizer: string
  location: string
  date: string
  link?: { label: string; url: string }
}

export interface Publication {
  _id: string
  title: string
  type: 'Book' | 'Article'
  series?: string
  publisher?: string
  journal?: string
  description: string
  note?: string
  link?: string
  relatedLinks?: Array<{ label: string; url: string }>
}

export interface Resource {
  _id: string
  title: string
  type: 'Podcast' | 'Interview' | 'Article' | 'Presentation'
  source?: string
  description: string
  note?: string
  link?: string
}

export interface Project {
  _id: string
  title: string
  description: string
  icon: 'poetry' | 'accents' | 'narrative'
  collaborators?: Array<{ name: string; url: string }>
  links?: Array<{ label: string; url: string }>
}

export interface FaqItem {
  _id: string
  question: string
  answer: string | string[]
}

export interface Education {
  institution: string
  degrees: string[]
}

export interface SiteSettings {
  heroHeadline: string
  heroSubtitle: string
  aboutBio: string[]
  featuredBookDescription: string
  featuredBookProgress: number
  gofundmeUrl: string
  mesaGlobalUrl: string
  education: Education[]
}
