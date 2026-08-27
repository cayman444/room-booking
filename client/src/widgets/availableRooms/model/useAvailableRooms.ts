import { useSearchParams } from 'react-router-dom'
import { useRooms } from '@/entities/rooms'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { calculateIntervalIso, formatDateToYMD } from '@/shared/lib/date'

export const useAvailableRooms = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''
  const date = formatDateToYMD(new Date())
  const startTime = searchParams.get(SEARCH_PARAM_KEYS.START_TIME) || undefined
  const duration = Number(searchParams.get(SEARCH_PARAM_KEYS.DURATION)) || 60
  const minCapacityStr = searchParams.get(SEARCH_PARAM_KEYS.MIN_CAPACITY)
  const minCapacity =
    minCapacityStr && minCapacityStr !== 'all' ? Number(minCapacityStr) : undefined

  const { from, to } = calculateIntervalIso(date, startTime, duration)

  const {
    data: rooms = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useRooms({
    officeId,
    minCapacity,
    from,
    to,
  })

  const handleResetFilters = () => {
    const nextParams = new URLSearchParams()

    if (officeId) {
      nextParams.set(SEARCH_PARAM_KEYS.OFFICE_ID, officeId)
    }

    setSearchParams(nextParams)
  }

  return { rooms, officeId, isLoading, isError, error, refetch, handleResetFilters }
}
