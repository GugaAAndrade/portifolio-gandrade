import { Metadata } from "next";

import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { Reveal } from "@/components/site/reveal";
import { getProjects } from "@/lib/db/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos reais com foco em resultado: clareza de oferta, visual premium e páginas feitas para gerar contatos.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projetos — Gustavo Andrade",
    description:
      "Portfólio de projetos reais com foco em conversão, clareza e apresentação premium.",
    url: "/projects",
    type: "website",
    images: [{ url: "/icon", alt: "Projetos de Gustavo Andrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos — Gustavo Andrade",
    description:
      "Portfólio de projetos reais com foco em conversão e apresentação premium.",
    images: ["/icon"],
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,hsl(var(--brand-to)/0.2),transparent_60%)]" />
      <Reveal className="mx-auto max-w-6xl px-4 py-14" y={24}>
        <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Portfólio
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Projetos com padrão premium e foco em negócio.
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              Veja entregas reais com estratégia, design e execução para aumentar
              clareza da oferta, fortalecer a marca e gerar mais oportunidades.
            </p>
          </div>

          <ProjectsExplorer projects={projects} />
        </div>
      </Reveal>
    </div>
  );
}
