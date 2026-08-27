import { useSearchParams } from 'react-router-dom'
import { useOffices } from '@/entities/office'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { formatOfficeTime } from '@/shared/lib/date'
import { useCurrentTime } from '@/shared/model'

export function useSelectOffice() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: offices = [], isLoading } = useOffices()
  const currentTime = useCurrentTime()

  const currentOfficeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''
  const selectedOffice = offices.find((o) => o.id === currentOfficeId)

  const officeTime = selectedOffice?.timezone
    ? formatOfficeTime(selectedOffice.timezone, currentTime)
    : '--'

  const handleSelectOffice = (officeId: string) => {
    const newParams = new URLSearchParams(searchParams)

    if (officeId) {
      newParams.set(SEARCH_PARAM_KEYS.OFFICE_ID, officeId)
    } else {
      newParams.delete(SEARCH_PARAM_KEYS.OFFICE_ID)
    }

    setSearchParams(newParams)
  }

  return {
    offices,
    isLoading,
    currentOfficeId,
    selectedOffice,
    officeTime,
    handleSelectOffice,
  }
}
