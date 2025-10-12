import CareerTimeline from "@/components/career-timeline";
import { careerPath } from "@/lib/data";
import type { Metadata } from 'next';
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: 'Career | Synapse Portfolio',
  description: 'A timeline of my professional experience and education.',
};

export default function CareerPage() {
  const workExperience = careerPath.filter(item => item.type === 'Work');
  const education = careerPath.filter(item => item.type === 'Education');

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase">
          Career Path
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A summary of my professional journey and educational background.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 lg:col-start-2">
            <h2 className="font-headline text-3xl font-bold text-center mb-8 uppercase">Work Experience</h2>
            <CareerTimeline items={workExperience} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-20">
        <div className="lg:col-span-3 lg:col-start-2">
            <h2 className="font-headline text-3xl font-bold text-center mb-8 uppercase">Education</h2>
            <CareerTimeline items={education} />
        </div>
      </div>
    </div>
  );
}
