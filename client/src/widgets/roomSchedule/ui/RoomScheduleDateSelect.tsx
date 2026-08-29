import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { type FC, useState } from 'react'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { formatDateToYMD, isBookingDateAllowed, parseYMDToDate } from '@/shared/lib/date'
import { useUpdateSearchParams } from '@/shared/model'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'

interface RoomScheduleDateSelectProps {
  date: string
}

export const RoomScheduleDateSelect: FC<RoomScheduleDateSelectProps> = ({ date }) => {
  const [open, setOpen] = useState(false)
  const selectedDate = date ? parseYMDToDate(date) : new Date()
  const [month, setMonth] = useState<Date>(selectedDate)
  const { updateSearchParams } = useUpdateSearchParams()

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setMonth(selectedDate)
    }

    setOpen(isOpen)
  }

  const handleSelectDate = (newDate?: Date) => {
    if (newDate) {
      updateSearchParams(SEARCH_PARAM_KEYS.DATE, formatDateToYMD(newDate))
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="text-muted size-4 stroke-3" />
          <span>Выбрать дату</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          locale={ru}
          selected={selectedDate}
          month={month}
          onMonthChange={setMonth}
          defaultMonth={selectedDate}
          onSelect={handleSelectDate}
          disabled={(d) => !isBookingDateAllowed(d)}
          showOutsideDays={false}
        />
      </PopoverContent>
    </Popover>
  )
}
