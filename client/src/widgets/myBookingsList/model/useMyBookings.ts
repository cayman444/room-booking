import { useSearchParams } from 'react-router-dom'
import { useBookings } from '@/entities/bookings'
import { useOffices } from '@/entities/office'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { useUpdateSearchParams } from '@/shared/model'

export function useMyBookings() {
  const [searchParams] = useSearchParams()
  const { updateSearchParams } = useUpdateSearchParams()

  const rawScope = searchParams.get(SEARCH_PARAM_KEYS.SCOPE)
  const scope: 'upcoming' | 'past' = rawScope === 'past' ? 'past' : 'upcoming'
  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''

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

  const { data: offices = [] } = useOffices()

  const setScope = (newScope: 'upcoming' | 'past') => {
    updateSearchParams(SEARCH_PARAM_KEYS.SCOPE, newScope === 'upcoming' ? undefined : newScope)
  }

  const setOfficeId = (newOfficeId: string) => {
    updateSearchParams(
      SEARCH_PARAM_KEYS.OFFICE_ID,
      !newOfficeId || newOfficeId === 'all' ? undefined : newOfficeId,
    )
  }

  return {
    scope,
    officeId,
    bookings,
    upcomingCount: upcomingData.length,
    offices,
    isLoading,
    isError,
    refetch,
    setScope,
    setOfficeId,
  }
}
