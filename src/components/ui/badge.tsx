import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-xs font-medium text-foreground/90",
  {
    variants: {
      variant: {
        default: "",
        secondary: "bg-secondary text-secondary-foreground border-transparent",
        premium:
          "border-transparent bg-gradient-to-r from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] text-primary-foreground",
        muted: "bg-muted text-muted-foreground border-transparent",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

