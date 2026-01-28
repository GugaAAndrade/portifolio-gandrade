"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader2, Lock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { firebaseAuth } from "@/lib/firebase/client";

export default function AdminLoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") ?? "/admin";

  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    try {
      // Validate Firebase config early to show a clear message.
      firebaseAuth();

      const userCred = await signInWithEmailAndPassword(
        firebaseAuth(),
        email,
        password,
      );
      const idToken = await userCred.user.getIdToken();

      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Falha ao criar sessão");
      }

      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao entrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[var(--radius)] border border-border/60 bg-card p-6 shadow-[0_24px_120px_-70px_rgba(0,0,0,0.75)]">
      <div className="flex items-center gap-2">
        <span className="inline-flex size-10 items-center justify-center rounded-[calc(var(--radius)-6px)] bg-gradient-to-r from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] text-primary-foreground">
          <Lock className="size-5" />
        </span>
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Login admin</h1>
          <p className="text-sm text-muted-foreground">
            Acesso restrito. Use seu e-mail autorizado.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <Input id="password" name="password" type="password" required />
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <Button type="submit" variant="premium" size="lg" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Entrando…
            </>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </div>
  );
}

