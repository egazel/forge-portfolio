import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/data";
import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: 'Projects | Synapse Portfolio',
  description: 'Explore the full range of tools and pipeline projects.',
};

const categories = ["Unreal Engine", "Unity", "Web", "Misc"];

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
      
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <ProjectGrid projects={projects.filter(p => p.category === category)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
