import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { Room } from '../model/types'

export function useRoomDetails(roomId: string | undefined) {
  return useQuery({
    queryKey: ['room', roomId],
    queryFn: () => apiClient.get<Room>(`/rooms/${roomId}`).then((res) => res.data),
    enabled: !!roomId,
  })
}
