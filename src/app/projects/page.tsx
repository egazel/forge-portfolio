import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Synapse Portfolio',
  description: 'Explore the full range of tools and pipeline projects.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3">
          All Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of tools, pipeline solutions, and procedural systems developed for games and animation.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
