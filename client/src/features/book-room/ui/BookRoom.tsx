import type { FC } from 'react'
import type { Room } from '@/entities/rooms'

interface BookRoomProps {
  room: Room
  onSuccess?: () => void
  onCancel?: () => void
}

export const BookRoom: FC<BookRoomProps> = () => {
  return <div>form</div>
}
