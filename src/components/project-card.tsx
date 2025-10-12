import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 border-transparent hover:border-primary/50 bg-card">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
           <div className="absolute top-3 right-3 bg-background/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="h-5 w-5 text-foreground" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Badge variant="secondary">{project.category}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
