import type { FC } from 'react'
import type { Room } from '@/entities/rooms'

interface RoomScheduleProps {
  room?: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
  return <div>RoomSchedule</div>
}
