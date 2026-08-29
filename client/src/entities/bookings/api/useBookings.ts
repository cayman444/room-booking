import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { Booking, BookingsQueryParams } from '../model/types'

interface BookingsResponse {
  items: Booking[]
}

export function useBookings(params?: BookingsQueryParams) {
  return useQuery<Booking[]>({
    queryKey: ['bookings', params],
    queryFn: async () => {
      const response = await apiClient.get<BookingsResponse>('/bookings', {
        params: {
          scope: params?.scope || 'upcoming',
          ...(params?.officeId ? { officeId: params.officeId } : {}),
        },
      })

      return response.data.items
    },
  })
}
