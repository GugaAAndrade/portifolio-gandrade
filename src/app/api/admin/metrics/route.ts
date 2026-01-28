import { NextResponse } from "next/server";

import { isValidLeadDoc, isValidProjectDoc } from "@/lib/admin/filters";
import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const [projectsSnap, leadsSnap] = await Promise.all([
    db.collection("projects").get(),
    db.collection("leads").get(),
  ]);

  return NextResponse.json({
    projects: projectsSnap.docs.filter((d) =>
      isValidProjectDoc(d.data() as Record<string, unknown>),
    ).length,
    leads: leadsSnap.docs.filter((d) =>
      isValidLeadDoc(d.data() as Record<string, unknown>),
    ).length,
  });
}
