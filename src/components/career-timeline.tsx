import type { CareerItem } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

interface CareerTimelineProps {
  items: CareerItem[];
}

const CareerTimeline = ({ items }: CareerTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden sm:block"></div>
      <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2 sm:hidden"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative mb-12">
          <div className="flex items-center justify-center">
            {/* Timeline Item */}
            <div className="sm:flex w-full items-center">

              {/* Left Side (for even items on desktop) */}
              <div className={`hidden sm:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-10 text-right' : 'pr-10'}`}>
                {index % 2 === 0 && (
                   <Card className="w-full max-w-sm">
                      <CardHeader>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                          <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                          <p className="font-semibold text-primary">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                  </Card>
                )}
              </div>

              {/* Center Dot */}
              <div className="absolute left-5 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-background flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary">
                {item.type === 'Work' ? <Briefcase className="h-5 w-5 text-primary" /> : <GraduationCap className="h-5 w-5 text-primary" />}
              </div>

              {/* Right Side (for odd items on desktop and all on mobile) */}
              <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'pl-10' : 'sm:justify-start sm:pl-10'}`}>
                 <div className="pl-10 sm:pl-0">
                    {index % 2 !== 0 && (
                        <div className="hidden sm:block">
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <p className="text-sm text-muted-foreground">{item.date}</p>
                                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                    <p className="font-semibold text-primary">{item.institution}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                    <div className="sm:hidden">
                         <Card className="w-full">
                            <CardHeader>
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                <p className="font-semibold text-primary">{item.institution}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;
