"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    ExternalLink,
    Loader2,
    Pencil,
    Plus,
    Trash2,
    UploadCloud,
} from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projectSchema } from "@/lib/schemas";
import { uploadImage } from "@/lib/storage/upload";

type ProjectFormValues = z.infer<typeof projectSchema>;

type ProjectRow = ProjectFormValues & { id: string };

function splitList(v: string) {
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function ProjectsAdmin() {
  const qc = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<ProjectRow | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [tagsText, setTagsText] = React.useState("");
  const [stackText, setStackText] = React.useState("");

  const projectsQuery = useQuery<ProjectRow[]>({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const res = await fetch("/api/admin/projects");
      if (!res.ok) throw new Error("Falha ao carregar projetos");
      return (await res.json()) as ProjectRow[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (values: ProjectFormValues & { id?: string }) => {
      const res = await fetch(
        values.id ? `/api/admin/projects/${values.id}` : "/api/admin/projects",
        {
          method: values.id ? "PATCH" : "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? "Falha ao salvar");
      return data as ProjectRow;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["admin-projects"] });
      setOpen(false);
      setEditing(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? "Falha ao remover");
      return true;
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["admin-projects"] });
    },
  });

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      fullDescription: "",
      tags: [],
      stack: [],
      coverImage: null,
      galleryImages: [],
      repoUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: Date.now(),
    },
  });

  const currentTagsText = (form.getValues("tags") ?? []).join(", ");
  const currentStackText = (form.getValues("stack") ?? []).join(", ");
  const hasUnsavedChanges =
    form.formState.isDirty ||
    tagsText.trim() !== currentTagsText ||
    stackText.trim() !== currentStackText;

  const startCreate = () => {
    setEditing(null);
    form.reset({
      title: "",
      slug: "",
      shortDescription: "",
      fullDescription: "",
      tags: [],
      stack: [],
      coverImage: null,
      galleryImages: [],
      repoUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: Date.now(),
    });
    setTagsText("");
    setStackText("");
    setOpen(true);
  };

  const startEdit = (p: ProjectRow) => {
    setEditing(p);
    form.reset({
      title: p.title,
      slug: p.slug,
      shortDescription: p.shortDescription,
      fullDescription: p.fullDescription,
      tags: p.tags ?? [],
      stack: p.stack ?? [],
      coverImage: p.coverImage ?? null,
      galleryImages: p.galleryImages ?? [],
      repoUrl: p.repoUrl ?? null,
      liveUrl: p.liveUrl ?? null,
      featured: Boolean(p.featured),
      createdAt: p.createdAt ?? Date.now(),
    });
    setTagsText((p.tags ?? []).join(", "));
    setStackText((p.stack ?? []).join(", "));
    setOpen(true);
  };

  const onSubmit = async (values: ProjectFormValues) => {
    const tags = splitList(tagsText);
    const stack = splitList(stackText);
    await saveMutation.mutateAsync({ ...values, tags, stack, id: editing?.id });
  };

  const handleDialogChange = (nextOpen: boolean) => {
    if (!nextOpen && hasUnsavedChanges) {
      const confirmClose = window.confirm(
        "Você tem alterações não salvas. Deseja fechar sem salvar?",
      );
      if (!confirmClose) return;
    }
    setOpen(nextOpen);
  };

  const uploadCover = async (file: File) => {
    setUploading(true);
    try {
      const url = await uploadImage(file, "projects/covers");
      form.setValue("coverImage", url, { shouldValidate: true });
    } finally {
      setUploading(false);
    }
  };

  const uploadGallery = async (files: FileList) => {
    setUploading(true);
    try {
      const urls = await Promise.all(
        Array.from(files).map((f) => uploadImage(f, "projects/gallery")),
      );
      const current = form.getValues("galleryImages") ?? [];
      form.setValue("galleryImages", [...current, ...urls], {
        shouldValidate: true,
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Projetos</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Adicione, edite e publique projetos com imagens, stack e links.
          </p>
        </div>
        <Button onClick={startCreate} variant="premium">
          <Plus className="mr-2 size-4" />
          Novo projeto
        </Button>
      </div>

      <div className="mt-8 rounded-[var(--radius)] border border-border/60 bg-card">
        <div className="flex items-center justify-between border-b border-border/50 p-4">
          <p className="text-sm font-medium">
            {projectsQuery.data?.length ?? 0} projeto(s)
          </p>
          {projectsQuery.isLoading ? (
            <p className="text-sm text-muted-foreground">Carregando…</p>
          ) : null}
        </div>

        <div className="divide-y divide-border/50">
          {(projectsQuery.data ?? []).map((p) => (
            <div key={p.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="truncate font-semibold tracking-tight">{p.title}</p>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  /projects/{p.slug}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(p.tags ?? []).slice(0, 4).map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                  {p.featured ? <Badge variant="premium">Destaque</Badge> : null}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={`/projects/${p.slug}`} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 size-4" />
                    Ver
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={() => startEdit(p)}>
                  <Pencil className="mr-2 size-4" />
                  Editar
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteMutation.mutate(p.id)}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="mr-2 size-4" />
                  Remover
                </Button>
              </div>
            </div>
          ))}

          {!projectsQuery.isLoading && !(projectsQuery.data ?? []).length ? (
            <div className="p-6 text-sm text-muted-foreground">
              Nenhum projeto ainda. Crie o primeiro para preencher o portfólio.
            </div>
          ) : null}
        </div>
      </div>

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DialogTrigger asChild>
          <span className="hidden" />
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar projeto" : "Novo projeto"}</DialogTitle>
            <DialogDescription>
              Preencha os campos com textos objetivos (copy premium) e stack real.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Título</label>
              <Input {...form.register("title")} placeholder="Ex.: Landing premium para SaaS" />
              {form.formState.errors.title ? (
                <p className="text-sm text-destructive">
                  {form.formState.errors.title.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Slug</label>
              <Input {...form.register("slug")} placeholder="ex.: landing-premium-saas" />
              {form.formState.errors.slug ? (
                <p className="text-sm text-destructive">
                  {form.formState.errors.slug.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Destaque</label>
              <label className="flex h-11 items-center gap-2 rounded-[calc(var(--radius)-6px)] border border-input px-3 text-sm">
                <input type="checkbox" {...form.register("featured")} />
                Mostrar na Home
              </label>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Descrição curta</label>
              <Textarea
                {...form.register("shortDescription")}
                placeholder="Uma frase forte e objetiva. Ex.: Painel admin com CRUD, upload e métricas, pensado para operação diária."
              />
              {form.formState.errors.shortDescription ? (
                <p className="text-sm text-destructive">
                  {form.formState.errors.shortDescription.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Descrição completa</label>
              <Textarea
                {...form.register("fullDescription")}
                placeholder="Explique contexto, desafios, solução e impacto. Seja específico."
              />
              {form.formState.errors.fullDescription ? (
                <p className="text-sm text-destructive">
                  {form.formState.errors.fullDescription.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tags (separadas por vírgula)</label>
              <Input
                value={tagsText}
                onChange={(e) => setTagsText(e.target.value)}
                onBlur={(e) => {
                  const next = splitList(e.target.value);
                  form.setValue("tags", next, { shouldValidate: true });
                }}
                placeholder="Next.js, Firebase, SEO"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Stack (separada por vírgula)</label>
              <Input
                value={stackText}
                onChange={(e) => setStackText(e.target.value)}
                onBlur={(e) => {
                  const next = splitList(e.target.value);
                  form.setValue("stack", next, { shouldValidate: true });
                }}
                placeholder="Next.js, TypeScript, Tailwind"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Links (opcional)</label>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Input {...form.register("liveUrl")} placeholder="URL ao vivo" />
                <Input {...form.register("repoUrl")} placeholder="URL do repositório" />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Imagens</label>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <label className="flex cursor-pointer items-center justify-between gap-3 rounded-[calc(var(--radius)-6px)] border border-input bg-background px-3 py-3 text-sm">
                  <span className="text-muted-foreground">Capa</span>
                  <span className="inline-flex items-center gap-2">
                    {uploading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <UploadCloud className="size-4" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) void uploadCover(f);
                      }}
                      disabled={uploading}
                    />
                    Upload
                  </span>
                </label>

                <label className="flex cursor-pointer items-center justify-between gap-3 rounded-[calc(var(--radius)-6px)] border border-input bg-background px-3 py-3 text-sm">
                  <span className="text-muted-foreground">Galeria</span>
                  <span className="inline-flex items-center gap-2">
                    {uploading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <UploadCloud className="size-4" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length) void uploadGallery(files);
                      }}
                      disabled={uploading}
                    />
                    Upload
                  </span>
                </label>
              </div>

              {form.watch("coverImage") ? (
                <p className="text-xs text-muted-foreground break-all">
                  Capa: {form.watch("coverImage")}
                </p>
              ) : null}
              {(form.watch("galleryImages") ?? []).length ? (
                <p className="text-xs text-muted-foreground">
                  Galeria: {(form.watch("galleryImages") ?? []).length} imagem(ns)
                </p>
              ) : null}
            </div>

            {saveMutation.isError ? (
              <p className="text-sm text-destructive md:col-span-2">
                {(saveMutation.error as Error).message}
              </p>
            ) : null}

            <DialogFooter className="md:col-span-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" variant="premium" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Salvando…
                  </>
                ) : (
                  "Salvar"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
