"use client";

import { FolderKanban, Inbox, LayoutDashboard, LogOut } from "lucide-react";
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

  return (
    <div className="min-h-dvh">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="sticky top-20 rounded-[var(--radius)] border border-border/60 bg-card p-4">
            <p className="px-2 pb-2 text-sm font-semibold tracking-tight">
              Admin
            </p>
            <nav className="grid gap-1">
              {items.map((it) => {
                const active = pathname === it.href;
                const Icon = it.icon;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={cn(
                      "flex items-center gap-2 rounded-[calc(var(--radius)-8px)] px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                    {it.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 border-t border-border/50 pt-4">
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start"
                onClick={logout}
              >
                <LogOut className="mr-2 size-4" />
                Sair
              </Button>
            </div>
          </div>
        </aside>
        <div className="md:col-span-9">{children}</div>
      </div>
    </div>
  );
}

