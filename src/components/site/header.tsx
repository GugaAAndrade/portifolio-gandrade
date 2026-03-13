"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { motionEase, motionTiming } from "@/components/site/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: motionTiming.base, ease: motionEase }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className={cn("relative transition-[padding] duration-500", scrolled ? "px-4 pt-3" : "px-0 pt-0")}>
        {!scrolled ? (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-white/10" />
        ) : null}
        <motion.div
          animate={{
            maxWidth: scrolled ? 1120 : 2400,
            height: scrolled ? 64 : 84,
            y: scrolled ? 12 : 0,
            borderRadius: scrolled ? 9999 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 30, mass: 0.85 }}
          className={cn(
            "relative grid w-full items-center border-border/60 backdrop-blur-xl",
            scrolled
              ? "mx-auto grid-cols-[1fr_auto] gap-3 border bg-background/72 px-4 shadow-[0_22px_58px_-42px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:grid-cols-[auto_1fr_auto]"
              : "mx-auto grid-cols-[1fr_auto] bg-background/84 px-8 md:grid-cols-[1fr_auto_1fr] md:px-10 shadow-none",
          )}
        >
          <Link
            href="/"
            className={cn("inline-flex items-center gap-3", scrolled ? "justify-self-start" : "justify-self-start")}
            aria-label="Gustavo Andrade - Página inicial"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--brand-to)/0.3)] bg-[linear-gradient(135deg,hsl(var(--brand-from)/0.3),hsl(var(--brand-to)/0.14))] text-sm font-semibold shadow-[0_16px_38px_-24px_hsl(var(--brand-to)/0.9)]">
              GA
            </span>
            <span className={cn("hidden sm:block", scrolled ? "opacity-100" : "opacity-100")}>
              <span className="block text-sm font-semibold tracking-tight">Gustavo Andrade</span>
              <span className="block text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                Digital Product Studio
              </span>
            </span>
          </Link>

          <motion.nav
            layout
            className={cn(
              "hidden items-center gap-1 rounded-full transition-all duration-500 md:flex",
              scrolled
                ? "justify-self-center border border-border/70 bg-background/26 p-1.5"
                : "justify-self-center border border-border/70 bg-background/14 p-1.5",
            )}
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors",
                    active ? "text-white" : "text-slate-300 hover:text-white",
                  )}
                >
                  {!active ? (
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/[0.04] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  ) : null}
                  {active ? (
                    <motion.span
                      layoutId="site-nav-pill"
                      className="pointer-events-none absolute inset-0 rounded-full border border-[hsl(var(--brand-to)/0.28)] bg-[linear-gradient(180deg,rgba(9,18,34,0.96),rgba(7,12,24,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </motion.nav>

          <div className={cn("flex items-center gap-2", scrolled ? "justify-self-end" : "justify-self-end")}>
            <Button
              asChild
              variant="outline"
              className={cn(
                "hidden rounded-full border-border/70 px-5 text-white transition-all duration-500 md:inline-flex",
                scrolled ? "min-h-10 bg-background/18 hover:bg-background/28" : "min-h-10 bg-background/8 hover:bg-background/16",
              )}
            >
              <Link href="/projects">Explorar trabalhos</Link>
            </Button>

            <Button
              asChild
              variant="premium"
              className={cn("hidden rounded-full px-5 transition-all duration-500 sm:inline-flex", scrolled ? "min-h-10" : "min-h-11")}
            >
              <Link href="/contact">
                Vamos conversar <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full border-border/70 bg-background/20 text-white hover:bg-background/35 md:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((state) => !state)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: motionTiming.fast, ease: motionEase }}
            className="border-t border-border/60 bg-background/96 px-4 pb-4 pt-3 backdrop-blur-2xl md:hidden"
          >
            <nav className="grid gap-2">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex min-h-12 items-center rounded-2xl border px-4 text-sm",
                      active
                        ? "border-[hsl(var(--brand-to)/0.34)] bg-[hsl(var(--brand-to)/0.1)] text-white"
                        : "border-border/70 bg-card text-slate-200",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild variant="premium" className="mt-1 min-h-12 rounded-2xl">
                <Link href="/contact">Vamos conversar</Link>
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
