import type { FC } from 'react'
import { useOffices } from '@/entities/office'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

interface MyBookingsFilterProps {
  selectedOfficeId: string
  setSelectedOfficeId: (officeId: string) => void
}

export const MyBookingsFilters: FC<MyBookingsFilterProps> = ({
  selectedOfficeId,
  setSelectedOfficeId,
}) => {
  const { data: offices = [] } = useOffices()
  const selectedOffice = offices.find((o) => o.id === selectedOfficeId)
  const displayOffice = selectedOffice ? selectedOffice.name : 'Все офисы'

  return (
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
  )
}
