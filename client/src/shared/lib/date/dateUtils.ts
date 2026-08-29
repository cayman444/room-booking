import {
  addDays,
  addMinutes,
  differenceInCalendarDays,
  format,
  isBefore,
  parse,
  startOfDay,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import { DURATION_LABELS } from './consts'

export function formatDateToYMD(date: Date = new Date()): string {
  return format(date, 'yyyy-MM-dd')
}

export function parseYMDToDate(dateStr?: string): Date {
  if (!dateStr) return new Date()

  try {
    const parsed = parse(dateStr, 'yyyy-MM-dd', new Date())
    return isNaN(parsed.getTime()) ? new Date() : parsed
  } catch {
    return new Date()
  }
}

export function formatDateDisplay(dateInput: Date | string): string {
  const date = typeof dateInput === 'string' ? parseYMDToDate(dateInput) : dateInput
  const text = format(date, 'd MMMM, cccccc', { locale: ru })
  const parts = text.split(', ')

  if (parts.length === 2) {
    const weekday = parts[1][0].toUpperCase() + parts[1].slice(1)
    return `${parts[0]}, ${weekday}`
  }

  return text
}

export function formatDateDisplaySchedule(dateInput: Date | string): string {
  const date = typeof dateInput === 'string' ? parseYMDToDate(dateInput) : dateInput
  const formatted = format(date, 'EEEE, d MMMM', { locale: ru })

  return formatted[0].toUpperCase() + formatted.slice(1)
}

export function calculateIntervalIso(
  dateStr?: string,
  startTimeStr?: string,
  durationMinutes = 60,
): { from?: string; to?: string } {
  if (!dateStr || !startTimeStr) {
    return { from: undefined, to: undefined }
  }

  try {
    const fromDate = parse(`${dateStr} ${startTimeStr}`, 'yyyy-MM-dd HH:mm', new Date())
    if (isNaN(fromDate.getTime())) {
      return { from: undefined, to: undefined }
    }

    const toDate = addMinutes(fromDate, durationMinutes)

    return {
      from: fromDate.toISOString(),
      to: toDate.toISOString(),
    }
  } catch {
    return { from: undefined, to: undefined }
  }
}

export function getBookingIntervalInfo(
  dateInput: Date | string,
  startTimeStr: string,
  durationMinutes: number,
) {
  const date = typeof dateInput === 'string' ? parseYMDToDate(dateInput) : dateInput
  const dateStr = formatDateToYMD(date)

  const startDate = parse(`${dateStr} ${startTimeStr}`, 'yyyy-MM-dd HH:mm', new Date())
  const endDate = addMinutes(startDate, durationMinutes)

  const weekdayName = format(startDate, 'EEEE', { locale: ru })
  const weekday = weekdayName[0].toUpperCase() + weekdayName.slice(1)
  const formattedDayMonth = format(startDate, 'd MMMM', { locale: ru })

  return {
    startDate,
    endDate,
    day: startDate.getDate(),
    formattedDayMonth,
    weekday,
    startTime: startTimeStr,
    endTime: format(endDate, 'HH:mm'),
    durationText: DURATION_LABELS[durationMinutes.toString()] ?? `${durationMinutes} минут`,
  }
}

export function formatBookingSummary(
  dateInput: Date | string,
  startTimeStr: string,
  durationMinutes: number,
): string {
  const { weekday, formattedDayMonth, startTime, endTime, durationText } = getBookingIntervalInfo(
    dateInput,
    startTimeStr,
    durationMinutes,
  )

  return `Бронирование на ${weekday}, ${formattedDayMonth}, ${startTime} - ${endTime} (${durationText})`
}

export function formatTimezoneShort(timezone?: string): string {
  if (!timezone) return ''
  if (timezone.includes('Moscow')) return 'MSK'
  return timezone.split('/')[1] || timezone
}

export function formatBookingToastDescription(
  roomName: string,
  dateInput: Date | string,
  startTimeStr: string,
  durationMinutes: number,
  timezone?: string,
): string {
  const { formattedDayMonth, startTime, endTime } = getBookingIntervalInfo(
    dateInput,
    startTimeStr,
    durationMinutes,
  )

  const tzShort = formatTimezoneShort(timezone)
  const tzSuffix = tzShort ? ` ${tzShort}` : ''

  return `Комната ${roomName}, ${formattedDayMonth}, ${startTime}–${endTime}${tzSuffix}`
}

export function isBookingDateAllowed(date: Date, maxDaysAhead = 30): boolean {
  const today = startOfDay(new Date())
  const target = startOfDay(date)

  if (isBefore(target, today)) {
    return false
  }

  const diffDays = differenceInCalendarDays(target, today)
  return diffDays <= maxDaysAhead
}

export function getAvailableDatesList(daysAhead = 30): Date[] {
  const today = startOfDay(new Date())

  return Array.from({ length: daysAhead + 1 }).map((_, index) => addDays(today, index))
}
