"use client";

import { cn } from "@/lib/utils";

export function AnimatedGridBackground({
  className,
}: {
  className?: string;
}) {
  return (
<div
      className={cn(
        "pointer-events-none absolute inset-0 z-[-1] h-full w-full bg-background",
        className
      )}
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.25)_2px,transparent_2px),linear-gradient(to_bottom,hsl(var(--primary)/0.25)_2px,transparent_2px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] animate-grid"></div>
    </div>
  );
}
