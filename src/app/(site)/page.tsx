import {
  ArrowRight,
  ChevronDown,
  Code2,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FinalCta } from "@/components/site/final-cta";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialsRail } from "@/components/site/testimonials-rail";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sites e sistemas sob medida",
  description:
    "Desenvolvimento de sites, landing pages e sistemas com direção estratégica, visual premium e foco em resultado.",
};

const methodCards = [
  {
    eyebrow: "Posicionamento",
    title: "Direção de Mensagem",
    desc: "Organizo sua proposta para o cliente entender valor rapidamente e avançar para contato.",
    Icon: MessageSquare,
  },
  {
    eyebrow: "Interface",
    title: "Design de Alta Percepção",
    desc: "Composição mais limpa, premium e coerente com sua marca para aumentar confiança e valor percebido.",
    Icon: LayoutTemplate,
  },
  {
    eyebrow: "Engenharia",
    title: "Desenvolvimento Robusto",
    desc: "Código sólido, performance e estrutura técnica para sustentar crescimento sem retrabalho.",
    Icon: Code2,
  },
  {
    eyebrow: "Conversão",
    title: "Fluxo Comercial",
    desc: "Seções, CTA e ritmo de leitura organizados para transformar visita em conversa qualificada.",
    Icon: Rocket,
  },
  {
    eyebrow: "Operação",
    title: "Automações e Integrações",
    desc: "Conecto formulários, CRM, analytics e processos para reduzir ruído operacional.",
    Icon: Settings,
  },
  {
    eyebrow: "Evolução",
    title: "Acompanhamento Contínuo",
    desc: "Suporte pós-lançamento para ajustar, evoluir e manter a experiência em alto nível.",
    Icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Landing Starter",
    desc: "Para validar oferta e captar demanda com velocidade.",
    bullets: ["Hero e proposta de valor", "Design premium responsivo", "Estrutura de conversão", "Publicação rápida"],
    featured: false,
  },
  {
    name: "Website Growth",
    desc: "Para posicionar marca e transformar presença em ativo comercial.",
    bullets: ["Arquitetura completa", "Design + desenvolvimento", "Seções comerciais", "SEO técnico essencial"],
    featured: true,
  },
  {
    name: "Sistema Sob Medida",
    desc: "Para ganhar eficiência operacional e criar produto digital próprio.",
    bullets: ["Mapeamento de fluxo", "Painéis e módulos", "Integrações", "Roadmap evolutivo"],
    featured: false,
  },
];

const faqs = [
  {
    question: "Em quanto tempo um projeto fica pronto?",
    answer:
      "Landing pages costumam levar de 7 a 15 dias úteis. Websites completos variam de 3 a 6 semanas. Sistemas dependem do escopo, integrações e regras de negócio.",
  },
  {
    question: "Você ajuda com estrutura e copy da página?",
    answer:
      "Sim. A entrega inclui direção de mensagem, hierarquia de conteúdo e organização comercial da experiência.",
  },
  {
    question: "Como funciona escopo e pagamento?",
    answer:
      "Primeiro alinhamos objetivo, prioridade e escopo. Depois eu envio proposta com cronograma, entregáveis e investimento dividido por etapas.",
  },
  {
    question: "Você faz manutenção depois da entrega?",
    answer:
      "Sim. É possível continuar com suporte para melhorias, ajustes, integrações e evolução do projeto.",
  },
];

const stripItems = [
  "sites sob medida",
  "landing pages",
  "sistemas sob medida",
  "design premium",
  "performance",
  "conversão",
  "ux",
  "next.js",
  "automações",
  "integrações",
];

