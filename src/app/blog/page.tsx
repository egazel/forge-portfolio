import BlogPostCard from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Synapse Portfolio',
  description: 'Thoughts and insights on tools, pipelines, and the 3D animation industry.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3">
          The Synapse Log
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts on technology, creative pipelines, and the future of 3D development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
