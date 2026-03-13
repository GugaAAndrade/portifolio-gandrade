"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type TestimonialsRailProps = {
  items: Testimonial[];
  className?: string;
};

function RailRow({
  items,
  direction = "left",
}: {
  items: Testimonial[];
  direction?: "left" | "right";
}) {
  const reduceMotion = useReducedMotion();
  const track = [...items, ...items, ...items];
  const x = direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"];

  return (
    <div className="overflow-hidden px-4 md:px-6">
      <motion.div
        className="flex w-max gap-4"
        animate={
          reduceMotion
            ? undefined
            : ({
                x,
                transition: {
                  duration: direction === "left" ? 32 : 36,
                  ease: "linear",
                  repeat: Infinity,
                },
              } as never)
        }
      >
        {track.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="surface-panel flex min-h-[220px] w-[320px] shrink-0 flex-col rounded-[1.6rem] p-5 md:w-[360px]"
          >
            <p className="text-sm leading-7 text-muted-foreground">“{item.quote}”</p>
            <div className="mt-auto pt-5">
              <p className="text-sm font-semibold tracking-tight">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.role}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsRail({ items, className }: TestimonialsRailProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <RailRow items={items} direction="left" />
      <RailRow items={items} direction="right" />
    </div>
  );
}
