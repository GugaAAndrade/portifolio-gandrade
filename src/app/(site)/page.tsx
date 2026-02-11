import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { AppleShowcase } from "@/components/site/apple-showcase";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/db/projects";
import { getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Desenvolvimento premium de sites e sistemas",
  description:
    "Criação de sites, landing pages e sistemas sob medida com foco em conversão, credibilidade e crescimento do negócio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gustavo Andrade — Desenvolvimento premium de sites e sistemas",
    description:
      "Sites e sistemas para fortalecer sua marca e gerar mais oportunidades de negócio.",
    url: "/",
    type: "website",
    images: [{ url: "/icon", alt: "Gustavo Andrade — Portfólio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Andrade — Desenvolvimento premium",
    description:
      "Sites e sistemas para fortalecer sua marca e gerar mais oportunidades.",
    images: ["/icon"],
  },
};

export default async function HomePage() {
  const featured = await getFeaturedProjects();
  const siteUrl = getSiteUrl();
  const proofPoints = [
    { title: "Resposta rápida", detail: "Retorno inicial em até 24 horas úteis." },
    { title: "Escopo sem surpresa", detail: "Investimento e entregáveis definidos antes de iniciar." },
    { title: "Acompanhamento próximo", detail: "Atualizações frequentes durante todo o projeto." },
  ];
  const beforeAfter = [
    {
      title: "Mensagem confusa",
      scenario: "Visitante não entende rapidamente o que você vende.",
      outcome: "Oferta clara em segundos, com caminho direto para contato.",
    },
    {
      title: "Visual amador",
      scenario: "Baixa percepção de valor e pouca confiança na marca.",
      outcome: "Design premium que reforça autoridade e diferenciação.",
    },
    {
      title: "Sem direção de ação",
      scenario: "Página bonita, mas sem gerar leads consistentes.",
      outcome: "Estrutura com CTA estratégico para aumentar oportunidades.",
    },
  ];
  const offers = [
    {
      name: "Starter",
      ideal: "Para validar oferta",
      price: "A partir de R$ 2.900",
      scope: "Landing page de alta conversão com copy base e CTA estratégico.",
    },
    {
      name: "Growth",
      ideal: "Para escalar captação",
      price: "A partir de R$ 5.900",
      scope: "Site completo com páginas estratégicas, narrativa comercial e SEO base.",
    },
    {
      name: "Premium",
      ideal: "Para operação robusta",
      price: "Sob proposta",
      scope: "Sistema ou projeto sob medida com automações e integrações de negócio.",
    },
  ];
  const faqs = [
    {
      q: "Em quanto tempo o projeto fica pronto?",
      a: "Depende do escopo. Landing pages costumam ficar prontas entre 7 e 15 dias. Projetos maiores seguem um cronograma definido no início.",
    },
    {
      q: "Você ajuda com texto e estrutura da página?",
      a: "Sim. Eu te ajudo a organizar a mensagem, definir a estrutura e montar uma página orientada para conversão.",
    },
    {
      q: "Como funciona pagamento e proposta?",
      a: "Após entender seu objetivo, envio proposta com escopo, prazo e investimento. O pagamento é dividido por etapas.",
    },
    {
      q: "Depois da entrega você dá suporte?",
      a: "Sim. Incluo suporte inicial pós-lançamento para ajustes finos e estabilização da operação.",
    },
  ];
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gustavo Andrade",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/projects?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gustavo Andrade",
    url: siteUrl,
    jobTitle: "Desenvolvedor de sites e sistemas",
    sameAs: [
      "https://www.linkedin.com/in/guga-andrade/",
      "https://github.com/GugaAAndrade",
    ],
    knowsAbout: ["Desenvolvimento web", "Landing pages", "Sistemas sob medida"],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-260px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-to)/0.22)] via-[hsl(var(--brand-from)/0.10)] to-transparent blur-3xl animate-[aurora_16s_linear_infinite]" />
          <div className="absolute bottom-[-240px] right-[-240px] h-[520px] w-[520px] rounded-full bg-[hsl(var(--brand-to)/0.16)] blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute left-[-180px] top-[240px] h-[380px] w-[380px] rounded-full bg-[hsl(var(--brand-from)/0.12)] blur-3xl animate-[float_9s_ease-in-out_infinite]" />
          <div className="absolute inset-x-[10%] top-[-120px] h-[360px] bg-[radial-gradient(circle_at_center,hsl(var(--brand-to)/0.22),transparent_65%)] blur-3xl animate-[aurora_20s_ease-in-out_infinite]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--brand-to)/0.45)] to-transparent opacity-40 blur-[1px] animate-pulse" />
          <div className="noise-overlay absolute inset-0 opacity-40" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-7" y={28}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="premium" className="gap-1 shadow-[0_10px_30px_-18px_hsl(var(--brand-to)/0.7)]">
                <Sparkles className="size-3.5" />
                Atendimento premium
              </Badge>
              <Badge variant="muted">Experiência inspirada nas grandes marcas</Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Seu site pode vender por você{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground to-[hsl(var(--brand-to))] bg-clip-text text-transparent">
                todos os dias
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-xl md:leading-8">
              Eu sou o Gustavo Andrade. Crio sites e sistemas que valorizam sua
              marca, deixam sua oferta clara e ajudam sua empresa a fechar mais
              clientes com previsibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="premium" size="lg" className="shadow-[0_18px_45px_-24px_hsl(var(--brand-to)/0.8)]">
                <Link href="/contact">
                  Vamos conversar <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">Ver projetos</Link>
              </Button>
            </div>

            <Stagger className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2" delay={0.12}>
              {[
                "Posicionamento claro para o cliente certo",
                "Visual profissional que aumenta confiança",
                "Fluxo simples para receber mais pedidos",
                "Acompanhamento próximo do início ao lançamento",
              ].map((item) => (
                <StaggerItem key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-secondary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.12} y={34}>
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/80 to-background/80 p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--brand-to)/0.20),transparent_45%)]" />
              <div className="flex flex-col gap-5">
                <p className="text-sm font-medium text-muted-foreground">
                  Resultados que importam
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { kpi: "Mais contatos", label: "página pensada para gerar conversas" },
                    { kpi: "Mais confiança", label: "apresentação profissional da marca" },
                    { kpi: "Mais agilidade", label: "menos retrabalho no atendimento" },
                    { kpi: "Mais clareza", label: "mensagem direta para o cliente ideal" },
                  ].map((x) => (
                    <div
                      key={x.kpi}
                      className="h-full min-h-[102px] rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-to)/0.45)]"
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

                <div className="rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/80 p-4">
                  <p className="text-sm font-semibold tracking-tight">
                    "Quando o cliente entende seu valor, a venda avança."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Eu junto estratégia, design e texto para criar uma experiência
                    que apresenta sua oferta com clareza e leva o visitante para
                    a ação certa.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 pb-4" y={20}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {proofPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[calc(var(--radius)-4px)] border border-border/60 bg-background/70 p-4 backdrop-blur-sm"
            >
              <p className="text-base font-semibold tracking-tight">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <AppleShowcase />

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Projetos em destaque
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Alguns trabalhos que já ajudaram negócios a vender melhor.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/projects">Ver todos</Link>
          </Button>
        </div>

        <Stagger className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" delay={0.05}>
          {featured.slice(0, 6).map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Serviços</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Soluções para fortalecer sua presença digital e aumentar resultados.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {[
              {
                title: "Sites institucionais",
                desc: "Para apresentar sua empresa com autoridade e conquistar novos clientes.",
              },
              {
                title: "Landing pages",
                desc: "Páginas diretas para campanhas, lançamentos e captação de leads.",
              },
              {
                title: "Sistemas sob medida",
                desc: "Ferramentas internas para organizar operação, atendimento e vendas.",
              },
              {
                title: "Automações de rotina",
                desc: "Processos mais rápidos para você e sua equipe ganharem tempo.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-card to-card/70 p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-to)/0.45)] hover:shadow-[0_24px_50px_-38px_rgba(0,0,0,0.6)]"
              >
                <p className="font-semibold tracking-tight transition group-hover:text-[hsl(var(--brand-to))]">
                  {s.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">Processo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Processo simples, transparente e sem surpresas.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="grid gap-4">
              {[
                {
                  step: "01",
                  title: "Entendimento do negócio",
                  desc: "Alinho com você os objetivos, público e prioridades do projeto.",
                },
                {
                  step: "02",
                  title: "Direção da página",
                  desc: "Defino mensagem, estrutura e visual para valorizar sua oferta.",
                },
                {
                  step: "03",
                  title: "Produção",
                  desc: "Desenvolvo o projeto com foco em qualidade, clareza e resultado.",
                },
                {
                  step: "04",
                  title: "Publicação e melhorias",
                  desc: "Entramos no ar e evoluímos com base no retorno real dos clientes.",
                },
              ].map((p) => (
                <li
                  key={p.step}
                  className="relative flex gap-4 overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card p-5 transition duration-300 hover:border-[hsl(var(--brand-to)/0.45)]"
                >
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,hsl(var(--brand-to)/0.08)_45%,transparent_100%)] opacity-0 transition duration-500 hover:opacity-100" />
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
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/55 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:p-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Antes e depois
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Cenário atual e resultado esperado.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="focus-grid space-y-4">
                {beforeAfter.map((item, index) => (
                  <div
                    key={item.title}
                    className="focus-card rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/80 p-5"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Caso 0{index + 1}
                    </p>
                    <p className="mt-2 font-semibold tracking-tight">{item.title}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[calc(var(--radius)-8px)] border border-border/60 bg-muted/45 p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                          Cenário atual
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">{item.scenario}</p>
                      </div>
                      <div className="rounded-[calc(var(--radius)-8px)] border border-[hsl(var(--brand-to)/0.38)] bg-[hsl(var(--brand-to)/0.10)] p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-[hsl(var(--brand-to))]">
                          Após o projeto
                        </p>
                        <p className="mt-2 text-sm text-foreground/90">{item.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/55 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:p-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Pacotes
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Comece com uma oferta clara.
              </h2>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/contact">Solicitar proposta</Link>
            </Button>
          </div>
          <div className="focus-grid mt-8 grid gap-4 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <div
                key={offer.name}
                className={`focus-card group rounded-[calc(var(--radius)-6px)] border p-5 transition duration-300 hover:-translate-y-1 ${
                  index === 1
                    ? "border-[hsl(var(--brand-to)/0.45)] bg-[linear-gradient(160deg,hsl(var(--brand-to)/0.18),transparent_60%),hsl(var(--background))] shadow-[0_24px_60px_-40px_hsl(var(--brand-to)/0.75)]"
                    : "border-border/60 bg-background/80 hover:border-[hsl(var(--brand-to)/0.45)]"
                }`}
              >
                {index === 1 ? (
                  <p className="mb-3 inline-flex rounded-full border border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--brand-to)/0.14)] px-2 py-0.5 text-xs font-medium text-[hsl(var(--brand-to))]">
                    Mais escolhido
                  </p>
                ) : null}
                <p className="text-sm text-muted-foreground">{offer.ideal}</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{offer.name}</p>
                <p className="mt-2 text-sm font-medium">{offer.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{offer.scope}</p>
                <Button
                  asChild
                  variant={index === 1 ? "premium" : "outline"}
                  className="mt-5"
                >
                  <Link href="/contact">
                    Quero esse formato <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Button asChild variant="premium" className="w-full">
              <Link href="/contact">Solicitar proposta</Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/55 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:grid-cols-12 md:p-8">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Tudo o que você precisa saber para começar.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Se sua dúvida não estiver aqui, me chama no contato que eu te
              respondo com cenário real para o seu caso.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border/60 rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/80">
              {faqs.map((item) => (
                <details key={item.q} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none pr-6 font-medium tracking-tight">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-14" y={28}>
        <div className="relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-gradient-to-r from-[hsl(var(--brand-to)/0.18)] via-muted/50 to-background p-8 md:p-10">
          <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-[hsl(var(--brand-to)/0.18)] blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Pronto para tirar seu projeto do papel?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Me conte seu objetivo e eu te mostro o melhor caminho para ter
                uma página que passe confiança e traga oportunidades reais.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="premium" size="lg" className="shadow-[0_18px_45px_-24px_hsl(var(--brand-to)/0.85)]">
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
      </Reveal>

      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <Button asChild variant="premium" size="lg" className="w-full shadow-[0_20px_45px_-25px_hsl(var(--brand-to)/0.8)]">
          <Link href="/contact">
            Quero orçamento <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
