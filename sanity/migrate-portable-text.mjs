/**
 * Migration script — converts plain text arrays to Portable Text block format
 * for homePage.aboutBio, homePage.featuredBookDescription,
 * bioPage.bioParagraphs, and all faqItem.answer fields.
 *
 * Run with: node sanity/migrate-portable-text.mjs
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

let keyCounter = 0
function makeKey() {
  return `migrated${++keyCounter}`
}

function toBlocks(value) {
  if (!value) return []
  const strings = Array.isArray(value) ? value : [value]
  return strings.map((text) => ({
    _type: 'block',
    _key: makeKey(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: makeKey(), text: String(text), marks: [] }],
  }))
}

async function migrate() {
  console.log('Fetching documents to migrate...\n')

  const [homePage, bioPage, faqItems] = await Promise.all([
    client.fetch(`*[_type == "homePage" && _id == "homePage"][0]`),
    client.fetch(`*[_type == "bioPage" && _id == "bioPage"][0]`),
    client.fetch(`*[_type == "faqItem"]`),
  ])

  const transaction = client.transaction()

  if (homePage) {
    transaction.patch('homePage', {
      set: {
        aboutBio: toBlocks(homePage.aboutBio),
        featuredBookDescription: toBlocks(homePage.featuredBookDescription),
      },
    })
    console.log('  homePage — aboutBio and featuredBookDescription converted')
  }

  if (bioPage) {
    transaction.patch('bioPage', {
      set: {
        bioParagraphs: toBlocks(bioPage.bioParagraphs),
      },
    })
    console.log('  bioPage — bioParagraphs converted')
  }

  for (const item of faqItems) {
    transaction.patch(item._id, {
      set: {
        answer: toBlocks(item.answer),
      },
    })
  }
  console.log(`  ${faqItems.length} faqItems — answer fields converted`)

  await transaction.commit()
  console.log('\nDone! All plain text fields converted to Portable Text blocks.')
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
