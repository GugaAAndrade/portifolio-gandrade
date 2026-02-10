"use client";

import { motion } from "framer-motion";

const slides = [
  {
    title: "Mensagem clara em 5 segundos",
    desc: "Seu cliente entende rapidamente o que você faz, para quem é e por que escolher sua empresa.",
    label: "Clareza",
  },
  {
    title: "Visual premium com cara de marca forte",
    desc: "Direção visual limpa, refinada e memorável para aumentar percepção de valor.",
    label: "Presença",
  },
  {
    title: "Fluxo que leva para a ação",
    desc: "Estrutura de página focada em conduzir o visitante para contato, proposta ou compra.",
    label: "Conversão",
  },
];

export function AppleShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-b from-background/95 via-background/90 to-muted/35 p-6 shadow-[0_35px_120px_-72px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,hsl(var(--brand-to)/0.18),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_75%,hsl(var(--brand-from)/0.12),transparent_40%)]" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
          Experiência premium
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.06] tracking-tight md:text-4xl lg:text-5xl">
          Clareza, presença e conversão em uma página elegante.
        </h2>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {slides.map((slide, index) => (
            <motion.article
              key={slide.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl border border-white/25 bg-white/[0.06] p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:p-7"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {slide.label}
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                {slide.title}
              </p>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">{slide.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
