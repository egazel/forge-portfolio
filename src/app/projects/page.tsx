'use client';

import { useState } from 'react';
import ProjectGrid from '@/components/project-grid';
import { projects } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['Unreal Engine', 'Unity', 'Web', 'Misc'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3">
          All Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of tools, pipeline solutions, and procedural systems developed
          for games and animation.
        </p>
      </div>

      <Tabs
        defaultValue={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ProjectGrid projects={projects} activeCategory={activeCategory} />
    </div>
  );
}
