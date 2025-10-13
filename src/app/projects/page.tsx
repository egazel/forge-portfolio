
'use client';

import { useState } from 'react';
import ProjectGrid from '@/components/project-grid';
import { projects } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['Unity', 'Web', 'Misc'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase inline-block overflow-hidden whitespace-nowrap animate-typing">
          All my projects<span className="text-primary animate-blink">|</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of all the projects I have worked on, to better myself and for fun.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Tabs
          defaultValue={activeCategory}
          onValueChange={setActiveCategory}
          className="w-auto"
        >
          <TabsList className="bg-card border p-1.5 rounded-full">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>


      <ProjectGrid projects={projects} activeCategory={activeCategory} />
    </div>
  );
}
