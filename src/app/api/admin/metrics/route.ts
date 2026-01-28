import { NextResponse } from "next/server";

import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const [projectsSnap, leadsSnap] = await Promise.all([
    db.collection("projects").count().get(),
    db.collection("leads").count().get(),
  ]);

  return NextResponse.json({
    projects: projectsSnap.data().count ?? 0,
    leads: leadsSnap.data().count ?? 0,
  });
}

