import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { RoomBooking, RoomBookingsParams } from '../model/types'

interface ApiResponse {
  items: RoomBooking[]
}

export function useRoomBookings(roomId?: string, params?: RoomBookingsParams) {
  return useQuery<ApiResponse, Error, RoomBooking[]>({
    queryKey: ['room-bookings', roomId, params?.from, params?.to],
    queryFn: () => apiClient.get(`/rooms/${roomId}/bookings`, { params }).then((res) => res.data),
    select: (data) => data.items,
    enabled: !!roomId,
  })
}
