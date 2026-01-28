import { ExternalLink, Github, MessageCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects } from "@/lib/db/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-8">
            <ProjectGallery
              images={[project.coverImage, ...project.galleryImages].filter(
                Boolean,
              ) as string[]}
              title={project.title}
            />
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Visão geral
              </h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s} variant="muted">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight">Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-20 rounded-[var(--radius)] border border-border/60 bg-card p-5 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)]">
            <p className="text-sm font-semibold tracking-tight">
              Gostou do padrão?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Eu posso aplicar esse nível de UI + performance no seu projeto.
              Vamos alinhar escopo e prazo.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Button asChild variant="premium">
                <Link href="/contact">
                  Vamos conversar <MessageCircle className="ml-1 size-4" />
                </Link>
              </Button>
              {project.liveUrl ? (
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver ao vivo <ExternalLink className="ml-1 size-4" />
                  </a>
                </Button>
              ) : null}
              {project.repoUrl ? (
                <Button asChild variant="outline">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repositório <Github className="ml-1 size-4" />
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

