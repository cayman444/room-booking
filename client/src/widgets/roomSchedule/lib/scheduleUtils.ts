import { differenceInMinutes, format, parseISO, setHours, startOfDay } from 'date-fns'
import type { RoomBooking } from '@/entities/rooms'
import { WORK_DAY_START_HOUR, WORK_DAY_TOTAL_MINUTES } from '@/shared/lib/date/consts'

export function getBookingCardInfo(booking: RoomBooking, isMyBooking: boolean) {
  const startTime = format(parseISO(booking.startsAt), 'HH:mm')
  const endTime = format(parseISO(booking.endsAt), 'HH:mm')
  const timeRange = `${startTime}–${endTime}`

  const label = isMyBooking ? booking.title : 'Занято'
  const fullTitle = `${label} (${timeRange})`

  return { label, timeRange, fullTitle }
}

export function getGridRowSpan(startsAt: string, endsAt: string) {
  const start = parseISO(startsAt)
  const end = parseISO(endsAt)

  const dayStart = setHours(startOfDay(start), WORK_DAY_START_HOUR)

  const startOffset = Math.max(0, differenceInMinutes(start, dayStart))
  const endOffset = Math.min(WORK_DAY_TOTAL_MINUTES, differenceInMinutes(end, dayStart))

  const startRow = Math.floor(startOffset / 15) + 1
  const endRow = Math.ceil(endOffset / 15) + 1

  return `${startRow} / ${endRow}`
}
