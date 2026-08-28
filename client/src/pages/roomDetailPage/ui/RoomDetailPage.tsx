import { RoomInfo } from '@/entities/rooms'
import { RoomSchedule } from '@/widgets/roomSchedule'
import { useRoomDetail } from '../model/useRoomDetails'
import { RoomDetailBreadcrumbs } from './RoomDetailBreadcrumbs'

export function RoomDetailPage() {
  const { roomDetails, isLoading } = useRoomDetail()

  if (isLoading) return 'loading...'
  if (!roomDetails) return null

  return (
    <div className="flex flex-1 flex-col gap-3 px-10 py-6">
      <RoomDetailBreadcrumbs room={roomDetails} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
        <RoomInfo room={roomDetails} />
        <RoomSchedule room={roomDetails} />
      </div>
    </div>
  )
}
