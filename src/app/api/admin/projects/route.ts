import { NextResponse } from "next/server";

import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";
import { projectSchema } from "@/lib/schemas";

export async function GET() {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const snap = await db.collection("projects").orderBy("createdAt", "desc").get();
  return NextResponse.json(
    snap.docs.map((d) => ({ id: d.id, ...d.data() })),
  );
}

export async function POST(req: Request) {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const body = await req.json().catch(() => ({}));
  const parsed = projectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const createdAt = data.createdAt ?? Date.now();
  const ref = await db.collection("projects").add({ ...data, createdAt });
  const doc = await ref.get();
  return NextResponse.json({ id: doc.id, ...doc.data() }, { status: 201 });
}

