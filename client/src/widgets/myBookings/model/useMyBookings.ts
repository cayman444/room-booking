import type { BookingsScope } from '@/entities/bookings'
import { useBookings } from '@/entities/bookings'

interface UseMyBookingsParams {
  officeId?: string
  scope?: BookingsScope
}

export function useMyBookings(params?: UseMyBookingsParams) {
  const scope = params?.scope || 'all'
  const officeId = params?.officeId || ''

  const {
    data: bookings = [],
    isLoading,
    isError,
    refetch,
  } = useBookings({
    scope,
    officeId: officeId || undefined,
  })

  return {
    bookings,
    isLoading,
    isError,
    refetch,
  }
}
