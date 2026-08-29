import { format, parseISO } from 'date-fns'
import type { RoomBooking } from '@/entities/rooms'

export function getBookingCardInfo(booking: RoomBooking, isMyBooking: boolean) {
  const startTime = format(parseISO(booking.startsAt), 'HH:mm')
  const endTime = format(parseISO(booking.endsAt), 'HH:mm')
  const timeRange = `${startTime}–${endTime}`

  const label = isMyBooking ? booking.title : 'Занято'
  const fullTitle = `${label} (${timeRange})`

  return { label, timeRange, fullTitle }
}
