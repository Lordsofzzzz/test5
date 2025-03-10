// filepath: /workspaces/test5/redteam-note/lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const notesDirectory = path.join(process.cwd(), 'app/content/notes') // Update the path to the new location

export async function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(notesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content)

  return {
    slug: realSlug,
    frontmatter: data,
    content: mdxSource
  }
}

export function getAllNotes() {
  const files = fs.readdirSync(notesDirectory)
  return files.map(file => file.replace(/\.md$/, ''))
}