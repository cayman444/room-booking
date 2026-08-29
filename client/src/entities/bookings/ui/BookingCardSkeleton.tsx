import type { FC } from 'react'
import { Skeleton } from '@/shared/ui'

export const BookingCardSkeleton: FC = () => {
  return (
    <div className="bg-card border-border flex flex-col justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center">
      <div className="flex items-center gap-5">
        <div className="bg-background flex size-20 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl">
          <Skeleton className="h-2.5 w-12 rounded" />
          <Skeleton className="h-6 w-8 rounded" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-56 rounded" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-3.5 w-25 rounded" />
            <span className="text-subtle">•</span>
            <Skeleton className="h-3.5 w-20 rounded" />
            <span className="text-subtle">•</span>
            <Skeleton className="h-3.5 w-40 rounded" />
          </div>
        </div>
      </div>
      <div className="flex shrink-0">
        <Skeleton className="h-10 w-26 rounded-lg" />
      </div>
    </div>
  )
}
