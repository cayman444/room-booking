import { useSearchParams } from 'react-router-dom'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { DEFAULT_TIME_SLOTS } from '@/shared/lib/date/consts'
import { useUpdateSearchParams } from '@/shared/model'

export function useRoomFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { updateSearchParams } = useUpdateSearchParams()

  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''
  const date = searchParams.get(SEARCH_PARAM_KEYS.DATE) || ''
  const startTime = searchParams.get(SEARCH_PARAM_KEYS.START_TIME) || DEFAULT_TIME_SLOTS[0]
  const duration = searchParams.get(SEARCH_PARAM_KEYS.DURATION) || '60'
  const minCapacity = searchParams.get(SEARCH_PARAM_KEYS.MIN_CAPACITY) || 'all'

  const setDate = (newDate: string) => {
    updateSearchParams(SEARCH_PARAM_KEYS.DATE, newDate)
  }

  const setStartTime = (newTime: string) => {
    updateSearchParams(SEARCH_PARAM_KEYS.START_TIME, newTime)
  }

  const setDuration = (newDuration: string) => {
    updateSearchParams(SEARCH_PARAM_KEYS.DURATION, newDuration)
  }

  const setMinCapacity = (newCapacity: string) => {
    updateSearchParams(SEARCH_PARAM_KEYS.MIN_CAPACITY, newCapacity)
  }

  const resetFilters = () => {
    const nextParams = new URLSearchParams()

    if (officeId) {
      nextParams.set(SEARCH_PARAM_KEYS.OFFICE_ID, officeId)
    }

    setSearchParams(nextParams)
  }

  return {
    officeId,
    date,
    startTime,
    duration,
    minCapacity,
    setDate,
    setStartTime,
    setDuration,
    setMinCapacity,
    resetFilters,
  }
}
