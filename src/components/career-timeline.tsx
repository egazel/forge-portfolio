import type { CareerItem } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

interface CareerTimelineProps {
  items: CareerItem[];
}

const CareerTimeline = ({ items }: CareerTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-5 sm:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      {items.map((item, index) => (
        <div key={index} className="relative mb-12">
          <div className="flex items-center sm:justify-center">
            <div className="hidden sm:block w-[calc(50%-2.5rem)]"></div>
            <div className="absolute left-5 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-background flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary">
              {item.type === 'Work' ? <Briefcase className="h-5 w-5 text-primary" /> : <GraduationCap className="h-5 w-5 text-primary" />}
            </div>
            <div className="sm:hidden w-10"></div>
            <div className={`w-full sm:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'sm:pl-10' : 'sm:pl-10 sm:self-end sm:flex sm:flex-col sm:items-end'}`}>
                 <Card className={`w-full ${index % 2 === 1 ? 'sm:text-right' : ''}`}>
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
      ))}
    </div>
  );
};

export default CareerTimeline;
