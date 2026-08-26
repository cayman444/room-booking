import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

import { useSelectOffice } from '../model/useSelectOffice'
import { OfficeSelectorSkeleton } from './OfficeSelectorSkeleton'

export function OfficeSelector() {
  const { offices, isLoading, currentOfficeId, selectedOffice, officeTime, handleSelectOffice } =
    useSelectOffice()

  if (isLoading) {
    return <OfficeSelectorSkeleton />
  }

  return (
    <div className="border-border bg-card border-b px-10 py-6">
      <Select value={currentOfficeId} onValueChange={handleSelectOffice}>
        <SelectTrigger className="text-foreground [&>svg]:text-foreground h-auto w-fit gap-2 border-none bg-transparent p-0 text-lg font-bold tracking-tight shadow-none outline-none focus:border-transparent focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Выберите офис">
            {selectedOffice ? `${selectedOffice.name}` : 'Выберите офис'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="min-w-72">
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
      <div className="text-muted mt-1 flex items-center gap-2 text-sm font-normal">
        <span>{selectedOffice?.address || 'Адрес не выбран'}</span>
        <span>•</span>
        <span>Местное время: {officeTime}</span>
      </div>
    </div>
  )
}
