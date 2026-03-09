"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

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

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/95"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="Gustavo Andrade - Página inicial">
          <span className="font-display text-2xl font-semibold tracking-tight">GA</span>
          <span className="hidden text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:inline">
            Digital Studio
          </span>
        </Link>

        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
          className="hidden items-center gap-2 rounded-full border border-border/70 bg-background/35 p-1.5 backdrop-blur-xl md:flex"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm tracking-tight transition",
                  active
                    ? "border border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--brand-to)/0.12)] text-foreground dark:text-white"
                    : "border border-transparent text-muted-foreground dark:text-slate-300 hover:border-border/70 hover:bg-background/60 hover:text-foreground dark:hover:text-white",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full border border-[hsl(var(--brand-to)/0.4)] bg-[hsl(var(--brand-to)/0.1)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
                <motion.span
                  className="relative z-10 inline-block"
                  whileHover={{ y: -0.5 }}
                  transition={{ duration: 0.16 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </motion.nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden min-h-10 sm:inline-flex">
            <Link href="/contact">Vamos conversar</Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((state) => !state)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-border/70 bg-background px-4 pb-4 pt-3 md:hidden"
          >
            <nav className="grid gap-2">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-xl border px-4 text-sm",
                      active
                        ? "border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--brand-to)/0.08)]"
                        : "border-border/70 bg-background",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
