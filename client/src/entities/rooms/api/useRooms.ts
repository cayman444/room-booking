import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { Room, RoomsParams } from '../model/types'

interface ApiResponse {
  items: Room[]
}

export function useRooms(params: RoomsParams) {
  return useQuery<ApiResponse, Error, Room[]>({
    queryKey: ['rooms', params],
    queryFn: () => apiClient.get('/rooms', { params }).then((res) => res.data),
    select: (data) => data.items,
    enabled: Boolean(params.officeId),
  })
}
