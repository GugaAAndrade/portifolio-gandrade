import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Skeleton className="h-10 w-[420px] max-w-full" />
          <Skeleton className="mt-4 h-5 w-[560px] max-w-full" />

          <Skeleton className="mt-8 aspect-[16/10] w-full rounded-[var(--radius)]" />

          <div className="mt-10 space-y-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
          </div>
        </div>
        <div className="lg:col-span-4">
          <Skeleton className="h-56 w-full rounded-[var(--radius)]" />
        </div>
      </div>
    </div>
  );
}

