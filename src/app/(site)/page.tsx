import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/db/projects";

export default async function HomePage() {
  const featured = await getFeaturedProjects();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-260px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-to)/0.22)] via-[hsl(var(--brand-from)/0.10)] to-transparent blur-3xl" />
          <div className="absolute bottom-[-240px] right-[-240px] h-[520px] w-[520px] rounded-full bg-[hsl(var(--brand-to)/0.16)] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="premium" className="gap-1">
                <Sparkles className="size-3.5" />
                Premium delivery
              </Badge>
              <Badge variant="muted">Performance & SEO</Badge>
              <Badge variant="muted">UX que converte</Badge>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Sites e sistemas com estética premium, performance e conversão.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
              Eu sou o Gustavo Andrade. Construo experiências rápidas e elegantes
              em Next.js — com foco em UX, SEO e engenharia limpa. Se você quer
              algo “de verdade” (sem gambiarra), vamos conversar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="premium" size="lg">
                <Link href="/contact">
                  Vamos conversar <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">Ver projetos</Link>
              </Button>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Entrega rápida, sem perder qualidade",
                "Atenção obsessiva a detalhes de UI",
                "Arquitetura escalável e limpa",
                "Deploy pronto para Vercel",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-secondary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative h-full overflow-hidden rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.6)]">
              <div className="flex flex-col gap-5">
                <p className="text-sm font-medium text-muted-foreground">
                  Prova social (resumo)
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { kpi: "+Core Web Vitals", label: "melhoria de performance" },
                    { kpi: "+Conversão", label: "copy e UX orientadas a venda" },
                    { kpi: "Automação", label: "menos trabalho manual" },
                    { kpi: "SEO", label: "base técnica bem feita" },
                  ].map((x) => (
                    <div
                      key={x.kpi}
                      className="rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/70 p-4"
                    >
                      <p className="text-sm font-semibold tracking-tight">
                        {x.kpi}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {x.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/70 p-4">
                  <p className="text-sm font-semibold tracking-tight">
                    “Design bonito vende mais quando é rápido.”
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Eu uno estética premium + engenharia para entregar páginas que
                    carregam rápido, passam confiança e levam o usuário até o
                    CTA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Projetos em destaque
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vitrine de entregas reais — foco em UX, performance e clareza.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/projects">Ver todos</Link>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Serviços</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Entrega ponta a ponta — do design ao deploy, com código limpo.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {[
              {
                title: "Sites institucionais",
                desc: "Credibilidade + performance + SEO, com visual premium.",
              },
              {
                title: "Landing pages",
                desc: "Copy + UI + otimização para conversão e anúncios.",
              },
              {
                title: "Sistemas e dashboards",
                desc: "Admin, CRUD, permissões, métricas e integrações.",
              },
              {
                title: "Automação e integrações",
                desc: "Menos trabalho manual: fluxos, APIs e processos.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-[var(--radius)] border border-border/60 bg-card p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
              >
                <p className="font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Processo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Um jeito claro de trabalhar — sem ruído e sem surpresa.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="grid gap-4">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  desc: "Entendo contexto, objetivo e restrições. Alinho escopo e métricas.",
                },
                {
                  step: "02",
                  title: "Design + Arquitetura",
                  desc: "UI premium, grid e componentes. Estrutura pensada para escalar.",
                },
                {
                  step: "03",
                  title: "Implementação",
                  desc: "Código limpo em Next.js, validações, integrações e performance.",
                },
                {
                  step: "04",
                  title: "Entrega e evolução",
                  desc: "Deploy na Vercel, ajustes finais e plano de melhorias contínuas.",
                },
              ].map((p) => (
                <li
                  key={p.step}
                  className="flex gap-4 rounded-[var(--radius)] border border-border/60 bg-card p-5"
                >
                  <div className="w-10 shrink-0 text-sm font-semibold text-muted-foreground">
                    {p.step}
                  </div>
                  <div>
                    <p className="font-semibold tracking-tight">{p.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-r from-[hsl(var(--brand-to)/0.18)] via-muted/50 to-background p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Pronto para tirar seu projeto do papel?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Me conte o que você quer construir. Eu respondo com perguntas
                certeiras, estimativa realista e próximos passos.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="premium" size="lg">
                <Link href="/contact">
                  Vamos conversar <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">Ver projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

