import {
  addDays,
  addMinutes,
  differenceInCalendarDays,
  differenceInMinutes,
  format,
  isBefore,
  parse,
  parseISO,
  setHours,
  startOfDay,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import {
  DURATION_LABELS,
  RU_MONTHS_GENITIVE,
  RU_WEEKDAYS_ON,
  RU_WEEKDAYS_SHORT,
  WORK_DAY_START_HOUR,
  WORK_DAY_TOTAL_MINUTES,
} from './consts'

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

  return {
    startDate,
    endDate,
    day: startDate.getDate(),
    month: RU_MONTHS_GENITIVE[startDate.getMonth()],
    weekday: RU_WEEKDAYS_ON[startDate.getDay()],
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
  const { weekday, day, month, startTime, endTime, durationText } = getBookingIntervalInfo(
    dateInput,
    startTimeStr,
    durationMinutes,
  )

  return `Бронирование на ${weekday}, ${day} ${month}, ${startTime} - ${endTime} (${durationText})`
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
  const { day, month, startTime, endTime } = getBookingIntervalInfo(
    dateInput,
    startTimeStr,
    durationMinutes,
  )

  const tzShort = formatTimezoneShort(timezone)
  const tzSuffix = tzShort ? ` ${tzShort}` : ''

  return `Комната ${roomName}, ${day} ${month.toLowerCase()}, ${startTime}–${endTime}${tzSuffix}`
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
