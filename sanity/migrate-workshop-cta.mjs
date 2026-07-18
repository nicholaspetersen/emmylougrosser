/**
 * Migration — consolidates the top-level `attachment` field into `cta.attachment`
 * and sets `linkType` on all workshop CTA objects.
 * Run with: node sanity/migrate-workshop-cta.mjs
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

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

async function migrate() {
  const workshops = await client.fetch(`*[_type == "workshop"]{ _id, title, cta, attachment }`)
  console.log(`Found ${workshops.length} workshop(s)\n`)

  for (const w of workshops) {
    console.log(`Workshop: "${w.title}" (${w._id})`)

    const hasTopLevelAttachment = !!w.attachment?.asset?._ref
    const hasCtaHref = !!w.cta?.href

    let patch = client.patch(w._id)

    if (hasTopLevelAttachment) {
      // Move top-level attachment into cta.attachment and set linkType to 'file'
      patch = patch.set({
        'cta.linkType': 'file',
        'cta.attachment': w.attachment,
      }).unset(['attachment'])
      console.log(`  → linkType = 'file', attachment moved into cta`)
    } else if (hasCtaHref) {
      patch = patch.set({ 'cta.linkType': 'url' })
      console.log(`  → linkType = 'url'`)
    } else if (w.cta) {
      patch = patch.set({ 'cta.linkType': 'none' })
      console.log(`  → linkType = 'none'`)
    } else {
      console.log(`  → no cta, skipping`)
      continue
    }

    await patch.commit()
    console.log(`  ✓ patched\n`)
  }

  console.log('Done!')
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
