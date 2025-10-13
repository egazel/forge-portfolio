
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
import Image from "next/image";

// This is a comment to help reset the editor view.

export default function Home() {
  
  return (
    <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
      <section>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
                <div className="relative w-48 h-80 md:w-64 md:h-96 rounded-lg overflow-hidden shadow-lg shadow-primary/30">
                  <Image
                    src="https://www.gazel.net/img/pp.jpg"
                    alt="Profile picture"
                    fill
                    sizes="(max-width: 768px) 33vw, 256px"
                    className="object-cover"
                  />
                </div>
            </div>
            <div className="md:col-span-2 prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase inline-block overflow-hidden whitespace-nowrap animate-typing">
                Hello, I'm Elie Gazel<span className="text-primary animate-blink">|</span>
              </h1>
              <p>
              I'm a french developer with 5 years of experience in the video game and animation industry, currently working as a 3D Tools and Pipeline Developer for <Link href="https://tatprod.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">TAT Studio</Link>. 
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-8 flex-wrap">
                <Button asChild size="lg">
                  <Link href="/projects">
                    My Projects <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://www.gazel.net/docs/CV.pdf" target="_blank" rel="noopener noreferrer">
                    My Resume <ArrowDownToLine />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
