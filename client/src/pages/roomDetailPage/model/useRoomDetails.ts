import { useParams } from 'react-router-dom'
import { useRoomDetails } from '@/entities/rooms'

export const useRoomDetail = () => {
  const { roomId } = useParams<{ roomId: string }>()

  const { data: roomDetails, isLoading } = useRoomDetails(roomId)

  return { roomDetails, isLoading }
}
