import { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um projeto com direção clara, visual premium e foco em gerar mais oportunidades para o seu negócio.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contato — Gustavo Andrade",
    description:
      "Solicite um projeto com direção clara, visual premium e foco em gerar oportunidades.",
    url: "/contact",
    type: "website",
    images: [{ url: "/icon", alt: "Contato — Gustavo Andrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — Gustavo Andrade",
    description:
      "Solicite um projeto com direção clara, visual premium e foco em gerar oportunidades.",
    images: ["/icon"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-[radial-gradient(circle_at_top,hsl(var(--brand-to)/0.22),transparent_60%)]" />
      <Reveal className="mx-auto max-w-6xl px-4 py-14" y={24}>
        <div className="grid grid-cols-1 gap-10 rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:grid-cols-12 md:p-8">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Contato
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Vamos criar uma presença digital que vende melhor.
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              Se você precisa de uma landing, um site institucional ou um
              sistema sob medida, eu te ajudo com direção estratégica, execução
              criteriosa e comunicação transparente.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="muted">Mensagem clara</Badge>
              <Badge variant="muted">Visual premium</Badge>
              <Badge variant="muted">Fluxo de conversão</Badge>
              <Badge variant="muted">Entrega confiável</Badge>
            </div>

            <div className="mt-8 rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background/75 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold tracking-tight">
                O que eu preciso para te responder bem:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>- objetivo do projeto (vendas, leads ou operação)</li>
                <li>- prazo desejado</li>
                <li>- referências visuais (se tiver)</li>
                <li>- conteúdo e identidade já existentes</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
