import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative overflow-hidden pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-vignette" />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <Skeleton className="h-32 w-full border border-border/70 bg-card" />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Skeleton className="aspect-[16/9] w-full border border-border/70 bg-card" />
            <div className="border border-border/70 bg-card p-6">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-4 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-11/12" />
              <Skeleton className="mt-2 h-4 w-10/12" />
            </div>
            <Skeleton className="h-72 w-full border border-border/70 bg-card" />
          </div>

          <div className="lg:col-span-4">
            <Skeleton className="h-64 w-full border border-border/70 bg-card" />
          </div>
        </div>
      </div>
    </div>
  );
}
