import CuratorForm from "@/components/curator-form";
import { Bot } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Curator | Synapse Portfolio',
  description: 'Use an AI-powered tool to suggest skill tags for your portfolio projects.',
};

export default function CuratorPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3">
            AI Portfolio Curator
          </h1>
          <p className="text-lg text-muted-foreground">
            Leverage AI to analyze your project descriptions and code to suggest relevant skill tags, ensuring your work is categorized perfectly.
          </p>
        </div>
        <CuratorForm />
      </div>
    </div>
  );
}
