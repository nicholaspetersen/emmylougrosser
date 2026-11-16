/**
 * Points the Resources Page featured slot at the existing 7th-grade resource.
 * Does not edit that resource, and does not re-seed the dataset.
 * Run with: node sanity/set-featured-resource.mjs
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

async function setFeaturedResource() {
  const matches = await client.fetch(
    `*[_type == "resource" && title match "*7th grader*"]{ _id, title }`
  )

  if (!matches?.length) {
    console.error('No resource found with "7th grader" in the title.')
    process.exit(1)
  }

  if (matches.length > 1) {
    console.error('More than one 7th-grade resource matched:')
    for (const match of matches) console.error(`  ${match._id}  ${match.title}`)
    process.exit(1)
  }

  const resource = matches[0]
  console.log(`Featuring "${resource.title}" (${resource._id})`)

  await client.createOrReplace({
    _id: 'resourcesPage',
    _type: 'resourcesPage',
    featuredResource: {
      _type: 'reference',
      _ref: resource._id,
    },
  })

  const saved = await client.fetch(
    `*[_id == "resourcesPage"][0]{ featuredResource->{ _id, title } }`
  )
  console.log(`resourcesPage now features "${saved?.featuredResource?.title}"`)
}

setFeaturedResource().catch((err) => {
  console.error(err)
  process.exit(1)
})
