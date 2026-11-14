/**
 * Sets linkType on every resource and, for a Sanity-hosted file URL,
 * attaches that existing asset. Does not remove or rewrite `link` or `note`.
 * Run with: node sanity/migrate-resource-links.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const envContent = readFileSync(resolve(__dirname, '../.env.local'), 'utf-8')
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

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

function assetIdFromCdnUrl(url) {
  const match = String(url).match(/cdn\.sanity\.io\/files\/[^/]+\/[^/]+\/([a-f0-9]+)\.([a-z0-9]+)(?:\?|$)/i)
  if (!match) return null
  return `file-${match[1]}-${match[2]}`
}

async function migrate() {
  const resources = await client.fetch(
    `*[_type == "resource" && !(_id in path("drafts.**"))] | order(order asc) {
      _id, title, link, note, linkType, attachment
    }`
  )
  console.log(`Found ${resources.length} published resource(s)\n`)

  for (const resource of resources) {
    console.log(`"${resource.title}" (${resource._id})`)
    console.log(`  before: linkType=${resource.linkType ?? 'null'} link=${resource.link ?? 'null'} note=${resource.note ?? 'null'}`)

    const assetId = resource.link ? assetIdFromCdnUrl(resource.link) : null
    const asset = assetId ? await client.fetch(`*[_id == $id][0]{ _id, url }`, { id: assetId }) : null

    let linkType = 'none'
    let attachment = null

    if (asset?._id) {
      linkType = 'file'
      attachment = { _type: 'file', asset: { _type: 'reference', _ref: asset._id } }
      console.log(`  → file attachment ${asset._id} (existing URL kept)`)
    } else if (assetId) {
      linkType = 'url'
      console.log(`  → Sanity file URL did not match an asset; keeping it as a URL`)
    } else if (resource.link) {
      linkType = 'url'
      console.log(`  → URL kept`)
    } else {
      console.log(`  → no link; placeholder only`)
    }

    const patch = client.patch(resource._id).set({ linkType })
    if (attachment) patch.set({ attachment })
    await patch.commit()

    const after = await client.fetch(`*[_id == $id][0]{ link, note, linkType, "asset": attachment.asset._ref }`, { id: resource._id })
    if (after.link !== (resource.link ?? null) && !(after.link == null && resource.link == null)) {
      throw new Error(`Link changed on ${resource._id}`)
    }
    if ((after.note ?? null) !== (resource.note ?? null)) {
      throw new Error(`Note changed on ${resource._id}`)
    }
    console.log(`  after:  linkType=${after.linkType} link=${after.link ?? 'null'} note=${after.note ?? 'null'} asset=${after.asset ?? 'null'}\n`)
  }

  console.log('Done. Existing link and note values were left in place.')
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
