import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThreeViewer from "@/components/three-viewer";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.title} | Synapse Portfolio`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug:string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-8 flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
            <Link href="/projects">
                <ArrowLeft />
                <span className="sr-only">Back to Projects</span>
            </Link>
        </Button>
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.category}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg shadow-black/20">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              data-ai-hint={project.imageHint}
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold uppercase">About the Project</h2>
            <div
              className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
