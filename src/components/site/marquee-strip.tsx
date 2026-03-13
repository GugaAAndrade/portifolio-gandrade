"use client";

import { motion, useReducedMotion } from "framer-motion";

import { marqueeTrack } from "@/components/site/motion";
import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: string[];
  className?: string;
};

export function MarqueeStrip({ items, className }: MarqueeStripProps) {
  const reduceMotion = useReducedMotion();
  const trackItems = [...items, ...items];

  return (
    <div className={cn("curved-strip relative overflow-hidden py-6", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_0%,rgba(255,255,255,0.08),transparent_62%)]" />
      <motion.div
        className="flex w-max items-center gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/78 md:text-xs"
        animate={reduceMotion ? undefined : (marqueeTrack.animate as never)}
      >
        {trackItems.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-6">
            <span>{item}</span>
            <span className="text-white/35">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
