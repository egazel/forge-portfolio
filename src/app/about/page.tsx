import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Synapse Portfolio',
  description: 'Learn more about the developer behind Synapse Portfolio.',
};

const profileImage = PlaceHolderImages.find(img => img.id === 'about-profile');

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3">
            About Me
          </h1>
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
    </div>
  );
}
