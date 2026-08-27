import {
  addDays,
  addMinutes,
  differenceInCalendarDays,
  format,
  isBefore,
  parse,
  startOfDay,
} from 'date-fns'
import { RU_MONTHS_GENITIVE, RU_WEEKDAYS_SHORT } from './consts'

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

  const day = date.getDate()
  const month = RU_MONTHS_GENITIVE[date.getMonth()]
  const weekday = RU_WEEKDAYS_SHORT[date.getDay()]

  return `${day} ${month}, ${weekday}`
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
