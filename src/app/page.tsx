import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center mb-20 md:mb-32">
        <div 
          className="absolute inset-0 top-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.2),rgba(255,255,255,0))]"
          aria-hidden="true"
        />
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Synapse Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A creative tools and pipeline developer crafting the backbone of interactive entertainment and 3D animation.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              Explore Projects <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Work
        </h2>
        <ProjectGrid projects={projects.slice(0, 3)} />
      </section>
    </div>
  );
}
