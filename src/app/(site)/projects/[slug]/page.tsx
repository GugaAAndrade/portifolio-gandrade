import { CalendarDays, ExternalLink, Github, Layers3, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { FinalCta } from "@/components/site/final-cta";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
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

  const liveUrl = project.liveUrl?.trim() ? project.liveUrl : undefined;
  const repoUrl = project.repoUrl?.trim() ? project.repoUrl : undefined;
  const paragraphs = project.fullDescription.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  const images = [project.coverImage, ...project.galleryImages].filter(Boolean) as string[];
  const year = new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(new Date(project.createdAt));

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: [absoluteUrl(project.coverImage || "/icon"), ...project.galleryImages.map((image) => absoluteUrl(image))],
    datePublished: new Date(project.createdAt).toISOString(),
    author: {
      "@type": "Person",
      name: "Gustavo Andrade",
      url: getSiteUrl(),
    },
  };

  return (
    <div className="relative overflow-hidden pb-16 pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(80%_100%_at_50%_0%,hsl(var(--brand-to)/0.18),transparent_60%)]" />

        <Reveal className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-18 md:pt-18" y={18}>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge variant="premium">Projeto real</Badge>
              <Badge variant="muted">{year}</Badge>
            </div>

            <SectionHeading
              className="mt-2"
              align="left"
              title={project.title}
              description={project.shortDescription}
            />
          </div>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Entregáveis visuais", value: String(images.length) },
              { label: "Stack utilizada", value: String(project.stack.length) },
              { label: "Segmento", value: project.tags[0] ?? "Projeto digital" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <article className="surface-panel flex min-h-[140px] flex-col justify-center rounded-[1.6rem] p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-8 max-w-6xl px-4" y={16}>
        <div className="space-y-6">
          <section className="space-y-6">
            {project.coverImage ? (
              <article className="surface-panel overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
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

            <article className="surface-panel rounded-[1.9rem] p-6 md:p-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--brand-to))]">
                <CalendarDays className="size-4" />
                Narrativa do projeto
              </div>

              <div className="mt-5 space-y-4">
                {(paragraphs.length ? paragraphs : [project.fullDescription]).map((paragraph, index) => (
                  <p
                    key={`${project.slug}-paragraph-${index}`}
                    className="text-sm leading-8 text-muted-foreground md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <Button asChild variant="premium" className="min-h-11 rounded-full">
                  <Link href="/contact">
                    Falar sobre projeto <MessageCircle className="size-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="min-h-11 rounded-full">
                  <Link href="/projects">Ver outros projetos</Link>
                </Button>

                {liveUrl ? (
                  <Button asChild variant="outline" className="min-h-11 rounded-full">
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                      Ver versão online <ExternalLink className="size-4" />
                    </a>
                  </Button>
                ) : null}

                {repoUrl ? (
                  <Button asChild variant="outline" className="min-h-11 rounded-full">
                    <a href={repoUrl} target="_blank" rel="noreferrer">
                      Ver repositório <Github className="size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </article>

            <article className="surface-panel rounded-[1.9rem] p-6 md:p-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--brand-to))]">
                <Layers3 className="size-4" />
                Galeria do projeto
              </div>
              <div className="mt-5">
                <ProjectGallery images={images} title={project.title} />
              </div>
            </article>

            <Stagger className="grid gap-4 md:grid-cols-2">
              <StaggerItem>
                <article className="surface-panel rounded-[1.7rem] p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tecnologias</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="muted">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="surface-panel rounded-[1.7rem] p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Objetivo</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            </Stagger>
          </section>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={18}>
        <FinalCta
          eyebrow="Continuidade"
          title={
            <>
              Quer a mesma lógica de execução em <span className="text-white/90">um cenário diferente</span>?
            </>
          }
          description="Cada projeto nasce de um contexto diferente, mas a base continua a mesma: clareza, percepção premium e construção sólida."
          primaryHref="/contact"
          primaryLabel="Solicitar proposta"
          secondaryHref="/projects"
          secondaryLabel="Explorar mais projetos"
          proofs={["Direção estratégica", "Design premium", "Código robusto"]}
        />
      </Reveal>
    </div>
  );
}
