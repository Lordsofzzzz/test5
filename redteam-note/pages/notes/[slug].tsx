import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { getNoteBySlug, getAllNotes } from '@/lib/mdx'

export default function NotePage({ note }) {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <article>
        <h1 className="bg-gradient-to-r from-red-600 via-orange-500 to-red-800 bg-clip-text text-transparent text-4xl font-bold mb-8">
          {note.frontmatter.title}
        </h1>
        <MDXRemote 
          {...note.content}
          components={{
            h1: (props) => (
              <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100" />
            ),
            h2: (props) => (
              <h2 {...props} className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200" />
            ),
            h3: (props) => (
              <h3 {...props} className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200" />
            ),
            p: (props) => (
              <p {...props} className="my-4 leading-7 text-gray-700 dark:text-gray-300" />
            ),
            ul: (props) => (
              <ul {...props} className="my-6 ml-6 list-disc" />
            ),
            ol: (props) => (
              <ol {...props} className="my-6 ml-6 list-decimal" />
            ),
            li: (props) => (
              <li {...props} className="mb-2" />
            ),
            code: (props) => (
              <code {...props} className="bg-zinc-900 px-1.5 py-0.5 rounded text-red-400" />
            ),
            pre: (props) => (
              <pre {...props} className="bg-zinc-900 p-4 rounded-lg overflow-x-auto my-4 border border-zinc-800" />
            ),
          }}
        />
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = getAllNotes()
  const paths = notes.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return { notFound: true }
  }
  const note = await getNoteBySlug(params.slug as string)
  return { props: { note } }
}