import { NextResponse } from "next/server";

import { requireAdminSession } from "@/lib/auth/admin-session";
import { supabaseAdmin } from "@/lib/storage/supabase-admin";

export async function POST(req: Request) {
  try {
    await requireAdminSession();
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ error: "FormData inválido" }, { status: 400 });
  }

  const file = form.get("file");
  const pathPrefix = String(form.get("pathPrefix") ?? "projects");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Arquivo ausente" }, { status: 400 });
  }

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? "portfolio";
  const ext = file.name.split(".").pop() ?? "jpg";
  const safeExt = ext.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const name = `${crypto.randomUUID()}.${safeExt}`;
  const path = `${pathPrefix}/${name}`;

  const supabase = supabaseAdmin();
  const buffer = new Uint8Array(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, buffer, { cacheControl: "3600", upsert: false, contentType: file.type });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return NextResponse.json({ url: data.publicUrl });
}
