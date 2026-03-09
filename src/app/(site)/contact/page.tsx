import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite seu projeto de site, landing page ou sistema sob medida com escopo claro e direção técnica.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <Reveal className="mx-auto max-w-6xl px-4 pt-12" y={16}>
        <section className="p-1 md:p-2">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Contato</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
            Vamos estruturar seu <span className="text-[hsl(var(--brand-to))]">próximo projeto digital</span>.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            Preencha o briefing para receber uma recomendação objetiva de escopo, prioridade e próximos passos.
          </p>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-8 grid max-w-6xl gap-6 px-4 lg:grid-cols-12" y={14}>
        <section className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Como funciona</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Processo direto e sem ruído</h2>
          <Stagger className="mt-5 space-y-3">
            {[
              "1. Você envia contexto, objetivo e prazo.",
              "2. Eu analiso cenário técnico e comercial.",
              "3. Você recebe proposta com escopo claro.",
            ].map((step) => (
              <StaggerItem key={step}>
                <div className="rounded-2xl border border-border/70 bg-card p-4 text-sm leading-7 text-muted-foreground transition-transform duration-300 hover:-translate-y-0.5">
                  {step}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Retorno inicial em até 24h úteis
          </p>

          <Stagger className="mt-6 space-y-2 border-t border-border/70 pt-5">
            <StaggerItem>
              <a
                href="https://wa.me/5579999191125"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-[hsl(var(--brand-to))]"
              >
                <Phone className="size-4" /> WhatsApp
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href="mailto:dev.gustavo.andrade@gmail.com"
                className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-[hsl(var(--brand-to))]"
              >
                <Mail className="size-4" /> E-mail
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href="https://www.linkedin.com/in/guga-andrade/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-[hsl(var(--brand-to))]"
              >
                <MessageCircle className="size-4" /> LinkedIn
              </a>
            </StaggerItem>
          </Stagger>
        </section>

        <section className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 lg:col-span-8">
          <ContactForm />
        </section>
      </Reveal>
    </div>
  );
}
