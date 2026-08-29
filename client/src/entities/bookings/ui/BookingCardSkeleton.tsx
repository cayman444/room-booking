import type { FC } from 'react'
import { Skeleton } from '@/shared/ui'

export const BookingCardSkeleton: FC = () => {
  return (
    <div className="bg-card border-border flex flex-col justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center">
      <div className="flex items-center gap-5">
        <Skeleton className="size-16 shrink-0 rounded-xl" />
        <div className="flex flex-col gap-2.5">
          <Skeleton className="h-5 w-56 rounded" />
          <Skeleton className="h-4 w-72 rounded" />
        </div>
      </div>
      <div className="flex shrink-0">
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  )
}
