import { useQuery } from '@tanstack/react-query'
import type { Booking } from '@/entities/bookings'
import { apiClient } from '@/shared/api'

export interface UseRoomBookingsParams {
  from?: string
  to?: string
}

export function useRoomBookings(roomId?: string, params?: UseRoomBookingsParams) {
  return useQuery({
    queryKey: ['room-bookings', roomId, params?.from, params?.to],
    queryFn: () =>
      apiClient
        .get<Booking[]>(`/rooms/${roomId}/bookings`, { params })
        .then((res) => res.data),
    enabled: !!roomId,
  })
}
