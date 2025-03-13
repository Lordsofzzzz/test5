import { getNoteSlugs, getNoteBySlug } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface NotePageProps {
  params: {
    slug: string;
  };
}

export default function NotePage({ params }: NotePageProps) {
  const content = getNoteBySlug(params.slug);
  
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-8 px-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = getNoteSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}