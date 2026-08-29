import type { BookingsScope } from '@/entities/bookings'
import { useBookings } from '@/entities/bookings'

interface UseMyBookingsParams {
  officeId?: string
  scope?: BookingsScope
}

export function useMyBookings(params?: UseMyBookingsParams) {
  const scope = params?.scope || 'upcoming'
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

  const { data: upcomingData = [] } = useBookings({
    scope: 'upcoming',
    officeId: officeId || undefined,
  })

  return {
    bookings,
    upcomingCount: upcomingData.length,
    isLoading,
    isError,
    refetch,
  }
}
