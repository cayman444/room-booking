import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import { formatTimezoneShort } from '@/shared/lib/date'
import type { Booking } from '../model/types'

export function getBookingCardDetails(booking: Booking) {
  const startDate = parseISO(booking.startsAt)
  const endDate = parseISO(booking.endsAt)

  const monthUpper = format(startDate, 'LLLL', { locale: ru }).toUpperCase()
  const dayNumber = format(startDate, 'd')

  const startTime = format(startDate, 'HH:mm')
  const endTime = format(endDate, 'HH:mm')
  const tzShort = formatTimezoneShort(booking.office.timezone)
  const timeRange = `${startTime} - ${endTime}${tzShort ? ` ${tzShort}` : ''}`

  return {
    monthUpper,
    dayNumber,
    timeRange,
  }
}
