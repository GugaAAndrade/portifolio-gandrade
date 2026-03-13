import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";

const links = {
  navigation: [
    { href: "/", label: "Início" },
    { href: "/projects", label: "Projetos" },
    { href: "/contact", label: "Contato" },
  ],
  services: ["Landing pages", "Websites institucionais", "Sistemas sob medida"],
  contact: [
    {
      href: "https://wa.me/5579999191125",
      label: "WhatsApp",
      value: "Canal mais rápido para escopo e proposta",
      Icon: MessageCircle,
    },
    {
      href: "mailto:dev.gustavo.contato@gmail.com",
      label: "E-mail",
      value: "Para briefing detalhado e contexto completo",
      Icon: Mail,
    },
    {
      href: "https://instagram.com/guga_andrade__",
      label: "Instagram",
      value: "@guga_andrade__",
      Icon: Instagram,
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative mt-8 border-t border-border/60 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_50%_0%,hsl(var(--brand-to)/0.06),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-12">
        <div className="hairline-divider" />

        <div className="grid gap-10 py-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--brand-to)/0.28)] bg-[linear-gradient(135deg,hsl(var(--brand-from)/0.28),hsl(var(--brand-to)/0.12))] font-semibold">
                GA
              </span>
              <div>
                <p className="text-sm font-semibold tracking-tight">Gustavo Andrade</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Digital Product Studio
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Desenvolvimento de sites, landing pages e sistemas sob medida com direção estratégica, acabamento premium e foco real em negócio.
            </p>
          </div>

          <div className="md:col-span-2 md:border-l md:border-border/60 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Navegação</p>
            <div className="mt-4 space-y-3 text-sm">
              {links.navigation.map((item) => (
                <Link key={item.href} className="block transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:border-l md:border-border/60 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Soluções</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {links.services.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:border-l md:border-border/60 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Fale comigo</p>
            <div className="mt-4 space-y-3">
              {links.contact.map(({ href, label, value, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-border/70 bg-[linear-gradient(180deg,hsl(var(--card)/0.96),hsl(var(--card)/0.9))] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-to)/0.32)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--brand-to)/0.24)] bg-[hsl(var(--brand-to)/0.08)]">
                      <Icon className="size-4 text-[hsl(var(--brand-to))]" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium tracking-tight">{label}</span>
                      <span className="block text-sm text-muted-foreground">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline-divider" />

        <div className="flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gustavo Andrade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <Link className="transition-colors hover:text-white" href="/contact">
              Contato
            </Link>
            <Link className="transition-colors hover:text-white" href="/projects">
              Trabalhos
            </Link>
            <Link className="transition-colors hover:text-white" href="/admin" prefetch={false}>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
