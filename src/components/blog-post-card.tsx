import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/data";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 border-transparent hover:border-primary/50 bg-card">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={post.imageHint}
          />
          <div className="absolute top-3 right-3 bg-background/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="h-5 w-5 text-foreground" />
          </div>
        </div>
        <CardHeader>
          <p className="text-sm text-muted-foreground">{format(new Date(post.date), "MMMM d, yyyy")}</p>
          <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
