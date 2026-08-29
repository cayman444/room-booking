import type { FC } from 'react'
import { BookingCardSkeleton } from '@/entities/bookings'
import { Skeleton } from '@/shared/ui'

export const MyBookingsPageSkeleton: FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 p-10">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10.5 w-75 rounded-lg" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-34 rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="border-border flex w-full items-center gap-6 border-b pb-3">
          <Skeleton className="h-5 w-32 rounded" />
          <Skeleton className="h-5 w-24 rounded" />
        </div>
        <div className="flex flex-col gap-4">
          <BookingCardSkeleton />
          <BookingCardSkeleton />
        </div>
      </div>
    </div>
  )
}
