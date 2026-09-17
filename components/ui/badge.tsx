import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "outline" | "muted";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-surface-elevated text-foreground border border-border/40",
    accent: "bg-accent/15 text-accent border border-accent/30 font-semibold",
    outline: "border border-border text-muted hover:border-accent/40 hover:text-foreground",
    muted: "bg-surface-elevated/60 text-muted border border-transparent",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 text-xs transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
