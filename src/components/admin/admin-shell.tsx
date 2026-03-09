"use client";

import { FolderKanban, Home, Inbox, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projetos", icon: FolderKanban },
  { href: "/admin/leads", label: "Leads", icon: Inbox },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="site-theme relative min-h-dvh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="sticky top-20 rounded-2xl border border-border/70 bg-card p-4 shadow-[0_24px_60px_-46px_rgba(0,0,0,0.75)]">
            <div className="px-2 pb-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Painel</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">Admin</p>
            </div>
            <nav className="grid gap-1">
              {items.map((it) => {
                const active = pathname === it.href;
                const Icon = it.icon;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={cn(
                      "flex min-h-10 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition",
                      active
                        ? "border border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--brand-to)/0.1)] text-foreground"
                        : "border border-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                    {it.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start"
                onClick={goHome}
              >
                <Home className="mr-2 size-4" />
                Voltar ao site
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start"
                onClick={logout}
              >
                <LogOut className="mr-2 size-4" />
                Logout
              </Button>
            </div>
          </div>
        </aside>
        <div className="md:col-span-9">{children}</div>
      </div>
    </div>
  );
}
