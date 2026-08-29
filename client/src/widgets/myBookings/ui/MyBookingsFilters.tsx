import { CalendarIcon } from 'lucide-react'
import type { FC } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'
import { SCOPE_OPTIONS, useMyBookingsFilters } from '../model/useMyBookingsFilters'

interface MyBookingsFilterProps {
  selectedOfficeId: string
  setSelectedOfficeId: (officeId: string) => void
  selectedScope: BookingsScope
  setSelectedScope: (scope: BookingsScope) => void
}

export const MyBookingsFilters: FC<MyBookingsFilterProps> = ({
  selectedOfficeId,
  selectedScope,
  setSelectedOfficeId,
  setSelectedScope,
}) => {
  const { offices, displayOffice, displayScope } = useMyBookingsFilters({
    selectedOfficeId,
    selectedScope,
  })

  return (
    <div className="flex items-center gap-3">
      <div className="w-34">
        <Select
          value={selectedOfficeId || 'all'}
          onValueChange={(val) => setSelectedOfficeId(val === 'all' ? '' : val)}
        >
          <SelectTrigger className="w-full" title={displayOffice}>
            <SelectValue placeholder="Все офисы">{displayOffice}</SelectValue>
          </SelectTrigger>
          <SelectContent className="min-w-72">
            <SelectItem value="all">
              <span className="font-semibold">Все офисы</span>
            </SelectItem>
            {offices.map((office) => (
              <SelectItem key={office.id} value={office.id}>
                <div className="flex flex-col">
                  <span className="font-semibold">{office.name}</span>
                  <span className="text-muted text-xs font-normal">{office.address}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-44">
        <Select
          value={selectedScope}
          onValueChange={(val) => setSelectedScope(val as BookingsScope)}
        >
          <SelectTrigger className="w-full" title={displayScope}>
            <div className="flex min-w-0 items-center gap-2">
              <CalendarIcon className="text-muted size-4 shrink-0 stroke-3" />
              <span className="min-w-0 truncate text-left">{displayScope}</span>
            </div>
          </SelectTrigger>
          <SelectContent className="min-w-44">
            {SCOPE_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className="font-semibold">{opt.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
