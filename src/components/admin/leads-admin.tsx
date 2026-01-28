"use client";

import { useQuery } from "@tanstack/react-query";
import { Clock, Mail, MessageSquareText, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type LeadRow = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: number;
};

function formatDate(ms?: number) {
  if (!ms) return "";
  try {
    return new Date(ms).toLocaleString("pt-BR");
  } catch {
    return "";
  }
}

export function LeadsAdmin() {
  const leadsQuery = useQuery<LeadRow[]>({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const res = await fetch("/api/admin/leads");
      if (!res.ok) throw new Error("Falha ao carregar leads");
      return (await res.json()) as LeadRow[];
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Mensagens do formulário de contato.
      </p>

      <div className="mt-8 rounded-[var(--radius)] border border-border/60 bg-card">
        <div className="flex items-center justify-between border-b border-border/50 p-4">
          <p className="text-sm font-medium">
            {leadsQuery.data?.length ?? 0} lead(s)
          </p>
          {leadsQuery.isLoading ? (
            <p className="text-sm text-muted-foreground">Carregando…</p>
          ) : null}
        </div>

        <div className="divide-y divide-border/50">
          {(leadsQuery.data ?? []).map((l) => (
            <div key={l.id} className="p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate font-semibold tracking-tight flex items-center gap-2">
                    <User className="size-4 text-muted-foreground" />
                    {l.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-muted-foreground flex items-center gap-2">
                    <Mail className="size-4" />
                    <a className="hover:text-foreground" href={`mailto:${l.email}`}>
                      {l.email}
                    </a>
                  </p>
                </div>
                <Badge variant="muted" className="w-fit gap-2">
                  <Clock className="size-3.5" />
                  {formatDate(l.createdAt)}
                </Badge>
              </div>

              <div className="mt-4 rounded-[calc(var(--radius)-6px)] border border-border/60 bg-background p-4">
                <p className="text-sm font-medium flex items-center gap-2">
                  <MessageSquareText className="size-4 text-muted-foreground" />
                  Mensagem
                </p>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                  {l.message}
                </p>
              </div>
            </div>
          ))}

          {!leadsQuery.isLoading && !(leadsQuery.data ?? []).length ? (
            <div className="p-6 text-sm text-muted-foreground">
              Nenhuma mensagem ainda.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

