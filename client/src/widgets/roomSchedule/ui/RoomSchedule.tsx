import type { FC } from 'react'
import type { Room } from '@/entities/rooms'

interface RoomScheduleProps {
  room: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
  return (
    <div className="bg-card border-border rounded-2xl border p-6">
      Расписание комнаты {room.name}
    </div>
  )
}
