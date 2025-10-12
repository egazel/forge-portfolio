"use client";

import { useState, useTransition } from "react";
import { getSkillTags } from "@/lib/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CuratorForm() {
  const [isPending, startTransition] = useTransition();
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const projectDescription = formData.get("projectDescription") as string;
    const codeSamples = formData.get("codeSamples") as string;

    setError(null);
    setTags([]);

    startTransition(async () => {
      const result = await getSkillTags({ projectDescription, codeSamples });
      if (result.success) {
        setTags(result.tags);
      } else {
        setError(result.error || "An unknown error occurred.");
      }
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Describe your project in detail. What problem does it solve? What are its key features?"
              className="min-h-[150px]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="codeSamples">Code Samples (Optional)</Label>
            <Textarea
              id="codeSamples"
              name="codeSamples"
              placeholder="Paste relevant code snippets here. (e.g., Python scripts, C# classes, shader code)"
              className="min-h-[200px] font-code text-sm"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Tags
          </Button>
        </form>

        {(tags.length > 0 || error) && (
          <div className="mt-8">
            <h3 className="font-headline text-lg font-semibold mb-4 text-center">
              Curator's Suggestions
            </h3>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {tags.length > 0 && (
              <Card className="bg-background/50">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-base px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
