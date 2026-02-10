"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import * as React from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Project } from "@/types/project";

function uniqTags(projects: Project[]) {
  const set = new Set<string>();
  for (const p of projects) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const tags = React.useMemo(() => uniqTags(projects), [projects]);
  const [q, setQ] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query)) ||
        p.stack.some((s) => s.toLowerCase().includes(query));
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [projects, q, activeTag]);

  return (
    <div className="mt-8">
      <div className="rounded-[calc(var(--radius)-4px)] border border-border/60 bg-background/75 p-4 backdrop-blur-sm md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nome, stack ou tag…"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant={activeTag ? "outline" : "secondary"}
            size="sm"
            onClick={() => setActiveTag(null)}
          >
            Todos
          </Button>
          {tags.slice(0, 10).map((t) => {
            const active = activeTag === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(active ? null : t)}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
              >
                <Badge variant={active ? "premium" : "muted"}>{t}</Badge>
              </button>
            );
          })}
          {(activeTag || q.trim()) && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setQ("");
                setActiveTag(null);
              }}
            >
              Limpar <X className="ml-1 size-4" />
            </Button>
          )}
        </div>
      </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-muted-foreground">
          {filtered.length} projeto(s)
          {activeTag ? ` • tag: ${activeTag}` : ""}
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
