"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40",
        "bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Gustavo Andrade - Página inicial"
          >
            <span className="relative">
              Gustavo
              <span className="text-muted-foreground"> Andrade</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="premium" className="hidden sm:inline-flex">
            <Link href="/contact">
              Vamos conversar <ArrowUpRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

