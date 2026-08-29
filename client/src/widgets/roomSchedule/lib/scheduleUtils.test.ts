import { describe, expect, it } from 'vitest'
import type { RoomBooking } from '@/entities/rooms'
import { getBookingCardInfo, getGridRowSpan } from './scheduleUtils'

describe('scheduleUtils', () => {
  const mockBooking: RoomBooking = {
    id: 'booking-1',
    roomId: 'room-everest',
    userId: 'user-konstantin',
    title: 'Командный дейли',
    comment: null,
    startsAt: '2026-10-24T06:00:00.000Z',
    endsAt: '2026-10-24T07:00:00.000Z',
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

  it('shows meeting title for user own booking', () => {
    const info = getBookingCardInfo(mockBooking, true)
    expect(info.label).toBe('Командный дейли')
  })

  it('shows "Занято" for other user bookings', () => {
    const info = getBookingCardInfo(mockBooking, false)
    expect(info.label).toBe('Занято')
  })

  it('calculates grid row span string correctly', () => {
    const rowSpan = getGridRowSpan(mockBooking.startsAt, mockBooking.endsAt)
    expect(rowSpan).toBeDefined()
    expect(typeof rowSpan).toBe('string')
    expect(rowSpan).toContain('/')
  })
})
