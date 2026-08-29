import type { FC } from 'react'
import { Skeleton } from '@/shared/ui'

export const RoomInfoSkeleton: FC = () => {
  return (
    <div className="bg-card border-border flex flex-col self-start rounded-2xl border p-6">
      <Skeleton className="h-8 w-40 rounded" />
      <Skeleton className="mt-2 h-5 w-60 rounded" />
      <hr className="border-border my-5" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-5 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-48 rounded" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-5 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-36 rounded" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-5 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-32 rounded" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-5 shrink-0 rounded" />
          <Skeleton className="h-3.5 w-44 rounded" />
        </div>
      </div>
    </div>
  )
}
