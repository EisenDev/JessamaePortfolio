import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = {
  variants: {
    primary: "bg-foreground text-background hover:opacity-90 active:scale-[0.98]",
    secondary: "bg-surface-elevated text-foreground hover:bg-surface-elevated/80 border border-border/40",
    outline: "border border-border bg-transparent text-foreground hover:bg-surface-elevated/50",
    ghost: "text-foreground hover:bg-surface-elevated/50",
    accent: "bg-accent text-white hover:opacity-90 active:scale-[0.98]",
  },
  sizes: {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10 p-0 flex items-center justify-center",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants;
  size?: keyof typeof buttonVariants.sizes;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variants[variant],
          buttonVariants.sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
