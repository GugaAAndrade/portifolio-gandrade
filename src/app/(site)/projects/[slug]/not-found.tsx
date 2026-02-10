import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ProjectNotFoundPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,hsl(var(--brand-to)/0.2),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Projeto não encontrado
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Este projeto não está disponível.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Esse link pode ter mudado ou o projeto pode ter sido removido. Veja
            outros projetos disponíveis.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="premium">
              <Link href="/projects">Ver projetos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Falar comigo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

