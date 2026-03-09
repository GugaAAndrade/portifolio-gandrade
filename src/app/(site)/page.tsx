import {
  ArrowRight,
  ChevronDown,
  Code2,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Settings,
  ShieldCheck,
  Instagram,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/reveal";
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
    desc: "Interface limpa, moderna e coerente com sua marca para aumentar confiança e autoridade.",
    Icon: LayoutTemplate,
  },
  {
    eyebrow: "Engenharia",
    title: "Desenvolvimento Robusto",
    desc: "Código escalável, performance e estrutura técnica para crescer sem retrabalho.",
    Icon: Code2,
  },
  {
    eyebrow: "Conversão",
    title: "Fluxo Comercial",
    desc: "Seções e CTAs posicionados para transformar visita em conversa qualificada.",
    Icon: Rocket,
  },
  {
    eyebrow: "Operação",
    title: "Automações e Integrações",
    desc: "Conexões com ferramentas e automações para reduzir esforço operacional do time.",
    Icon: Settings,
  },
  {
    eyebrow: "Entrega",
    title: "Acompanhamento e Evolução",
    desc: "Suporte pós-lançamento e ajustes orientados por feedback real dos usuários.",
    Icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Landing Starter",
    desc: "Para validar oferta e captar leads com velocidade.",
    bullets: [
      "Estrutura de página de conversão",
      "Design responsivo premium",
      "Copy base orientada a ação",
      "Formulário e CTA estratégicos",
      "Publicação e ajustes iniciais",
    ],
    highlighted: false,
  },
  {
    name: "Website Growth",
    desc: "Para posicionar marca e gerar demanda contínua.",
    bullets: [
      "Arquitetura completa de páginas",
      "Design + desenvolvimento full",
      "SEO técnico essencial",
      "Seções comerciais estratégicas",
      "Acompanhamento nas primeiras semanas",
    ],
    highlighted: true,
  },
  {
    name: "Sistema Sob Medida",
    desc: "Para operação interna e escala digital do negócio.",
    bullets: [
      "Mapeamento de fluxo da operação",
      "Painéis e módulos personalizados",
      "Integrações com ferramentas",
      "Automação de processos-chave",
      "Roadmap evolutivo de produto",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Em quanto tempo um projeto fica pronto?",
    answer:
      "Depende do escopo. Landing pages costumam levar de 7 a 15 dias úteis, websites completos de 3 a 6 semanas e sistemas sob medida variam conforme complexidade e integrações.",
  },
  {
    question: "Você ajuda com estrutura e copy da página?",
    answer:
      "Sim. Eu organizo a arquitetura da informação, hierarquia de conteúdo e direção de copy para deixar a comunicação mais clara e orientada a ação.",
  },
  {
    question: "Como funciona escopo e pagamento?",
    answer:
      "Primeiro alinhamos objetivo e entregáveis. Em seguida envio proposta com escopo fechado, cronograma e investimento. O pagamento é dividido por etapas do projeto.",
  },
  {
    question: "Você faz manutenção depois da entrega?",
    answer:
      "Sim. Existe opção de suporte contínuo para melhorias, ajustes e evolução do projeto após o lançamento.",
  },
  {
    question: "Dá para integrar com ferramentas que eu já uso?",
    answer:
      "Na maioria dos casos, sim. Posso integrar formulários, CRM, automações, analytics, e-mail marketing e outras ferramentas da sua operação.",
  },
  {
    question: "Qual projeto é ideal para o meu momento?",
    answer:
      "Se você precisa validar oferta, comece por landing page. Para consolidar marca e presença, website completo. Para ganho operacional, sistema sob medida.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(140%_80%_at_50%_0%,hsl(var(--brand-from)/0.2),transparent_46%)]" />

      <section className="relative border-b border-border/60">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(120%_100%_at_0%_0%,hsl(var(--brand-to)/0.55),transparent_50%)] blur-xl" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center md:pb-28 md:pt-20">
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Desenvolvimento que transforma
            <br />
            presença digital em <span className="text-[hsl(var(--brand-to))]">resultado de negócio</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground md:text-2xl md:leading-10">
            Sites, landing pages e sistemas sob medida com estratégia, acabamento premium e foco em conversão.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="premium" size="lg" className="min-h-11 px-8">
              <Link href="/contact">
                Solicitar proposta <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-11 px-8">
              <Link href="#metodologia">Ver como eu trabalho</Link>
            </Button>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">Retorno inicial em até 24h úteis</p>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 py-16" y={18}>
        <div id="metodologia" className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--brand-to))]">Metodologia</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Do briefing ao <span className="text-[hsl(var(--brand-to))]">lançamento</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-lg">
            Estrutura clara para entregar um projeto sólido, bonito e orientado a resultado.
          </p>
        </div>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {methodCards.map(({ eyebrow, title, desc, Icon }) => (
            <StaggerItem key={title}>
              <article className="rounded-2xl border border-border/70 bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-to))]">{eyebrow}</p>
                <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--brand-to)/0.35)] bg-[hsl(var(--brand-to)/0.1)]">
                  <Icon className="size-5 text-[hsl(var(--brand-to))]" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-9 text-center">
          <Button asChild variant="outline" size="lg" className="min-h-11 px-8">
            <Link href="#planos">Ver formatos de projeto</Link>
          </Button>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16" y={18}>
        <div id="planos" className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Formatos para cada <span className="text-[hsl(var(--brand-to))]">momento</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-lg">
            Escolha o escopo ideal para sua fase de negócio.
          </p>
        </div>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <article
                className={`rounded-3xl border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-[hsl(var(--brand-to)/0.8)] bg-[hsl(var(--brand-to)/0.08)]"
                    : "border-border/70 bg-card"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight">{plan.name}</h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-[hsl(var(--brand-to))] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Recomendado
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.desc}</p>
                <ul className="mt-5 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-to))]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 min-h-11 w-full" variant={plan.highlighted ? "premium" : "outline"}>
                  Selecionar
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-2" y={18}>
        <div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Preencha o formulário e avance para o próximo nível
          </h2>
          <div className="mt-7 space-y-3">
            {[
              "Etapa 1 • Entendimento do cenário",
              "Etapa 2 • Diagnóstico e direcionamento",
              "Etapa 3 • Proposta com escopo claro",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-border/70 bg-card p-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--brand-to)/0.18)] text-[hsl(var(--brand-to))]">
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[hsl(var(--brand-to)/0.45)] bg-card p-5">
          <form className="space-y-3">
            {["Seu nome completo", "Seu melhor e-mail", "Telefone / WhatsApp", "Nome da empresa"].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="h-12 w-full rounded-xl border border-[hsl(var(--brand-to)/0.5)] bg-[hsl(var(--background)/0.6)] px-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-[hsl(var(--brand-to)/0.45)]"
              />
            ))}
            <Button className="mt-2 min-h-12 w-full" variant="premium" size="lg">
              Solicitar contato
            </Button>
            <p className="pt-1 text-center text-xs text-muted-foreground">Retorno em até 24h • 100% confidencial</p>
          </form>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-5xl px-4 py-16" y={18}>
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Perguntas <span className="text-[hsl(var(--brand-to))]">frequentes</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-lg">
            Respostas rápidas sobre escopo, prazo e processo.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-xl border border-border/70 bg-card px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm md:text-base">
                <span>{item.question}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="premium" size="lg" className="min-h-11 px-8">
            <Link href="/contact">Falar sobre meu projeto</Link>
          </Button>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16" y={18}>
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Vamos construir seu <span className="text-[hsl(var(--brand-to))]">resultado?</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-lg">Escolha o melhor canal para começarmos.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <article className="rounded-2xl border border-[hsl(var(--brand-to)/0.4)] bg-[linear-gradient(135deg,hsl(var(--brand-to)/0.14),hsl(var(--card))_45%)] p-6 md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-to))]">Canal prioritário</p>
            <div className="mt-3 flex items-center gap-2">
              <Phone className="size-5 text-[hsl(var(--brand-to))]" />
              <h3 className="text-3xl font-semibold tracking-tight">WhatsApp</h3>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Resposta mais rápida para alinhar escopo, prazo e próximos passos do projeto.
            </p>
            <Button asChild variant="premium" className="mt-6 min-h-11 px-7">
              <a href="https://wa.me/5579999191125" target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </article>

          <div className="grid gap-4 md:col-span-5">
            <article className="rounded-2xl border border-border/70 bg-card p-5">
              <div className="flex items-center gap-2">
                <Instagram className="size-4 text-[hsl(var(--brand-to))]" />
                <h3 className="text-xl font-semibold tracking-tight">Instagram</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">@guga_andrade__</p>
              <a
                href="https://instagram.com/guga_andrade__"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-xs uppercase tracking-[0.14em] text-[hsl(var(--brand-to))]"
              >
                Ver perfil
              </a>
            </article>

            <article className="rounded-2xl border border-border/70 bg-card p-5">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-[hsl(var(--brand-to))]" />
                <h3 className="text-xl font-semibold tracking-tight">E-mail</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">dev.gustavo.contato@gmail.com</p>
              <a
                href="mailto:dev.gustavo.contato@gmail.com"
                className="mt-5 inline-block text-xs uppercase tracking-[0.14em] text-[hsl(var(--brand-to))]"
              >
                Enviar e-mail
              </a>
            </article>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
