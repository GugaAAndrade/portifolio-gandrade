"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema } from "@/lib/schemas";

type LeadFormValues = z.infer<typeof leadSchema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("idle");
    setServerError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        setServerError(data.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setServerError("Falha de conexão. Tente novamente.");
      setStatus("error");
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Briefing</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">Escopo, prazo e objetivo</h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">Nome</label>
            <Input id="name" placeholder="Seu nome" className="h-11 border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--background)/0.55)]" {...form.register("name")} />
            {form.formState.errors.name ? <p className="text-sm text-destructive">{form.formState.errors.name.message}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">E-mail</label>
            <Input
              id="email"
              placeholder="voce@empresa.com"
              type="email"
              className="h-11 border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--background)/0.55)]"
              {...form.register("email")}
            />
            {form.formState.errors.email ? <p className="text-sm text-destructive">{form.formState.errors.email.message}</p> : null}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="message">Mensagem</label>
          <Textarea
            id="message"
            placeholder="Descreva contexto, objetivo e prazo ideal."
            className="min-h-36 border-[hsl(var(--brand-to)/0.45)] bg-[hsl(var(--background)/0.55)]"
            {...form.register("message")}
          />
          {form.formState.errors.message ? <p className="text-sm text-destructive">{form.formState.errors.message.message}</p> : null}
        </div>

        {status === "success" ? (
          <p className="rounded-xl border border-[hsl(var(--brand-to)/0.35)] bg-[hsl(var(--brand-to)/0.08)] px-4 py-3 text-sm font-medium">
            Mensagem enviada com sucesso. Retorno em breve.
          </p>
        ) : null}
        {status === "error" && serverError ? <p className="text-sm text-destructive">{serverError}</p> : null}

        <Button type="submit" variant="premium" size="lg" className="min-h-11" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar briefing"
          )}
        </Button>
      </form>

      <div className="mt-6 border-t border-border/70 pt-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Canais diretos</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <Button asChild variant="outline" className="min-h-11 justify-start">
            <a href="https://wa.me/5579999191125" target="_blank" rel="noreferrer"><Phone className="mr-2 size-4" /> WhatsApp</a>
          </Button>
          <Button asChild variant="outline" className="min-h-11 justify-start">
            <a href="mailto:dev.gustavo.andrade@gmail.com"><Mail className="mr-2 size-4" /> E-mail</a>
          </Button>
          <Button asChild variant="outline" className="min-h-11 justify-start">
            <a href="https://www.linkedin.com/in/guga-andrade/" target="_blank" rel="noreferrer"><MessageCircle className="mr-2 size-4" /> LinkedIn</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
