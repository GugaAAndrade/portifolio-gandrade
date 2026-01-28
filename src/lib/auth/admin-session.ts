import "server-only";

import { adminAuth } from "@/lib/firebase/admin";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "__session";

function allowedAdminEmails() {
  const raw = process.env.ADMIN_EMAILS ?? "";
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export async function getAdminSession() {
  const cookie = await cookies();
  const sessionCookie = cookie.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) return null;

  const auth = adminAuth();
  if (!auth) return null;

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie, true);
    const email = decoded.email?.toLowerCase() ?? "";
    const allowlist = allowedAdminEmails();
    if (allowlist.length && !allowlist.includes(email)) return null;
    return decoded;
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) throw new Error("UNAUTHORIZED");
  return session;
}

export const adminSessionCookieName = SESSION_COOKIE_NAME;

