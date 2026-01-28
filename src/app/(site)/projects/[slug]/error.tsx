"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Algo deu errado</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Não foi possível carregar este projeto agora. Tente novamente.
      </p>
      <div className="mt-6">
        <Button onClick={reset}>Tentar novamente</Button>
      </div>
    </div>
  );
}

