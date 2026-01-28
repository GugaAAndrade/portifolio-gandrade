import "server-only";

import { seedProjects } from "@/lib/data/seed";
import { adminDb } from "@/lib/firebase/admin";
import type { Project } from "@/types/project";
import { cache } from "react";

function mapDoc(id: string, data: Record<string, unknown>): Project {
  return {
    id,
    title: String(data.title ?? ""),
    slug: String(data.slug ?? ""),
    shortDescription: String(data.shortDescription ?? ""),
    fullDescription: String(data.fullDescription ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    stack: Array.isArray(data.stack) ? (data.stack as string[]) : [],
    coverImage: (data.coverImage as string | null | undefined) ?? null,
    galleryImages: Array.isArray(data.galleryImages)
      ? (data.galleryImages as string[])
      : [],
    repoUrl: (data.repoUrl as string | null | undefined) ?? null,
    liveUrl: (data.liveUrl as string | null | undefined) ?? null,
    featured: Boolean(data.featured),
    createdAt: typeof data.createdAt === "number" ? data.createdAt : Date.now(),
  };
}

export const getProjects = cache(async (): Promise<Project[]> => {
  const db = adminDb();
  if (!db) return seedProjects;

  const snap = await db.collection("projects").orderBy("createdAt", "desc").get();
  return snap.docs.map((d) => mapDoc(d.id, d.data() as Record<string, unknown>));
});

export const getFeaturedProjects = cache(async (): Promise<Project[]> => {
  const db = adminDb();
  if (!db) return seedProjects.filter((p) => p.featured).slice(0, 6);

  const snap = await db
    .collection("projects")
    .where("featured", "==", true)
    .orderBy("createdAt", "desc")
    .limit(6)
    .get();
  return snap.docs.map((d) => mapDoc(d.id, d.data() as Record<string, unknown>));
});

export const getProjectBySlug = cache(
  async (slug: string): Promise<Project | null> => {
    const db = adminDb();
    if (!db) return seedProjects.find((p) => p.slug === slug) ?? null;

    const snap = await db
      .collection("projects")
      .where("slug", "==", slug)
      .limit(1)
      .get();
    const doc = snap.docs[0];
    if (!doc) return null;
    return mapDoc(doc.id, doc.data() as Record<string, unknown>);
  },
);

