"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { sectionReveal, staggerContainer, staggerItem } from "@/components/site/motion";
import { cn } from "@/lib/utils";

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { ...sectionReveal.hidden, y },
        show: {
          ...sectionReveal.show,
          transition: { ...sectionReveal.show.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = React.PropsWithChildren<{ className?: string; delay?: number }>;

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}
