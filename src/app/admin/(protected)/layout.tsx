import { redirect } from "next/navigation";

import { AdminQueryProvider } from "@/components/admin/admin-query-provider";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminSession } from "@/lib/auth/admin-session";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <AdminQueryProvider>
      <AdminShell>{children}</AdminShell>
    </AdminQueryProvider>
  );
}
