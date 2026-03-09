import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-10 border-t border-border/70 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_100%,hsl(var(--brand-to)/0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)/0.98))]" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 border-b border-border/70 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Gustavo Andrade</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Engenharia, design e
              <span className="text-[hsl(var(--brand-to))]"> conversão</span>.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              Desenvolvimento de sites, landing pages e sistemas sob medida com direção estratégica e execução técnica.
            </p>
          </div>

          <div className="md:col-span-2 md:border-l md:border-border/70 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Navegação</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link className="block transition-colors hover:text-[hsl(var(--brand-to))]" href="/">
                Início
              </Link>
              <Link className="block transition-colors hover:text-[hsl(var(--brand-to))]" href="/projects">
                Projetos
              </Link>
              <Link className="block transition-colors hover:text-[hsl(var(--brand-to))]" href="/contact">
                Contato
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 md:border-l md:border-border/70 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Soluções</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>Landing pages de conversão</p>
              <p>Websites institucionais</p>
              <p>Sistemas sob medida</p>
            </div>
          </div>

          <div className="md:col-span-3 md:border-l md:border-border/70 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Fale comigo</p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:dev.gustavo.contato@gmail.com"
                className="block transition-colors hover:text-[hsl(var(--brand-to))]"
              >
                dev.gustavo.contato@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/guga-andrade/"
                target="_blank"
                rel="noreferrer"
                className="block transition-colors hover:text-[hsl(var(--brand-to))]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/GugaAAndrade"
                target="_blank"
                rel="noreferrer"
                className="block transition-colors hover:text-[hsl(var(--brand-to))]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gustavo Andrade.</p>
          <div className="flex items-center gap-5">
            <Link className="transition-colors hover:text-foreground" href="/projects">
              Projetos
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/contact">
              Contato
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/admin" prefetch={false}>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
