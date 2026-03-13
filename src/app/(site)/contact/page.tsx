import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite seu projeto de site, landing page ou sistema sob medida com escopo claro e direção técnica.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pb-16 pt-[84px]">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(80%_100%_at_50%_0%,hsl(var(--brand-to)/0.18),transparent_60%)]" />

        <Reveal className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-18 md:pt-18" y={18}>
          <SectionHeading
            eyebrow="Contato"
            align="left"
            className="max-w-4xl"
            title={
              <>
                Vamos estruturar seu <span className="text-[hsl(var(--brand-to))]">próximo projeto digital</span>.
              </>
            }
            description="Envie o briefing e receba uma leitura objetiva de escopo, prioridade e próximos passos."
          />
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-8 max-w-6xl px-4" y={16}>
        <section>
          <div className="surface-featured rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--brand-to))]">Briefing</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                  Um briefing claro acelera escopo, proposta e execução.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Você envia contexto e prioridade. Eu organizo a leitura do cenário e devolvo uma direção objetiva para o projeto.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground lg:justify-end">
                <span className="rounded-full border border-border/70 bg-background/20 px-3 py-2">Retorno em até 24h</span>
                <span className="rounded-full border border-border/70 bg-background/20 px-3 py-2">Escopo antes da proposta</span>
                <span className="rounded-full border border-border/70 bg-background/20 px-3 py-2">Processo direto</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-border/60 pt-6 md:grid-cols-3">
              {[
                "1. Você envia contexto, objetivo e prazo.",
                "2. Eu avalio cenário, prioridade e direção.",
                "3. Você recebe próximos passos com clareza.",
              ].map((item) => (
                <p key={item} className="text-sm leading-6 text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
