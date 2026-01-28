import { NextResponse } from "next/server";

import { requireAdminSession } from "@/lib/auth/admin-session";
import { adminDb } from "@/lib/firebase/admin";
import { projectSchema } from "@/lib/schemas";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const parsed = projectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  await db.collection("projects").doc(id).set(parsed.data, { merge: true });
  const doc = await db.collection("projects").doc(id).get();
  return NextResponse.json({ id: doc.id, ...doc.data() });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await requireAdminSession();
  const db = adminDb();
  if (!db) return NextResponse.json({ error: "Firestore não configurado" }, { status: 500 });

  const { id } = await params;
  await db.collection("projects").doc(id).delete();
  return NextResponse.json({ ok: true });
}

