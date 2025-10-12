
import ReferenceCard from "@/components/reference-card";
import { references } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'References | Synapse Portfolio',
  description: 'Professional references and endorsements.',
};

export default function ReferencesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase">
          Professional References<span className="text-primary animate-blink">|</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          What my colleagues and supervisors say about my work.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-8">
        {references.map((rec, index) => (
          <ReferenceCard key={index} reference={rec} />
        ))}
      </div>
    </div>
  );
}
