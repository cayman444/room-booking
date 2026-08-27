import type { FC } from 'react'
import type { Room } from '../model/types'

interface RoomCardProps {
  room: Room
}

export const RoomCard: FC<RoomCardProps> = ({ room }) => {
  return <div className="bg-card border-card rounded-2xl border p-5">{room.name}</div>
}
