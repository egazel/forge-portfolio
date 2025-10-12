import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const profileImage = PlaceHolderImages.find(img => img.id === 'about-profile');

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

      <section className="mb-20 md:mb-32">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Work
        </h2>
        <ProjectGrid projects={projects.slice(0, 3)} />
      </section>
      
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-3">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              The architect behind the tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              {profileImage && (
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg shadow-primary/20">
                  <Image
                    src={profileImage.imageUrl}
                    alt="Profile picture"
                    fill
                    sizes="(max-width: 768px) 33vw, 256px"
                    className="object-cover"
                    data-ai-hint={profileImage.imageHint}
                  />
                </div>
              )}
            </div>
            <div className="md:col-span-2 prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground">
              <p>
                Hello! I'm a passionate Tools and Pipeline Developer with over a decade of experience in the trenches of the video game and 3D animation industries. My mission is to empower artists by building robust, intuitive, and efficient workflows that let creativity flourish without technical constraints.
              </p>
              <p>
                I specialize in Python and have extensive experience with APIs for major DCC applications like Maya, Houdini, and Nuke. From character auto-riggers to procedural environment tools and large-scale asset management systems, I thrive on solving complex problems and building the digital infrastructure that brings incredible worlds to life.
              </p>
              <p>
                When I'm not writing code, you can find me exploring the latest rendering techniques, tinkering with game engines, or getting lost in a good sci-fi novel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
