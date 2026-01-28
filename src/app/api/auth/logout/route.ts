import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminSessionCookieName } from "@/lib/auth/admin-session";

export async function POST() {
  const cookie = await cookies();
  cookie.set(adminSessionCookieName, "", { path: "/", maxAge: 0 });
  return NextResponse.json({ ok: true });
}

