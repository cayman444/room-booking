import { ru } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import {
  formatDateDisplay,
  formatDateToYMD,
  isBookingDateAllowed,
  parseYMDToDate,
} from '@/shared/lib/date'
import { Calendar, Select, SelectContent, SelectTrigger, SelectValue } from '@/shared/ui'

interface FilterDateProps {
  value?: string
  onChange?: (dateStr: string) => void
  disabled?: boolean
}

export function FilterDate({ value, onChange, disabled }: FilterDateProps) {
  const [open, setOpen] = useState(false)
  const selectedDate = value ? parseYMDToDate(value) : new Date()
  const dateToDisplay = formatDateDisplay(selectedDate)

  const handleSelectDate = (date?: Date) => {
    if (date) {
      onChange?.(formatDateToYMD(date))
      setOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-subtle text-xs font-bold tracking-wider uppercase">Дата</span>
      <Select open={open} onOpenChange={setOpen} disabled={disabled}>
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-muted size-4 stroke-3" />
            <SelectValue placeholder={dateToDisplay} />
          </div>
        </SelectTrigger>
        <SelectContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            locale={ru}
            selected={selectedDate}
            onSelect={handleSelectDate}
            disabled={(date) => !isBookingDateAllowed(date)}
          />
        </SelectContent>
      </Select>
    </div>
  )
}
