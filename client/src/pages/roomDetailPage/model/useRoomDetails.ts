import { useParams } from 'react-router-dom'
import { useRoomDetails } from '@/entities/rooms'

export const useRoomDetail = () => {
  const { roomId } = useParams<{ roomId: string }>()

  const { data: roomDetails, isLoading, isError, refetch } = useRoomDetails(roomId)

  return { roomDetails, isLoading, isError, refetch }
}
