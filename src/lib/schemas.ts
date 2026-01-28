import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(2, "Título muito curto"),
  slug: z
    .string()
    .min(2)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use slug tipo: meu-projeto"),
  shortDescription: z.string().min(10),
  fullDescription: z.string().min(40),
  tags: z.array(z.string().min(1)),
  stack: z.array(z.string().min(1)),
  coverImage: z.string().url().optional().nullable(),
  galleryImages: z.array(z.string().url()),
  repoUrl: z.string().url().optional().nullable(),
  liveUrl: z.string().url().optional().nullable(),
  featured: z.boolean(),
  createdAt: z.number().int().nonnegative(),
});

export const leadSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Conte um pouco mais sobre seu projeto"),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type LeadInput = z.infer<typeof leadSchema>;

