
import type { CareerItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronUp, GraduationCap } from "lucide-react";

interface CareerTimelineProps {
  items: CareerItem[];
}

const CareerTimeline = ({ items }: CareerTimelineProps) => {
  return (
    <div className="relative">
      {/* Centered timeline bar, hidden on small screens */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary -translate-x-1/2 hidden md:block"></div>
      <div className="absolute left-1/2 -top-2 -translate-x-1/2 z-10 bg-background p-0.5 hidden md:block">
          <ChevronUp className="h-5 w-5 text-primary" />
      </div>
      
      {items.map((item, index) => (
        <div key={index} className="relative flex flex-col md:flex-row w-full items-center">
          
          {/* Icon in the middle, hidden on small screens */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-background items-center justify-center w-12 h-12 rounded-full border-2 border-primary hidden md:flex">
            {item.type === 'Work' ? <Briefcase className="h-6 w-6 text-primary" /> : <GraduationCap className="h-6 w-6 text-primary" />}
          </div>

          {/* Mobile Card - always visible, but centered and full-width on mobile */}
          <div className="md:hidden w-full flex justify-center py-2">
            <Card className="w-full max-w-lg my-2">
              <CardHeader className="py-4">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <p className="font-semibold text-primary">{item.institution}</p>
              </CardHeader>
              <CardContent className="py-0">
                  <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
              </CardContent>
              {item.tags && item.tags.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2 pt-4 pb-4 px-6">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          </div>

          {index % 2 === 0 ? (
            // Desktop: Card on the left
            <>
              <div className="hidden md:flex w-1/2 pr-8 justify-end py-0">
                <Card className="w-full max-w-md my-2">
                  <CardHeader className="py-4">
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                      <p className="font-semibold text-primary">{item.institution}</p>
                  </CardHeader>
                  <CardContent className="py-0">
                      <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </CardContent>
                  {item.tags && item.tags.length > 0 && (
                    <CardFooter className="flex flex-wrap gap-2 pt-4 pb-4 px-6">
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </CardFooter>
                  )}
                </Card>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </>
          ) : (
            // Desktop: Card on the right
            <>
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:flex w-1/2 pl-8 justify-start py-0">
                 <Card className="w-full max-w-md my-2">
                  <CardHeader className="py-4">
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                      <p className="font-semibold text-primary">{item.institution}</p>
                  </CardHeader>
                  <CardContent className="py-0">
                      <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </CardContent>
                  {item.tags && item.tags.length > 0 && (
                    <CardFooter className="flex flex-wrap gap-2 pt-4 pb-4 px-6">
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </CardFooter>
                  )}
                </Card>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;
