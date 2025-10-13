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
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] animate-grid"></div>
    </div>
  );
}
