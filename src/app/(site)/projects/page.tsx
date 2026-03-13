import type { Metadata } from "next";
import Link from "next/link";

import { FinalCta } from "@/components/site/final-cta";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
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
    <div className="relative overflow-hidden pb-16 pt-[84px]">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(80%_100%_at_50%_0%,hsl(var(--brand-to)/0.18),transparent_60%)]" />

        <Reveal className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-18 md:pt-18" y={18}>
          <SectionHeading
            eyebrow="Projetos"
            align="left"
            className="max-w-4xl"
            title={
              <>
                Portfólio com foco em <span className="text-[hsl(var(--brand-to))]">solução real</span>, percepção e resultado.
              </>
            }
            description="Cada entrega mostra como estratégia, design e desenvolvimento se conectam para construir ativos digitais mais fortes."
          />

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Projetos publicados", value: projects.length },
              { label: "Stacks utilizadas", value: stacksCount },
              { label: "Tipos de solução", value: segmentsCount },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <article className="surface-panel flex min-h-[148px] flex-col justify-center rounded-[1.7rem] p-6 transition-all duration-300 hover:-translate-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-white">{item.value}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-8 max-w-6xl px-4" y={16}>
        <ProjectsExplorer projects={projects} />
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={18}>
        <FinalCta
          eyebrow="Próximo passo"
          title={
            <>
              Quer aplicar esse padrão no seu <span className="text-white/90">próximo projeto</span>?
            </>
          }
          description="Receba um direcionamento claro de escopo, prioridade e execução para transformar a sua presença digital em um ativo comercial melhor."
          primaryHref="/contact"
          primaryLabel="Solicitar proposta"
          secondaryHref="/"
          secondaryLabel="Voltar para home"
          proofs={["Clareza de escopo", "Direção técnica", "Entrega premium"]}
        />
      </Reveal>
    </div>
  );
}
