import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Recommendation } from "@/lib/data";
import { Quote } from "lucide-react";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  return (
    <Card className="overflow-hidden border-border/50">
      <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex flex-col items-center text-center sm:w-48">
          <Avatar className="h-20 w-20 mb-3 border-2 border-primary/50">
            <AvatarImage src={recommendation.imageUrl} alt={recommendation.name} data-ai-hint={recommendation.imageHint} />
            <AvatarFallback>{recommendation.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-headline text-lg font-semibold">{recommendation.name}</h3>
          <p className="text-sm text-muted-foreground">{recommendation.title}</p>
          <p className="text-xs text-muted-foreground/80">{recommendation.company}</p>
        </div>
        <div className="relative flex-1">
          <Quote className="absolute -top-2 -left-3 h-8 w-8 text-primary/20" />
          <blockquote className="pl-4 italic text-muted-foreground">
            {recommendation.quote}
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
