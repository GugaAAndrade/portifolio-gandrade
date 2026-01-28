import { Metadata } from "next";

import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { getProjects } from "@/lib/db/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Vitrine de projetos do Gustavo Andrade — Next.js, Firebase, performance e UX premium.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Projetos</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Cada entrega aqui foi pensada com intenção: hierarquia visual, UI limpa
          e engenharia para performance/SEO. Use a busca e os filtros para
          navegar.
        </p>
      </div>

      <ProjectsExplorer projects={projects} />
    </div>
  );
}

