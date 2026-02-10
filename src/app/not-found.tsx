import Link from "next/link";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Button } from "@/components/ui/button";

export default function GlobalNotFoundPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-[radial-gradient(circle_at_top,hsl(var(--brand-to)/0.24),transparent_62%)]" />
        <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-muted/60 to-background p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Erro 404
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Essa página não foi encontrada.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              O link pode estar desatualizado ou o conteúdo foi movido. Você
              pode voltar para a home, explorar os projetos ou entrar em contato.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="premium" size="lg">
                <Link href="/">Ir para a home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">Ver projetos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Falar comigo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

