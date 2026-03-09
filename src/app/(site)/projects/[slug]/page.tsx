import { CalendarDays, ExternalLink, Github, Layers3, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects } from "@/lib/db/projects";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
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
    title: project.title,
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

  const liveUrl =
    typeof project.liveUrl === "string" && project.liveUrl.trim().length > 0
      ? project.liveUrl
      : undefined;
  const repoUrl =
    typeof project.repoUrl === "string" && project.repoUrl.trim().length > 0
      ? project.repoUrl
      : undefined;

  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const projectImage = project.coverImage ? absoluteUrl(project.coverImage) : absoluteUrl("/icon");

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: projectUrl,
    image: [projectImage, ...project.galleryImages.map((image) => absoluteUrl(image))],
    datePublished: new Date(project.createdAt).toISOString(),
    author: {
      "@type": "Person",
      name: "Gustavo Andrade",
      url: getSiteUrl(),
    },
  };

  const paragraphs = project.fullDescription
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  const images = [project.coverImage, ...project.galleryImages].filter(Boolean) as string[];

  const year = new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
    new Date(project.createdAt),
  );

  return (
    <div className="relative overflow-hidden pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-25" />

      <Reveal className="mx-auto max-w-6xl px-4 pt-10" y={24}>
        <section className="p-1 md:p-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="premium">Projeto real</Badge>
            <Badge variant="muted">{year}</Badge>
          </div>

          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            {project.shortDescription}
          </p>

          <Stagger className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              { label: "Entregáveis visuais", value: String(images.length) },
              { label: "Stack utilizada", value: String(project.stack.length) },
              { label: "Escopo", value: "Design, engenharia e conversão" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <article className="rounded-2xl border border-border/70 bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight">{item.value}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-6xl px-4" y={20}>
        <div className="grid gap-8 lg:grid-cols-12">
          <section className="space-y-6 lg:col-span-8">
            {project.coverImage ? (
              <article className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              </article>
            ) : null}

            <article className="rounded-2xl border border-border/70 bg-card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <CalendarDays className="size-4" />
                Narrativa do projeto
              </div>

              <div className="mt-4 space-y-4">
                {(paragraphs.length ? paragraphs : [project.fullDescription]).map((paragraph, index) => (
                  <p
                    key={`${project.slug}-paragraph-${index}`}
                    className="text-sm leading-7 text-muted-foreground md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-border/70 bg-card p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <Layers3 className="size-4" />
                Galeria do projeto
              </div>
              <div className="mt-4">
                <ProjectGallery images={images} title={project.title} />
              </div>
            </article>

            <Stagger className="grid gap-4 md:grid-cols-2">
              <StaggerItem>
                <article className="rounded-2xl border border-border/70 bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Tecnologias</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="muted">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-2xl border border-border/70 bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Objetivo</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            </Stagger>
          </section>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <article className="rounded-2xl border border-border/70 bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Próximo passo</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  Vamos levar esse <span className="text-[hsl(var(--brand-to))]">padrão</span> para o seu projeto?
                </h2>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  Definimos escopo, prioridade e cronograma para construir uma presença digital com impacto real.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild variant="premium" className="min-h-11">
                    <Link href="/contact">
                      Falar sobre projeto <MessageCircle className="ml-1 size-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="min-h-11">
                    <Link href="/projects">Ver outros projetos</Link>
                  </Button>

                  {liveUrl ? (
                    <Button asChild variant="outline" className="min-h-11">
                      <a href={liveUrl} target="_blank" rel="noreferrer">
                        Ver versão online <ExternalLink className="ml-1 size-4" />
                      </a>
                    </Button>
                  ) : null}

                  {repoUrl ? (
                    <Button asChild variant="outline" className="min-h-11">
                      <a href={repoUrl} target="_blank" rel="noreferrer">
                        Ver repositório <Github className="ml-1 size-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            </div>
          </aside>
        </div>
      </Reveal>
    </div>
  );
}
