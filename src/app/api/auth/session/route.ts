import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminSessionCookieName } from "@/lib/auth/admin-session";
import { adminAuth } from "@/lib/firebase/admin";

export async function POST(req: Request) {
  const auth = adminAuth();
  if (!auth) {
    return NextResponse.json(
      { error: "Firebase Admin não configurado" },
      { status: 500 },
    );
  }

  const { idToken } = (await req.json().catch(() => ({}))) as {
    idToken?: string;
  };

  if (!idToken) {
    return NextResponse.json({ error: "idToken ausente" }, { status: 400 });
  }

  const expiresIn = 1000 * 60 * 60 * 24 * 7; // 7 dias

  try {
    const decoded = await auth.verifyIdToken(idToken);
    const email = decoded.email?.toLowerCase() ?? "";
    const allowlist = (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    if (allowlist.length && !allowlist.includes(email)) {
      return NextResponse.json({ error: "Usuário não autorizado" }, { status: 403 });
    }

    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    const cookie = await cookies();
    cookie.set(adminSessionCookieName, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(expiresIn / 1000),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}

