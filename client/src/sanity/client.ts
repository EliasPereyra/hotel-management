import {createClient} from 'next-sanity'

const {PROJECT_ID} = process.env

export const client = createClient({
  projectId: PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
