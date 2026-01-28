export type Project = {
  id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  stack: string[];
  coverImage?: string | null;
  galleryImages: string[];
  repoUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  createdAt: number; // ms
};

