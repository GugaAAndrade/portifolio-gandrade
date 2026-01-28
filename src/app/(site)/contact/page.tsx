import { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato para contratar desenvolvimento premium de sites e sistemas. Resposta rápida, escopo claro e entrega com performance.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Vamos construir algo que parece caro — e funciona como tal.
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Se você precisa de uma landing que converte, um site institucional
            premium ou um sistema com área admin e integrações, eu posso te
            ajudar com uma entrega rápida e criteriosa.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="muted">UI clean</Badge>
            <Badge variant="muted">SEO técnico</Badge>
            <Badge variant="muted">Performance</Badge>
            <Badge variant="muted">Arquitetura</Badge>
            <Badge variant="muted">Deploy na Vercel</Badge>
          </div>

          <div className="mt-8 rounded-[var(--radius)] border border-border/60 bg-card p-5">
            <p className="text-sm font-semibold tracking-tight">
              O que eu preciso para te responder bem:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>- objetivo (vender? captar leads? operação interna?)</li>
              <li>- prazo desejado</li>
              <li>- referências (se tiver)</li>
              <li>- conteúdo/branding já existentes</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

