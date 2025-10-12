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
        "pointer-events-none fixed inset-0 top-0 left-0 -z-10 h-full w-full bg-background",
        className
      )}
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] animate-grid"></div>
    </div>
  );
}
