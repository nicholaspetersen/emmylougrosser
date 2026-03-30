/**
 * Seed script — populates Sanity with all existing hardcoded content.
 * Run with: node sanity/seed.mjs
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env.local manually
const envPath = resolve(__dirname, '../.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = Object.fromEntries(
  envContent
    .split('\n')
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split('=').map((s) => s.trim()))
    .filter(([k]) => k)
)

const projectId = env['NEXT_PUBLIC_SANITY_PROJECT_ID']
const dataset = env['NEXT_PUBLIC_SANITY_DATASET'] || 'production'
const token = env['SANITY_API_WRITE_TOKEN']

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

const workshops = [
  {
    _type: 'workshop',
    title: 'Virtual workshops on the Song of the Sea (Exodus 15:1-18)',
    date: 'Spring, 2026',
    cta: { label: 'Contact me', href: '/contact' },
    order: 1,
  },
  {
    _type: 'workshop',
    title: 'Biblical Hebrew Poetry and Cognitive Strategies',
    event: 'Cognitive Linguistics in Biblical Interpretation pre-SBL Workshop',
    location: 'Denver, CO',
    date: 'Friday, November 20, 2026, 3\u20136 pm',
    cta: { label: 'More info coming soon', href: '' },
    order: 2,
  },
]

const presentations = [
  {
    _type: 'presentation',
    title:
      'Building on Unparalleled Poetry: Contributions and Ongoing Research Questions for Biblical Hebrew Poetry',
    event:
      '\u2018My tongue is the pen of a skillful scribe\u2019: Poetics, Performance, and Philology',
    organizer: 'Centre for the Study of the Bible',
    location: 'Oriel College, University of Oxford',
    date: 'Sunday, April 26, 2026',
    link: {
      label: 'Centre for the Study of the Bible',
      url: 'https://www.centreforbible.oriel.ox.ac.uk/events/my-tongue-is-the-pen-of-a-skillful-scribe-poetics-performance-and-philology/',
    },
    order: 1,
  },
]

const publications = [
  {
    _type: 'publication',
    title:
      'Unparalleled Poetry: A Cognitive Approach to the Free-Rhythm Verse of the Hebrew Bible',
    type: 'Book',
    series: 'Cognition and Poetics Series',
    publisher: 'New York: Oxford University Press, 2023',
    link: 'https://global.oup.com/academic/product/unparalleled-poetry-9780190902360?cc=us&lang=en&#',
    description:
      'This monograph argues that the modern framework of "parallelism" is not adequate for understanding the structures and effects of biblical Hebrew poetry. I draw upon studies of human perception and the arts to present a new framework for how aural free-rhythm lines are possible in biblical poetry\u2014and even more, how they are a good cognitive fit, as lines fit to lines in part-whole organization. How we understand and hear poetic lines affects how we experience and interpret biblical poems.',
    note: 'Note: The content of my earlier articles on David\u2019s Lament (2017) and Symmetry in the Song of Deborah (2021) is revised and expanded and included in the monograph.',
    relatedLinks: [
      { label: "David's Lament article", url: 'https://muse.jhu.edu/pub/137/article/678742' },
      {
        label: 'Symmetry article',
        url: 'https://brill.com/view/journals/vt/71/2/article-p175_2.xml?language=en&srsltid=AfmBOoppPFye6WH_EtAmTAU9cJ6ed1GkycTRmYu5npdxhx5YUbKKHWU_',
      },
    ],
    order: 1,
  },
  {
    _type: 'publication',
    title:
      'Configuring Psalm 29 as a Poem: Cognitive Strategies and the Artful Reading Experience',
    type: 'Article',
    journal: 'Religions 15 (2024): 1428',
    link: 'https://doi.org/10.3390/rel15121428',
    description:
      'In this article I use color and mark-ups to demonstrate the concepts of Unparalleled Poetry, showing what Psalm 29 does as a poem and how it does it.',
    order: 2,
  },
  {
    _type: 'publication',
    title:
      'On the Nature of Poetry, Parallelism, and Methods: A Response to Ernst Wendland',
    type: 'Article',
    journal: 'Journal of Translation 20, no. 2 (2024): 81-97',
    link: 'https://doi.org/10.54395/JOT-E6UNP',
    description:
      'This article sets my work within the broader context of biblical poetry studies, explaining ways that I build upon and also depart from the work of other scholars.',
    order: 3,
  },
]

const resources = [
  {
    _type: 'resource',
    title: 'Biblical Hebrew Poetry with Emmylou Grosser',
    type: 'Podcast',
    source: 'The Biblical Languages Podcast (Biblingo)',
    link: 'https://www.youtube.com/watch?v=kYN_j-EEMrM',
    description:
      'Kevin Grasso and I had a fun time discussing what lines are in biblical Hebrew poetry, in the context of Psalm 29. Not surprisingly, we ran out of time before we ran out of things to talk about.',
    order: 1,
  },
  {
    _type: 'resource',
    title: 'Can a Cognitive Framework for Poetry Inform the Study of Narrative?',
    type: 'Interview',
    source: 'Diegesis in Mind',
    link: 'https://diegesis-in-mind.com/2024/02/01/can-a-cognitive-framework-for-poetry-inform-the-study-of-narrative/',
    description:
      'In this written interview, Michael Lyons asks some key questions about my cognitive approach to biblical poetry, including how it might help us with the study of narrative.',
    order: 2,
  },
  {
    _type: 'resource',
    title:
      'Written for my 7th grader: How does biblical Hebrew poetry work, and why should you care?',
    type: 'Article',
    description:
      'An accessible introduction to biblical Hebrew poetry written for a middle school audience, explaining the basics of how it works and why it matters.',
    note: 'Coming soon',
    order: 3,
  },
  {
    _type: 'resource',
    title:
      'How Lines Matter in Biblical Poetry: The Song of the Sea (Exodus 15:1-18) as a Case Study',
    type: 'Presentation',
    source: 'Bible Translation Conference, Chiang Mai, 2025',
    description:
      'Conference presentation created especially for people working in Bible translation.',
    note: 'Link forthcoming',
    order: 4,
  },
  {
    _type: 'resource',
    title:
      'Hebrew Poetic Structures and Potential Effects in Relation to Quality Poetry Translations',
    type: 'Presentation',
    source: 'Bible Translation Conference, Quality in Translation, Dallas, 2023',
    link: 'https://btconference.squarespace.com/2023-proceedings/hebrew-poetic-structures-and-potential-effects-in-relation-to-quality-poetry-translations',
    description:
      'Conference presentation created especially for people working in Bible translation.',
    order: 5,
  },
]

const projects = [
  {
    _type: 'project',
    title: 'Poetics of biblical poetry',
    description:
      'The structure and artistry of the Song of the Sea (Exodus 15:1-18), including a forthcoming article in the REPAC Symposium Proceedings, \u201cTextual Repetition and Creativity in Ancient Mesopotamia, Israel, Egypt and China\u201d (Universit\u00e4t Wien, February 2024)',
    icon: 'poetry',
    links: [
      {
        label: 'REPAC Project',
        url: 'https://ucrisportal.univie.ac.at/en/projects/repetition-parallelism-and-creativity-an-inquiry-into-the-constru/',
      },
    ],
    order: 1,
  },
  {
    _type: 'project',
    title: 'Biblical Hebrew poetry and the Masoretic accents',
    description:
      'The interface of poetic structure and the Masoretic accents from a prosodic phonological framework, a collaborative research project.',
    icon: 'accents',
    collaborators: [
      { name: 'Dr. Sophia Pitcher', url: 'https://ufs.academia.edu/SophiaPitcher' },
    ],
    order: 2,
  },
  {
    _type: 'project',
    title: 'Nonlinearity in biblical narrative',
    description:
      'The multidimensional arrangement of the narrative of the Song of the Sea (Exodus 15:1-21)',
    icon: 'narrative',
    order: 3,
  },
]

const faqItems = [
  {
    _type: 'faqItem',
    question: 'Why does biblical poetry matter?',
    answer: [
      'Biblical poetry is central in biblical traditions, comprising roughly one-third of the Bible including some of its most powerful and beloved texts. Understanding how ancient Hebrew poetry works helps us read and interpret these texts more faithfully and avoid importing our own poetry traditions\u2019 often very different reading strategies. Better understanding of what biblical poems do and how they do it also opens up the aesthetic dimension of Scripture, bringing us closer to experiencing the ancient artistry. Furthermore, a better understanding of the conventions of biblical poetry casts light on the conventions of biblical prose, since both belong to the same cultural-literary tradition.',
    ],
    order: 1,
  },
  {
    _type: 'faqItem',
    question: 'Do I need to read Hebrew to appreciate biblical poetry?',
    answer: [
      'You can appreciate dimensions of biblical poetry in translation\u2014for example, the images it displays, feelings it may evoke, and arguments it may make. This being said, like other poetries, biblical Hebrew poetry is crafted by poets who carefully put particular words from a particular language into a particular order. Poetry artfully exploits the possibilities of its language\u2014sounds, phrases, word meanings, and much more\u2014for structures, rhythms, and effects. Translations (especially with resource guides) can help us better appreciate poems we cannot read in an original language, but there is no one-to-one translation of a poem from one language into another. Poetry needs its original language for full expression.',
      'I believe that if more people were exposed to the beauty and joy of reading biblical poems in Hebrew, more people would be motivated to learn Hebrew. We also need wordsmiths who don\u2019t read Hebrew to see the artistry of biblical poems and be inspired to create more artful translations. My goal is to cultivate learning communities in which all the above happens with the result that biblical poems are experienced in new and compelling ways by their audiences.',
    ],
    order: 2,
  },
  {
    _type: 'faqItem',
    question: 'Who is this website for?',
    answer: [
      'This website is for anyone interested in the literary artistry of the Bible\u2014scholars, students, translators, pastors, and curious readers. Whether you\u2019re conducting academic research, preparing a sermon, or simply want to deepen your appreciation of Scripture\u2019s poetry, you\u2019ll find resources here to help.',
      'At this stage, the resources are especially designed for people working with the Hebrew text, with varying degrees of familiarity with current scholarly conversations. My intention is for the users of this website to in turn make this material usable for their own audiences in their own unique contexts. Subscribe to the mailing list to receive updates when content is added.',
    ],
    order: 3,
  },
  {
    _type: 'faqItem',
    question: 'Can I give input for future content?',
    answer: [
      'Yes! The resources on this website are for real people in real contexts, best created in partnership. The needs of different audiences are often vastly different, so please reach out about what would best help you in your context. The future content of this website will be shaped by those engaging with it.',
    ],
    order: 4,
  },
  {
    _type: 'faqItem',
    question: 'How is this work funded?',
    answer: [
      'This work is funded through a combination of institutional support, grants, and generous donations from individuals who believe in making biblical scholarship accessible. Your contributions help create open-access resources for researchers, educators, translators, and students worldwide.',
    ],
    order: 5,
  },
]

const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  heroHeadline: 'Illuminating the Artistry of Scripture',
  heroSubtitle: 'Research, publications, and resources that illuminate the Bible\u2019s literary artistry.',
  aboutBio: [
    'I\u2019m a biblical scholar and the author of Unparalleled Poetry, a book that challenges readers to move beyond the limited framework of parallelism and adopt a new framework that does justice to the multidimensional patterning of the free-rhythm poetry of the Hebrew Bible.',
    'I love studying the verbal art of the Bible, and I\u2019ve created this space to share my research and resources built from it.',
  ],
  featuredBookDescription:
    'The driving questions of Unparalleled Poetry are, what makes a line a line and a poem a poem, and what strategies do we need in order to read (= hear!) these poems according to their conventions? By highlighting the literary structures and potential effects of biblical Hebrew poetry, I seek to help scholars, translators, and readers across traditions better understand the text and its meaning\u2014and its potential to artistically impact and shape its audiences.',
  featuredBookProgress: 40,
  gofundmeUrl: 'https://www.gofundme.com/f/make-unparalleled-poetry-open-access',
  mesaGlobalUrl: 'https://www.mesaglobal.co/projects/68046',
  education: [
    {
      institution: 'University of Wisconsin\u2013Madison',
      degrees: [
        'PhD, Hebrew Bible and Northwest Semitic Languages, with a minor in linguistics',
        'MA, Hebrew Bible and Northwest Semitic Languages',
      ],
    },
    {
      institution: 'Gordon-Conwell Theological Seminary',
      degrees: ['MA, Old Testament', 'MA, New Testament'],
    },
    {
      institution: 'Wheaton College, Illinois',
      degrees: ['BA, Biblical and Theological Studies, with minors in math and music'],
    },
  ],
}

async function seed() {
  console.log('Seeding Sanity dataset...\n')

  const transaction = client.transaction()

  // Use createOrReplace for siteSettings (singleton with fixed _id)
  transaction.createOrReplace(siteSettings)

  // Use create for all other documents
  for (const doc of [...workshops, ...presentations, ...publications, ...resources, ...projects, ...faqItems]) {
    transaction.create(doc)
  }

  await transaction.commit()

  console.log('Done! Seeded:')
  console.log(`  ${workshops.length} workshops`)
  console.log(`  ${presentations.length} presentations`)
  console.log(`  ${publications.length} publications`)
  console.log(`  ${resources.length} resources`)
  console.log(`  ${projects.length} projects`)
  console.log(`  ${faqItems.length} FAQ items`)
  console.log('  1 site settings document')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
