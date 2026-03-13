import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FinalCtaProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  proofs?: string[];
  className?: string;
};

export function FinalCta({
  eyebrow = "Comece sua jornada",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  proofs = [],
  className,
}: FinalCtaProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[hsl(var(--brand-to)/0.35)] bg-[linear-gradient(135deg,hsl(var(--brand-from)),hsl(var(--brand-to))_58%,hsl(221_82%_48%))] px-6 py-12 text-center text-white shadow-[0_34px_90px_-48px_hsl(var(--brand-to)/0.9)] md:px-10 md:py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.22),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/75">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
          {description}
        </p>

        {proofs.length ? (
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/78">
            {proofs.map((proof) => (
              <span key={proof}>{proof}</span>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-h-11 border border-white/40 bg-white text-slate-950 shadow-none hover:bg-white/92"
          >
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>

          {secondaryHref && secondaryLabel ? (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-11 border-white/25 bg-white/6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
