import type { BookingsScope } from '@/entities/bookings'
import { useOffices } from '@/entities/office'

export const SCOPE_OPTIONS: { value: BookingsScope; label: string }[] = [
  { value: 'all', label: 'За все время' },
  { value: 'upcoming', label: 'Предстоящие' },
  { value: 'past', label: 'Прошедшие' },
]

export const useMyBookingsFilters = ({
  selectedOfficeId,
  selectedScope,
}: {
  selectedOfficeId: string
  selectedScope: BookingsScope
}) => {
  const { data: offices = [] } = useOffices()

  const selectedOffice = offices.find((o) => o.id === selectedOfficeId)
  const displayOffice = selectedOffice ? selectedOffice.name : 'Все офисы'
  const displayScope = SCOPE_OPTIONS.find((s) => s.value === selectedScope)?.label || 'За все время'

  return { offices, displayOffice, displayScope }
}
