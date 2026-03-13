"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { hoverLift, motionEase, motionTiming } from "@/components/site/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const primaryTag = project.tags[0] ?? "Projeto";

  return (
    <motion.div initial="rest" whileHover="hover" variants={hoverLift} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "surface-panel group flex h-full flex-col overflow-hidden rounded-[1.8rem] p-4 md:p-5",
          "transition-colors duration-300 hover:border-[hsl(var(--brand-to)/0.3)]",
        )}
        aria-label={`Ver projeto: ${project.title}`}
      >
        <div className="relative h-48 w-full overflow-hidden rounded-[1.3rem] border border-border/60 bg-[linear-gradient(180deg,hsl(var(--brand-to)/0.08),transparent)]">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,hsl(var(--brand-to)/0.16),hsl(var(--background))_55%)]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(2,6,23,0.58)_100%)]" />
          <div className="absolute left-4 top-4">
            <Badge className="bg-black/30 text-white backdrop-blur-md" variant="default">
              {primaryTag}
            </Badge>
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-[1.9rem] font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <motion.div
              transition={{ duration: motionTiming.fast, ease: motionEase }}
              className="rounded-full border border-border/70 p-2"
            >
              <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.div>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} className="bg-muted/70" variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
