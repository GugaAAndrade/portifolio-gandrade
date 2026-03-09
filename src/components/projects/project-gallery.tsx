"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!mainApi) return;

    const onSelect = () => setSelected(mainApi.selectedScrollSnap());
    mainApi.on("select", onSelect);
    onSelect();

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi]);

  if (!images.length) {
    return (
      <div className="aspect-[16/10] w-full rounded-[24px] border border-border/60 bg-gradient-to-br from-[hsl(var(--brand-to)/0.2)] to-background" />
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[24px] border border-border/60 bg-background/70" ref={mainRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={src}
                  alt={`${title} — imagem ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="pointer-events-auto h-11 w-11 border border-white/20 bg-background/65 backdrop-blur-sm"
            onClick={() => mainApi?.scrollPrev()}
            aria-label="Imagem anterior"
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="pointer-events-auto h-11 w-11 border border-white/20 bg-background/65 backdrop-blur-sm"
            onClick={() => mainApi?.scrollNext()}
            aria-label="Próxima imagem"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Frame {selected + 1} / {images.length}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
        {images.map((src, index) => {
          const active = index === selected;
          return (
            <button
              key={`thumb-${src}-${index}`}
              type="button"
              onClick={() => mainApi?.scrollTo(index)}
              aria-label={`Ver miniatura ${index + 1}`}
              className={`relative overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                active
                  ? "border-[hsl(var(--brand-to))]"
                  : "border-border/60 hover:border-[hsl(var(--brand-to)/0.45)]"
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`${title} miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 12vw"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
