import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPostBySlug, blogPosts } from "@/lib/data";
import { format } from "date-fns";
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Synapse Portfolio`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <header className="mb-8 text-center">
        <p className="text-muted-foreground mb-2">{format(new Date(post.date), "MMMM d, yyyy")}</p>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 shadow-lg shadow-black/20">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          data-ai-hint={post.imageHint}
          priority
        />
      </div>

      <div
        className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-code:text-accent"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
