import { useOffices } from '@/entities/office'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { formatOfficeTime } from '@/shared/lib/date'
import { useCurrentTime, useSyncedState } from '@/shared/model'

export function useSelectOffice() {
  const { data: offices = [], isLoading } = useOffices()
  const currentTime = useCurrentTime()
  const [currentOfficeId, setCurrentOfficeId] = useSyncedState(SEARCH_PARAM_KEYS.OFFICE_ID, '')
  const selectedOffice = offices.find((o) => o.id === currentOfficeId)

  const officeTime = selectedOffice?.timezone
    ? formatOfficeTime(selectedOffice.timezone, currentTime)
    : '---'

  return {
    offices,
    isLoading,
    currentOfficeId,
    selectedOffice,
    officeTime,
    handleSelectOffice: setCurrentOfficeId,
  }
}
