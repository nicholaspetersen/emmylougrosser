/**
 * Migration script — moves data from the old siteSettings document
 * into the new homePage, bioPage, and supportPage documents.
 * Run with: node sanity/migrate-pages.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const envPath = resolve(__dirname, '../.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = Object.fromEntries(
  envContent
    .split('\n')
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const idx = line.indexOf('=')
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()]
    })
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

async function migrate() {
  console.log('Fetching existing siteSettings...')
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`)

  if (!settings) {
    console.log('No siteSettings document found — nothing to migrate.')
    process.exit(0)
  }

  console.log('Creating page documents from siteSettings data...\n')

  const transaction = client.transaction()

  transaction.createOrReplace({
    _type: 'homePage',
    _id: 'homePage',
    heroHeadline: settings.heroHeadline,
    heroSubtitle: settings.heroSubtitle,
    aboutBio: settings.aboutBio,
    featuredBookDescription: settings.featuredBookDescription,
    featuredBookProgress: settings.featuredBookProgress,
  })

  transaction.createOrReplace({
    _type: 'bioPage',
    _id: 'bioPage',
    bioParagraphs: settings.aboutBio,
    education: settings.education,
  })

  transaction.createOrReplace({
    _type: 'supportPage',
    _id: 'supportPage',
    gofundmeUrl: settings.gofundmeUrl,
    mesaGlobalUrl: settings.mesaGlobalUrl,
    openAccessProgress: settings.featuredBookProgress,
  })

  await transaction.commit()

  console.log('Done! Created:')
  console.log('  homePage  — hero, about bio, featured book')
  console.log('  bioPage   — bio paragraphs, education')
  console.log('  supportPage — donation URLs, open access progress')
  console.log('\nThe old siteSettings document is still in Sanity but is no longer used.')
  console.log('You can delete it manually in Studio > Vision or via the Sanity dashboard.')
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
