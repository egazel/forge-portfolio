import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ThreeViewer from "@/components/three-viewer";
import type { Metadata } from 'next';

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
      <div className="mb-8">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-2 uppercase">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.category}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg shadow-black/20">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              data-ai-hint={project.imageHint}
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold uppercase">About the Project</h2>
            <div
              className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
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
          {project.modelUrl && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl uppercase">Interactive 3D Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square w-full bg-slate-900/50 rounded-md overflow-hidden border">
                  <ThreeViewer />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
