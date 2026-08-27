import { Skeleton } from '@/shared/ui'

export function RoomCardSkeleton() {
  return (
    <div className="bg-card border-border rounded-2xl border p-5">
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <Skeleton className="h-6.25 w-30 rounded-md" />
          <Skeleton className="h-4.5 w-12.5 rounded-md" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-5 w-50 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-5 w-50 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-10 w-full rounded-lg" />
        <div className="grid grid-cols-2 items-center gap-3">
          <Skeleton className="h-9.75 w-full rounded-lg" />
          <Skeleton className="h-9.75 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
