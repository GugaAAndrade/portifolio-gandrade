"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import * as React from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Project } from "@/types/project";

function normalizeToken(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

function buildTagFacets(projects: Project[]) {
  const map = new Map<string, { label: string; count: number }>();

  for (const project of projects) {
    for (const tag of project.tags) {
      const key = normalizeToken(tag);
      const current = map.get(key);
      if (current) {
        current.count += 1;
      } else {
        map.set(key, { label: tag, count: 1 });
      }
    }
  }

  return Array.from(map.entries())
    .map(([key, value]) => ({ key, ...value }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const tags = React.useMemo(() => buildTagFacets(projects), [projects]);
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    const q = normalizeToken(query);
    return projects.filter((project) => {
      const byTag = !activeTag || project.tags.some((tag) => normalizeToken(tag) === activeTag);
      const byQuery =
        !q ||
        normalizeToken(project.title).includes(q) ||
        normalizeToken(project.shortDescription).includes(q) ||
        project.tags.some((tag) => normalizeToken(tag).includes(q)) ||
        project.stack.some((stack) => normalizeToken(stack).includes(q));
      return byTag && byQuery;
    });
  }, [projects, query, activeTag]);

  const activeTagLabel = activeTag ? tags.find((tag) => tag.key === activeTag)?.label ?? null : null;

  return (
    <div>
      <div className="surface-panel rounded-[1.9rem] p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nome, tecnologia ou tag"
              className="h-12 rounded-full border-border/60 bg-background/40 pl-9"
            />
          </div>

          <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1">
            <Button
              type="button"
              size="sm"
              className="min-h-10 shrink-0 rounded-full px-4"
              variant={activeTag ? "outline" : "secondary"}
              onClick={() => setActiveTag(null)}
            >
              Todos
              <span className="ml-1 rounded-full bg-foreground/10 px-2 py-0.5 text-[10px]">
                {projects.length}
              </span>
            </Button>

            {tags.slice(0, 16).map((tag) => {
              const active = activeTag === tag.key;
              return (
                <button
                  key={tag.key}
                  type="button"
                  onClick={() => setActiveTag(active ? null : tag.key)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active
                      ? "border-[hsl(var(--brand-to)/0.42)] bg-[hsl(var(--brand-to)/0.08)] text-white"
                      : "border-border/60 bg-background/25 text-muted-foreground hover:border-border/80 hover:text-white"
                  }`}
                >
                  {tag.label}
                  <span className="ml-1.5 rounded-full bg-foreground/10 px-1.5 py-0.5 text-[10px]">
                    {tag.count}
                  </span>
                </button>
              );
            })}

            {(activeTag || query.trim()) && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="min-h-10 shrink-0"
                onClick={() => {
                  setQuery("");
                  setActiveTag(null);
                }}
              >
                Limpar <X className="ml-1 size-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm text-muted-foreground">
        {filtered.length} projeto(s)
        {activeTagLabel ? ` • filtro: ${activeTagLabel}` : ""}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="mt-5 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              className="h-full"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
