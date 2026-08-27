import { addDays, subDays } from 'date-fns'
import { describe, expect, it } from 'vitest'
import {
  calculateIntervalIso,
  formatDateDisplay,
  formatDateToYMD,
  isBookingDateAllowed,
  parseYMDToDate,
} from './dateUtils'

describe('dateUtils', () => {
  it('formatDateToYMD formats date to YYYY-MM-DD', () => {
    const testDate = new Date(2026, 9, 24)
    expect(formatDateToYMD(testDate)).toBe('2026-10-24')
  })

  it('parseYMDToDate correctly parses YYYY-MM-DD', () => {
    const parsed = parseYMDToDate('2026-10-24')
    expect(parsed.getFullYear()).toBe(2026)
    expect(parsed.getMonth()).toBe(9)
    expect(parsed.getDate()).toBe(24)
  })

  it('formatDateDisplay formats date as "24 Октября, Сб"', () => {
    const testDate = new Date(2026, 9, 24)
    expect(formatDateDisplay(testDate)).toBe('24 Октября, Сб')
  })

  it('calculateIntervalIso computes ISO start and end timestamps', () => {
    const result = calculateIntervalIso('2026-10-24', '15:00', 60)
    expect(result.from).toBeDefined()
    expect(result.to).toBeDefined()

    const fromDate = new Date(result.from!)
    const toDate = new Date(result.to!)
    const diffMinutes = (toDate.getTime() - fromDate.getTime()) / (1000 * 60)
    expect(diffMinutes).toBe(60)
  })

  it('isBookingDateAllowed validates 30-day booking horizon', () => {
    const today = new Date()
    const pastDate = subDays(today, 1)
    const withinLimit = addDays(today, 15)
    const beyondLimit = addDays(today, 35)

    expect(isBookingDateAllowed(today)).toBe(true)
    expect(isBookingDateAllowed(withinLimit)).toBe(true)
    expect(isBookingDateAllowed(pastDate)).toBe(false)
    expect(isBookingDateAllowed(beyondLimit)).toBe(false)
  })
})
