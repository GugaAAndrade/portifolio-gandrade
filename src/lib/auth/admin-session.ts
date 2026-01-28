import "server-only";

import type { DecodedIdToken } from "firebase-admin/auth";
import { cookies } from "next/headers";

import { adminAuth } from "@/lib/firebase/admin";

const SESSION_COOKIE_NAME = "__session";
const SESSION_CACHE_TTL_MS = 1000 * 60 * 5;

type SessionCacheEntry = {
  decoded: DecodedIdToken;
  expiresAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __adminSessionCache: Map<string, SessionCacheEntry> | undefined;
}

const sessionCache =
  globalThis.__adminSessionCache ??
  (globalThis.__adminSessionCache = new Map<string, SessionCacheEntry>());

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

  const cached = sessionCache.get(sessionCookie);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.decoded;
  }

  const auth = adminAuth();
  if (!auth) return null;

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie);
    const email = decoded.email?.toLowerCase() ?? "";
    const allowlist = allowedAdminEmails();
    if (allowlist.length && !allowlist.includes(email)) return null;
    const expMs = decoded.exp ? decoded.exp * 1000 : Date.now() + SESSION_CACHE_TTL_MS;
    sessionCache.set(sessionCookie, {
      decoded,
      expiresAt: Math.min(expMs, Date.now() + SESSION_CACHE_TTL_MS),
    });
    return decoded;
  } catch {
    sessionCache.delete(sessionCookie);
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) throw new Error("UNAUTHORIZED");
  return session;
}

export const adminSessionCookieName = SESSION_COOKIE_NAME;
