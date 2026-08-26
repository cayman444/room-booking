import { useSearchParams } from 'react-router-dom'

import { useOffices } from '@/entities/office'
import { formatOfficeTime } from '@/shared/lib/date'

export function useSelectOffice() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: offices = [], isLoading } = useOffices()

  const currentOfficeId = searchParams.get('officeId') || ''
  const selectedOffice = offices.find((o) => o.id === currentOfficeId)

  const officeTime = selectedOffice?.timezone ? formatOfficeTime(selectedOffice?.timezone) : '---'

  const handleSelectOffice = (officeId: string) => {
    const newParams = new URLSearchParams(searchParams)

    if (officeId) {
      newParams.set('officeId', officeId)
    } else {
      newParams.delete('officeId')
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