const testimonials = [
  {
    name: "Negócio local",
    role: "Reposicionar oferta",
    quote: "A comunicação ficou muito mais clara e o contato passou a vir de forma bem mais qualificada.",
  },
  {
    name: "Marca autoral",
    role: "Website institucional",
    quote: "O visual deixou de parecer template. A percepção de valor mudou imediatamente.",
  },
  {
    name: "Operação interna",
    role: "Sistema sob medida",
    quote: "A parte mais forte foi unir interface bonita com fluxo realmente útil para a equipe.",
  },
  {
    name: "Serviço premium",
    role: "Landing page",
    quote: "A nova estrutura organizou melhor a oferta e melhorou a confiança antes mesmo da conversa.",
  },
  {
    name: "Empresa em crescimento",
    role: "Integrações",
    quote: "Além do site, a automação e a parte técnica reduziram bastante o ruído operacional.",
  },
  {
    name: "Produto digital",
    role: "Experiência e engenharia",
    quote: "Tudo ficou mais coeso: posicionamento, interface e execução conversando no mesmo nível.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16 pt-[74px]">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid" />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(80%_100%_at_50%_0%,hsl(var(--brand-to)/0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-28 h-64 w-64 rounded-full bg-[hsl(var(--brand-to)/0.16)] blur-3xl ambient-orb" />
        <div className="pointer-events-none absolute left-[-8%] top-40 h-48 w-48 rounded-full bg-[hsl(var(--brand-from)/0.08)] blur-3xl ambient-orb" />

        <div className="mx-auto max-w-6xl px-4 pb-18 pt-18 md:pb-24 md:pt-22">
          <Reveal y={18}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-to)/0.22)] bg-[hsl(var(--brand-to)/0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--brand-to))]">
                <Sparkles className="size-3.5" /> estratégia, design e engenharia
              </p>
              <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
                Sites e sistemas que elevam a percepção da sua
                {" "}
                <span className="text-[hsl(var(--brand-to))]">marca</span>
                {" "}e convertem com mais clareza.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground md:text-xl md:leading-9">
                Desenvolvimento sob medida para empresas que precisam de presença digital premium, fluxo comercial mais forte e execução técnica confiável.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="premium" size="lg" className="min-h-12 rounded-full px-8">
                  <Link href="/contact">
                    Solicitar proposta <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full px-8">
                  <Link href="/projects">Explorar projetos</Link>
                </Button>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                retorno inicial em até 24h úteis
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14" delay={0.08} y={22}>
            <div className="surface-panel relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-4 md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_100%_at_50%_0%,hsl(var(--brand-to)/0.16),transparent_58%)]" />
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="surface-featured relative min-h-[360px] overflow-hidden rounded-[1.6rem] p-6 md:p-8">
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl hero-breathe" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--brand-to))]">
                    estrutura de alta percepção
                  </p>
                  <h2 className="mt-5 max-w-lg text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                    Presença digital com direção, acabamento e intenção comercial.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                    Menos ruído visual, mais clareza de mensagem, mais confiança para quem precisa decidir.
                  </p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Percepção", value: "Premium" },
                      { label: "Estrutura", value: "Clara" },
                      { label: "Execução", value: "Robusta" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/8 bg-black/18 p-4 backdrop-blur-md">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">{item.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Landing pages",
                      desc: "Validação rápida de oferta com hero, prova e CTA alinhados.",
                    },
                    {
                      title: "Websites institucionais",
                      desc: "Arquitetura de páginas com assinatura visual e narrativa clara.",
                    },
                    {
                      title: "Sistemas sob medida",
                      desc: "Fluxos internos, painéis e automações para operação mais forte.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="surface-panel rounded-[1.4rem] p-5">
                      <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={16}>
        <div className="surface-panel rounded-[2rem] px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Base de execução</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Direção estratégica</span>
              <span>UX premium</span>
              <span>Next.js</span>
              <span>Integrações</span>
              <span>Automações</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-6">
        <MarqueeStrip items={stripItems} />
      </div>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={16}>
        <SectionHeading
          eyebrow="Metodologia"
          title={
            <>
              Do briefing ao <span className="text-[hsl(var(--brand-to))]">lançamento</span>
            </>
          }
          description="Um fluxo direto para transformar objetivo de negócio em uma presença digital mais forte, clara e convincente."
        />

        <Stagger className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {methodCards.map(({ eyebrow, title, desc, Icon }) => (
            <StaggerItem key={title} className="h-full">
              <article className="surface-panel flex h-full flex-col rounded-[1.65rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-to)/0.26)]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--brand-to))]">{eyebrow}</p>
                <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[hsl(var(--brand-to)/0.24)] bg-[hsl(var(--brand-to)/0.08)]">
                  <Icon className="size-5 text-[hsl(var(--brand-to))]" />
                </div>
                <h3 className="mt-5 text-[1.75rem] font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={16}>
        <SectionHeading
          eyebrow="Escopos"
          title={
            <>
              Formatos para cada <span className="text-[hsl(var(--brand-to))]">momento</span>
            </>
          }
          description="Escolha o nível certo de estrutura, design e engenharia para o estágio atual do seu negócio."
        />

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <article className={plan.featured ? "surface-featured rounded-[1.9rem] p-7" : "surface-panel rounded-[1.9rem] p-7"}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full bg-[hsl(var(--brand-to))] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Recomendado
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-to))]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.featured ? "premium" : "outline"} className="mt-7 min-h-11 w-full rounded-full">
                  <Link href="/contact">Selecionar escopo</Link>
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={16}>
        <SectionHeading
          eyebrow="Credibilidade"
          title={
            <>
              Presença melhor não é só estética. É <span className="text-[hsl(var(--brand-to))]">percepção, clareza e decisão</span>.
            </>
          }
          description="Cada camada do projeto é desenhada para comunicar valor com mais força e reduzir fricção no momento do contato."
        />

        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { value: "24h", label: "retorno inicial" },
            { value: "3x", label: "escopos principais" },
            { value: "100%", label: "execução sob medida" },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <article className="surface-panel flex min-h-[148px] flex-col items-center justify-center rounded-[1.6rem] p-6 text-center transition-all duration-300 hover:-translate-y-1">
                <p className="text-4xl font-semibold tracking-tight text-white">{item.value}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-4 py-16 md:py-20" y={16}>
        <SectionHeading
          eyebrow="Percepção"
          title={
            <>
              O que melhora quando design, mensagem e <span className="text-[hsl(var(--brand-to))]">engenharia</span> trabalham juntos.
            </>
          }
          description="Uma presença digital melhor não se mede só pelo visual. Ela muda o modo como o cliente percebe, entende e avança."
        />

      </Reveal>

      <div className="relative left-1/2 mt-[-2rem] w-screen -translate-x-1/2 overflow-hidden py-2 md:py-4">
        <TestimonialsRail items={testimonials} />
      </div>

      <Reveal className="mx-auto max-w-5xl px-4 py-16 md:py-20" y={16}>
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Respostas antes de <span className="text-[hsl(var(--brand-to))]">começar</span>
            </>
          }
          description="Prazo, escopo, processo e suporte explicados de forma objetiva."
        />

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="surface-panel group overflow-hidden rounded-[1.4rem] px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium md:text-base">
                <span>{item.question}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 md:py-20" y={18}>
        <FinalCta
          eyebrow="Próximo passo"
          title={
            <>
              Vamos transformar sua operação digital em <span className="text-white/90">um ativo mais forte</span>?
            </>
          }
          description="Se você precisa de um site, landing page ou sistema com mais clareza comercial e presença premium, esse é o momento de estruturar do jeito certo."
          primaryHref="/contact"
          primaryLabel="Falar sobre projeto"
          secondaryHref="/projects"
          secondaryLabel="Ver trabalhos"
          proofs={["Escopo claro", "Prazos objetivos", "Execução técnica sólida"]}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href="https://wa.me/5579999191125"
            target="_blank"
            rel="noreferrer"
            className="surface-panel rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-to)/0.28)]"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--brand-to))]">Canal prioritário</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">WhatsApp</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Resposta mais rápida para alinhar escopo, prioridade e próximos passos.
            </p>
          </a>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:dev.gustavo.contato@gmail.com"
              className="surface-panel rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-to)/0.28)]"
            >
              <h3 className="text-xl font-semibold tracking-tight">E-mail</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">Para briefing detalhado e contexto completo.</p>
            </a>

            <a
              href="https://instagram.com/guga_andrade__"
              target="_blank"
              rel="noreferrer"
              className="surface-panel rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-to)/0.28)]"
            >
              <h3 className="text-xl font-semibold tracking-tight">Instagram</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">@guga_andrade__</p>
              <div className="mt-5 inline-flex items-center text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--brand-to))]">
                Acompanhar bastidores
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
