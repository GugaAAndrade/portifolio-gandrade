"use client";

export async function uploadImage(file: File, pathPrefix = "projects") {
  const form = new FormData();
  form.append("file", file);
  form.append("pathPrefix", pathPrefix);

  const res = await fetch("/api/admin/uploads", {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "Falha ao enviar imagem");
  }

  const data = (await res.json()) as { url: string };
  return data.url;
}
