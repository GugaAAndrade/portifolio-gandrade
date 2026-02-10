import { ExternalLink, Github, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects } from "@/lib/db/projects";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Projeto não encontrado",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `/projects/${project.slug}`;
  const image = project.coverImage ? absoluteUrl(project.coverImage) : absoluteUrl("/icon");

  return {
    title: `${project.title}`,
    description: project.shortDescription,
    alternates: { canonical },
    keywords: [...project.tags, ...project.stack],
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: canonical,
      type: "article",
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const projectImage = project.coverImage ? absoluteUrl(project.coverImage) : absoluteUrl("/icon");
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: projectUrl,
    image: [projectImage, ...project.galleryImages.map((img) => absoluteUrl(img))],
    datePublished: new Date(project.createdAt).toISOString(),
    author: {
      "@type": "Person",
      name: "Gustavo Andrade",
      url: getSiteUrl(),
    },
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,hsl(var(--brand-to)/0.2),transparent_60%)]" />
      <Reveal className="mx-auto max-w-6xl px-4 py-14" y={24}>
        <div className="grid grid-cols-1 gap-10 rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] lg:grid-cols-12 md:p-8">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Projeto em destaque
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
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
            <div className="sticky top-20 rounded-[calc(var(--radius)-2px)] border border-border/60 bg-background/75 p-5 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] backdrop-blur-sm">
              <p className="text-sm font-semibold tracking-tight">
                Gostou desse padrão?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Eu posso aplicar esse nível de acabamento no seu projeto.
                Vamos alinhar escopo, prazo e próximos passos.
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
      </Reveal>
    </div>
  );
}
