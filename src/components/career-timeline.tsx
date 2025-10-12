import type { CareerItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

interface CareerTimelineProps {
  items: CareerItem[];
}

const CareerTimeline = ({ items }: CareerTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative mb-12 flex justify-center">
          {/* Center Dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-background flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary">
            {item.type === 'Work' ? <Briefcase className="h-6 w-6 text-primary" /> : <GraduationCap className="h-6 w-6 text-primary" />}
          </div>

          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
            {index % 2 !== 0 && <div className="w-full"></div>}
          </div>

          <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
            <Card className="w-full max-w-md inline-block text-left">
              <CardHeader>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <p className="font-semibold text-primary">{item.institution}</p>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
              {item.tags && item.tags.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2 pb-4 px-6 justify-start">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;
