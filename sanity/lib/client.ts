import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return fallback
  try {
    return await client.fetch<T>(query)
  } catch {
    return fallback
  }
}
