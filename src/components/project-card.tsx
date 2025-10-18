'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  activeCategory?: string;
}

const ProjectCard = ({ project, activeCategory }: ProjectCardProps) => {
  const isActive = !activeCategory || project.category === activeCategory;

  return (
    <motion.div layout className="group block">
      <Card 
        className={cn(
          "h-full overflow-hidden transition-all duration-300 ease-in-out",
          "bg-card",
          isActive 
            ? "opacity-100 scale-100 shadow-lg shadow-primary/20 border-primary/50" 
            : "opacity-20 scale-90 hover:opacity-100 hover:scale-100 hover:shadow-lg hover:shadow-primary/20"
        )}
      >
        <Link href={`/projects/${project.slug}`}>
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
            <div className="flex">
                <Badge variant="secondary">{project.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{project.description}</p>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
