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

interface FieldDateProps {
  value: string
  onChange: (dateStr: string) => void
  error?: string
}

export function FieldDate({ value, onChange, error }: FieldDateProps) {
  const [open, setOpen] = useState(false)
  const selectedDate = value ? parseYMDToDate(value) : new Date()
  const [month, setMonth] = useState<Date>(selectedDate)
  const dateToDisplay = formatDateDisplay(selectedDate)

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setMonth(selectedDate)
    }
    setOpen(isOpen)
  }

  const handleSelectDate = (date?: Date) => {
    if (date) {
      onChange(formatDateToYMD(date))
      setOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-muted block text-sm font-bold select-none">Дата</span>
      <Select open={open} onOpenChange={handleOpenChange}>
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
            month={month}
            onMonthChange={setMonth}
            defaultMonth={selectedDate}
            onSelect={handleSelectDate}
            disabled={(date) => !isBookingDateAllowed(date)}
            showOutsideDays={false}
          />
        </SelectContent>
      </Select>
      {error && <p className="text-destructive text-xs font-semibold">{error}</p>}
    </div>
  )
}
