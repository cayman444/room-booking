import type { FC } from 'react'
import type { Room } from '@/entities/rooms'

interface RoomScheduleProps {
  room?: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
  return <div className="bg-card border-border rounded-[20px] border p-8 shadow-sm">Расписание комнаты {room?.name}</div>
}

