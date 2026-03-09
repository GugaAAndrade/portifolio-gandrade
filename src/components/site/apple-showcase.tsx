"use client";

import { motion } from "framer-motion";

const slides = [
  {
    label: "Clareza",
    title: "Proposta de valor entendida em segundos",
    desc: "Hero, prova e CTA alinhados para o visitante certo identificar seu diferencial rapidamente.",
  },
  {
    label: "Autoridade",
    title: "Visual com assinatura, não template",
    desc: "Composição editorial e acabamento premium para sustentar preço e posicionamento.",
  },
  {
    label: "Conversão",
    title: "Ritmo de leitura que vira ação",
    desc: "Elementos de decisão distribuídos ao longo do scroll para reduzir fricção no contato.",
  },
];

export function AppleShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-b from-background/95 via-background/90 to-muted/40 p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_15%,hsl(var(--brand-to)/0.22),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_100%,hsl(var(--brand-from)/0.14),transparent_42%)]" />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Arquitetura da experiência</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Uma página de alta performance comercial precisa de direção, não de efeitos aleatórios.
            </h2>
          </div>

          <div className="grid gap-4 lg:col-span-7">
            {slides.map((slide, index) => (
              <motion.article
                key={slide.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="rounded-[calc(var(--radius)+2px)] border border-border/60 bg-background/75 p-5 backdrop-blur-sm"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{slide.label}</p>
                <p className="mt-2 text-xl font-semibold tracking-tight">{slide.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{slide.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
