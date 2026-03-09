"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const primaryTag = project.tags[0] ?? "Projeto";

  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group block rounded-2xl border border-border/70 bg-card p-6",
          "shadow-[0_16px_40px_-34px_rgba(0,0,0,0.35)] transition-colors hover:border-[hsl(var(--brand-to)/0.45)]",
        )}
        aria-label={`Ver projeto: ${project.title}`}
      >
        <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-to))]">
          {primaryTag}
        </p>

        <div className="relative mt-4 h-40 w-full overflow-hidden rounded-xl border border-border/70">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,hsl(var(--brand-to)/0.16),hsl(var(--background))_55%)]" />
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              {project.title}
            </h3>
            <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">{project.shortDescription}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
