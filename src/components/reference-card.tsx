import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Reference } from "@/lib/data";
import { Quote } from "lucide-react";

interface ReferenceCardProps {
  reference: Reference;
}

const ReferenceCard = ({ reference }: ReferenceCardProps) => {
  return (
    <Card className="overflow-hidden border-border/50">
      <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex flex-col items-center text-center sm:w-48">
          <Avatar className="h-20 w-20 mb-3 border-2 border-primary/50">
            <AvatarImage src={reference.imageUrl} alt={reference.name} data-ai-hint={reference.imageHint} />
            <AvatarFallback>{reference.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-headline text-lg font-semibold">{reference.name}</h3>
          <p className="text-sm text-muted-foreground">{reference.title}</p>
          <p className="text-xs text-muted-foreground/80">{reference.company}</p>
        </div>
        <div className="relative flex-1">
          <Quote className="absolute -top-2 -left-3 h-8 w-8 text-primary/20" />
          <blockquote className="pl-4 italic text-muted-foreground">
            {reference.quote}
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;
