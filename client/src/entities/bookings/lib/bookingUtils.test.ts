import { describe, expect, it } from 'vitest'
import type { Booking } from '../model/types'
import { getBookingCardDetails } from './bookingUtils'

describe('bookingUtils', () => {
  const mockBooking: Booking = {
    id: 'booking-1',
    roomId: 'room-everest',
    userId: 'user-konstantin',
    title: 'Планирование спринта',
    comment: 'Обсуждаем задачи',
    startsAt: '2026-10-24T12:00:00.000Z',
    endsAt: '2026-10-24T13:00:00.000Z',
    createdAt: '2026-10-20T10:00:00.000Z',
    room: {
      id: 'room-everest',
      officeId: 'office-moscow',
      name: 'Эверест',
      floor: 4,
      capacity: 12,
      features: [],
    },
    office: {
      id: 'office-moscow',
      name: 'Офис Москва',
      address: 'Москва, ул. Лесная, 7',
      timezone: 'Europe/Moscow',
    },
    owner: {
      id: 'user-konstantin',
      login: 'kkuznetsov',
      displayName: 'Константин Кузнецов',
      email: 'kkuznetsov@example.test',
      avatarUrl: null,
      initials: 'КК',
    },
  }

  it('correctly extracts month in uppercase, day number, and formatted time range', () => {
    const details = getBookingCardDetails(mockBooking)

    expect(details.monthUpper).toBe('ОКТЯБРЬ')
    expect(details.dayNumber).toBe('24')
    expect(details.timeRange).toContain('MSK')
  })
})
