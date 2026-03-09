import type { Metadata } from "next";
import Link from "next/link";

import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/db/projects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Portfólio de projetos reais com foco em conversão, clareza e apresentação premium.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const stacksCount = new Set(projects.flatMap((project) => project.stack)).size;
  const segmentsCount = new Set(projects.flatMap((project) => project.tags)).size;

  return (
    <div className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <Reveal className="mx-auto max-w-6xl px-4 pt-12" y={16}>
        <section className="p-1 md:p-2">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Projetos</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-foreground dark:text-white md:text-6xl">
            Portfólio com foco em <span className="text-[hsl(var(--brand-to))]">solução real</span>, clareza e resultado.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            Cada entrega mostra como estratégia, design e desenvolvimento se conectam para resolver problemas de negócio.
          </p>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-6xl px-4" y={14}>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Projetos publicados", value: projects.length },
            { label: "Stacks utilizadas", value: stacksCount },
            { label: "Tipos de solução", value: segmentsCount },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <article className="rounded-2xl border border-border/70 bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground dark:text-white">
                  {item.value}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mx-auto mt-4 max-w-6xl px-4" y={14}>
        <section className="p-1 md:p-2">
          <ProjectsExplorer projects={projects} />
        </section>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14" y={14}>
        <section className="rounded-2xl border border-border/70 bg-card p-6 text-center md:p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Próximo passo</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white md:text-5xl">
            Quer aplicar esse <span className="text-[hsl(var(--brand-to))]">padrão</span> no seu projeto?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Receba um direcionamento claro de escopo, prioridade e execução para seu cenário atual.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="premium" size="lg" className="min-h-11 px-8">
              <Link href="/contact">Solicitar proposta</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-11 px-8">
              <Link href="/">Voltar para home</Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
