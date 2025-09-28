import { importPage } from 'nextra/pages'

export default async function HomePage() {
  const { default: MDXContent } = await importPage(['index'])
  return <MDXContent />
}