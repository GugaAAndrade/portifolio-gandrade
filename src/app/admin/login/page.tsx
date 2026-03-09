import { Suspense } from "react";

import AdminLoginForm from "@/app/admin/login/login-form";

export default function AdminLoginPage() {
  return (
    <div className="site-theme relative min-h-dvh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="pointer-events-none absolute inset-0 -z-10 story-grid opacity-20" />
      <div className="mx-auto flex min-h-dvh max-w-6xl items-center px-4 py-14">
      <Suspense
        fallback={
          <div className="mx-auto w-full max-w-md rounded-2xl border border-border/70 bg-card p-6">
            <p className="text-sm text-muted-foreground">Carregando…</p>
          </div>
        }
      >
        <AdminLoginForm />
      </Suspense>
      </div>
    </div>
  );
}
