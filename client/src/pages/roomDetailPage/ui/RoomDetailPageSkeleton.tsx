import type { FC } from 'react'
import { RoomInfoSkeleton } from '@/entities/rooms'
import { RoomScheduleSkeleton } from '@/widgets/roomSchedule'
import { RoomDetailBreadcrumbsSkeleton } from './RoomDetailBreadcrumbsSkeleton'

export const RoomDetailPageSkeleton: FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-3 p-6 md:px-10">
      <RoomDetailBreadcrumbsSkeleton />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
        <RoomInfoSkeleton />
        <RoomScheduleSkeleton />
      </div>
    </div>
  )
}
