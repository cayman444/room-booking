import type { FC } from 'react'
import type { Room } from '../model/types'

interface RoomInfoProps {
  room?: Room
}

export const RoomInfo: FC<RoomInfoProps> = ({ room }) => {
  return <div>RoomInfo</div>
}
