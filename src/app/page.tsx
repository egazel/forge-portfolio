
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedGridBackground } from "@/components/animated-grid-background";

const profileImage = PlaceHolderImages.find(img => img.id === 'about-profile');

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="mb-20 md:mb-32">
        <AnimatedGridBackground />
        <div className="max-w-4xl mx-auto">
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
            <div className="md:col-span-2 prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground text-center md:text-left">
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                Tools and Pipeline TD
              </h1>
              <p>
                Hello! I'm a passionate Tools and Pipeline Developer with over a decade of experience in the trenches of the video game and 3D animation industries. My mission is to empower artists by building robust, intuitive, and efficient workflows that let creativity flourish without technical constraints.
              </p>
              <p>
                I specialize in Python and have extensive experience with APIs for major DCC applications like Maya, Houdini, and Nuke. From character auto-riggers to procedural environment tools and large-scale asset management systems, I thrive on solving complex problems and building the digital infrastructure that brings incredible worlds to life.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
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
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Work
        </h2>
        <ProjectGrid projects={projects.slice(0, 3)} />
      </section>
      
    </div>
  );
}
