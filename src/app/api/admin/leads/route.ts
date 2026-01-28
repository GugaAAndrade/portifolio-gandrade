import { NextResponse } from "next/server";

import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";

export async function GET() {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const snap = await db.collection("leads").orderBy("createdAt", "desc").limit(200).get();
  return NextResponse.json(
    snap.docs.map((d) => ({ id: d.id, ...d.data() })),
  );
}

