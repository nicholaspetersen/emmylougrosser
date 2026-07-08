/**
 * Migration script — seeds the new openAccessBlurb portable-text field
 * on the homePage and supportPage documents with the updated copy.
 * Run with: node sanity/migrate-open-access-blurb.mjs
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

const homeBlurb = [
  {
    _type: 'block',
    _key: 'home-oab1',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'home-oab1-s1',
        marks: [],
        text: 'Academic monographs are inaccessible to many scholars globally due to cost. You can help make this book open access (free for download) for readers everywhere. We are 46% of the way there. If 35 more people donate the cost of one book ($120), Unparalleled Poetry will become open access.',
      },
    ],
  },
]

const supportBlurb = [
  {
    _type: 'block',
    _key: 'sup-oab1',
    style: 'normal',
    markDefs: [],
    children: [
      { _type: 'span', _key: 'sup-oab1-s1', marks: [], text: 'Help make this book free to download for readers everywhere. If 35 more people donate the cost of one book ($120), ' },
      { _type: 'span', _key: 'sup-oab1-s2', marks: ['em'], text: 'Unparalleled Poetry' },
      { _type: 'span', _key: 'sup-oab1-s3', marks: [], text: ' will become open access. We\u2019re already 46% of the way there!' },
    ],
  },
]

async function migrate() {
  console.log('Patching homePage.openAccessBlurb...')
  await client.patch('homePage').set({ openAccessBlurb: homeBlurb }).commit()
  console.log('  ✓ homePage updated')

  console.log('Patching supportPage.openAccessBlurb...')
  await client.patch('supportPage').set({ openAccessBlurb: supportBlurb }).commit()
  console.log('  ✓ supportPage updated')

  console.log('\nDone! Both pages now have the updated open access copy in Sanity.')
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
