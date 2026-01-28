"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  if (!images.length) {
    return (
      <div className="aspect-[16/10] w-full rounded-[var(--radius)] border border-border/60 bg-gradient-to-br from-[hsl(var(--brand-to)/0.22)] via-muted to-background" />
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius)] border border-border/60" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="relative min-w-0 flex-[0_0_100%]">
              <div className={cn("relative aspect-[16/10] w-full")}>
                <Image
                  src={src}
                  alt={`${title} — imagem ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="pointer-events-auto opacity-90"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Imagem anterior"
        >
          <ChevronLeft />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="pointer-events-auto opacity-90"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próxima imagem"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

