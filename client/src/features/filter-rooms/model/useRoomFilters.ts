import { useSearchParams } from 'react-router-dom'
import { SEARCH_PARAM_KEYS } from '@/shared/config'

export function useRoomFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''
  const startTime = searchParams.get(SEARCH_PARAM_KEYS.START_TIME) || ''
  const duration = searchParams.get(SEARCH_PARAM_KEYS.DURATION) || '60'
  const minCapacity = searchParams.get(SEARCH_PARAM_KEYS.MIN_CAPACITY) || 'all'

  const updateParam = (key: string, value?: string) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value && value !== 'all') {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams)
  }

  const setStartTime = (newTime: string) => {
    updateParam(SEARCH_PARAM_KEYS.START_TIME, newTime)
  }

  const setDuration = (newDuration: string) => {
    updateParam(SEARCH_PARAM_KEYS.DURATION, newDuration)
  }

  const setMinCapacity = (newCapacity: string) => {
    updateParam(SEARCH_PARAM_KEYS.MIN_CAPACITY, newCapacity)
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
    startTime,
    duration,
    minCapacity,
    setStartTime,
    setDuration,
    setMinCapacity,
    resetFilters,
  }
}
