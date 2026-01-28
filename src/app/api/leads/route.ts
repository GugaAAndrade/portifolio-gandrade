import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebase/admin";
import { leadSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const db = adminDb();
  if (!db) {
    return NextResponse.json(
      { error: "Firebase não configurado. Configure o Firestore para salvar leads." },
      { status: 500 },
    );
  }

  const body = await req.json().catch(() => ({}));
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  await db.collection("leads").add({
    ...lead,
    createdAt: Date.now(),
    userAgent: req.headers.get("user-agent") ?? null,
  });

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const resendTo = process.env.RESEND_TO;

  if (resendApiKey && resendFrom && resendTo) {
    try {
      const subject = `Novo contato: ${lead.name}`;
      const text = [
        "Novo lead recebido:",
        `Nome: ${lead.name}`,
        `E-mail: ${lead.email}`,
        `Mensagem: ${lead.message}`,
      ].join("\n");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFrom,
          to: resendTo.split(",").map((email) => email.trim()),
          subject,
          text,
        }),
      });
    } catch (error) {
      console.error("Falha ao enviar e-mail via Resend", error);
    }
  }

  return NextResponse.json({ ok: true });
}
