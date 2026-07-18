/**
 * Uploads a file to the Sanity asset CDN and attaches it to a workshop document.
 * Usage: node sanity/upload-workshop-attachment.mjs <workshopId> <filePath>
 * Example: node sanity/upload-workshop-attachment.mjs SaDi3KiyGonvlAAL6EJbDf "/path/to/flyer.pdf"
 */

import { createClient } from '@sanity/client'
import { readFileSync, createReadStream } from 'fs'
import { resolve, dirname, basename } from 'path'
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

const [,, workshopId, filePath] = process.argv

if (!workshopId || !filePath) {
  console.error('Usage: node sanity/upload-workshop-attachment.mjs <workshopId> <filePath>')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

async function upload() {
  const absolutePath = resolve(filePath)
  const filename = basename(absolutePath)

  console.log(`Uploading "${filename}"...`)
  const asset = await client.assets.upload('file', createReadStream(absolutePath), {
    filename,
  })
  console.log(`  ✓ Asset uploaded: ${asset._id}`)

  console.log(`Patching workshop ${workshopId}...`)
  await client
    .patch(workshopId)
    .set({ attachment: { _type: 'file', asset: { _type: 'reference', _ref: asset._id } } })
    .commit()
  console.log(`  ✓ Workshop updated`)

  console.log(`\nDone! File is available at:\n  ${asset.url}`)
}

upload().catch((err) => {
  console.error(err)
  process.exit(1)
})
