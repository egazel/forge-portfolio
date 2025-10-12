import ReferenceCard from "@/components/reference-card";
import { references } from "@/lib/data";
import type { Metadata } from 'next';
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: 'References | Synapse Portfolio',
  description: 'Professional references and endorsements.',
};

export default function ReferencesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase">
          Professional References
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
