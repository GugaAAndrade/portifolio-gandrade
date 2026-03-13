import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--brand-to))]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

