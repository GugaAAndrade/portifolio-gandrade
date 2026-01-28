import { Suspense } from "react";

import AdminLoginForm from "@/app/admin/login/login-form";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-6xl items-center px-4 py-14">
      <Suspense
        fallback={
          <div className="mx-auto w-full max-w-md rounded-[var(--radius)] border border-border/60 bg-card p-6">
            <p className="text-sm text-muted-foreground">Carregando…</p>
          </div>
        }
      >
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}

