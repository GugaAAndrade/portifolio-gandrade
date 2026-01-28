import { FolderKanban, Inbox } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";

export default async function AdminDashboardPage() {
  await requireAdminSession();
  const db = adminDb();
  const [projects, leads] = db
    ? await Promise.all([
        db.collection("projects").count().get(),
        db.collection("leads").count().get(),
      ])
    : [null, null];

  const projectsCount = projects?.data().count ?? 0;
  const leadsCount = leads?.data().count ?? 0;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Métricas rápidas e atalhos para o CRUD.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-[var(--radius)] border border-border/60 bg-card p-5">
          <p className="text-sm text-muted-foreground">Projetos</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">
            {projectsCount}
          </p>
          <Button asChild variant="outline" className="mt-4 w-full">
            <Link href="/admin/projects">
              <FolderKanban className="mr-2 size-4" />
              Gerenciar projetos
            </Link>
          </Button>
        </div>
        <div className="rounded-[var(--radius)] border border-border/60 bg-card p-5">
          <p className="text-sm text-muted-foreground">Leads</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{leadsCount}</p>
          <Button asChild variant="outline" className="mt-4 w-full">
            <Link href="/admin/leads">
              <Inbox className="mr-2 size-4" />
              Ver mensagens
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

