import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold tracking-tight">
              Gustavo Andrade
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Desenvolvimento premium de sites e sistemas — foco em performance,
              UX e crescimento.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="icon" aria-label="E-mail">
              <a href="mailto:dev.gustavo.contato@gmail.com">
                <Mail />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="LinkedIn"
            >
              <a href="https://www.linkedin.com/in/guga-andrade/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="GitHub">
              <a href="https://github.com/GugaAAndrade" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/50 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gustavo Andrade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground" href="/projects">
              Projetos
            </Link>
            <Link className="hover:text-foreground" href="/contact">
              Contato
            </Link>
            <Link className="hover:text-foreground" href="/admin">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

