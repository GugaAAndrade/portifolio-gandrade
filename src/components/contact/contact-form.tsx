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
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
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
    <div className="rounded-[var(--radius)] border border-border/60 bg-gradient-to-b from-card to-card/70 p-6 shadow-[0_24px_80px_-54px_rgba(0,0,0,0.55)] backdrop-blur-sm">
      <h2 className="text-lg font-semibold tracking-tight">
        Vamos falar do seu projeto
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Me diga o objetivo, prazo e o que você já tem pronto (se houver). Eu
        respondo com próximos passos.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            Nome
          </label>
          <Input id="name" placeholder="Seu nome" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="text-sm text-destructive">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            E-mail
          </label>
          <Input
            id="email"
            placeholder="voce@empresa.com"
            type="email"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="message">
            Mensagem
          </label>
          <Textarea
            id="message"
            placeholder="Ex.: Quero uma landing premium para captar leads. Prazo: 2 semanas. Já tenho identidade visual."
            {...form.register("message")}
          />
          {form.formState.errors.message ? (
            <p className="text-sm text-destructive">
              {form.formState.errors.message.message}
            </p>
          ) : null}
        </div>

        {status === "success" ? (
          <p className="text-sm font-medium">
            Enviado com sucesso. Vou responder em breve.
          </p>
        ) : null}
        {status === "error" && serverError ? (
          <p className="text-sm text-destructive">{serverError}</p>
        ) : null}

        <Button type="submit" variant="premium" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Enviando…
            </>
          ) : (
            "Enviar mensagem"
          )}
        </Button>
      </form>

      <div className="mt-6 border-t border-border/50 pt-6">
        <p className="text-sm font-medium">Atalhos</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="justify-start">
            <a href="https://wa.me/5579999191125" target="_blank" rel="noreferrer">
              <Phone className="mr-2 size-4" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <a href="mailto:dev.gustavo.andrade@gmail.com">
              <Mail className="mr-2 size-4" />
              E-mail
            </a>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <a href="https://www.linkedin.com/in/guga-andrade/" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 size-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
