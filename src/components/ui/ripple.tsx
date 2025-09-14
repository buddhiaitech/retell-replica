import React from "react";
import { cn } from "@/lib/utils";

export interface RippleProps {
  className?: string;
  circleClassName?: string;
}

const Ripple = React.forwardRef<HTMLDivElement, RippleProps>(
  ({ className, circleClassName }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          className
        )}
      >
        {Array.from({ length: 6 }, (_, i) => {
          const size = 100 + i * 60;
          const animationDelay = i * 0.8;
          
          return (
            <div
              key={i}
              className={cn(
                "absolute animate-pulse rounded-full border opacity-20",
                circleClassName
              )}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${animationDelay}s`,
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
            />
          );
        })}
      </div>
    );
  }
);

Ripple.displayName = "Ripple";

export { Ripple };