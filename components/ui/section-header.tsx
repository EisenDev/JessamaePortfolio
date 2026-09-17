import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.1] text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-[640px] text-base sm:text-lg text-muted leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
