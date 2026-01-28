"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "group relative overflow-hidden",
          "border-border/60 bg-gradient-to-b from-background to-background/60",
          "shadow-[0_1px_0_0_rgba(0,0,0,0.04)] hover:shadow-[0_18px_60px_-28px_rgba(0,0,0,0.45)]",
        )}
      >
        <div className="relative h-44 w-full overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[hsl(var(--brand-to)/0.22)] via-muted to-background" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
            <ArrowUpRight className="mt-0.5 size-4 text-muted-foreground transition group-hover:text-foreground" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="muted">
                {t}
              </Badge>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="absolute inset-0"
            aria-label={`Ver projeto: ${project.title}`}
          />
        </div>
      </Card>
    </motion.div>
  );
}

