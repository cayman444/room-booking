import { apiClient } from '@/shared/api'
import type { Booking, CreateBookingDto } from '../model/types'

export const bookingsApi = {
  create: (data: CreateBookingDto): Promise<Booking> => {
    return apiClient.post<Booking>('/bookings', data)
  },
  cancel: (bookingId: string): Promise<void> => {
    return apiClient.delete<void>(`/bookings/${bookingId}`)
  },
  listCurrentUser: (params?: {
    scope?: 'upcoming' | 'past' | 'all'
    officeId?: string
  }): Promise<Booking[]> => {
    return apiClient.get<Booking[]>('/bookings', { params })
  },
  listByRoom: (roomId: string, params?: { from?: string; to?: string }): Promise<Booking[]> => {
    return apiClient.get<Booking[]>(`/rooms/${roomId}/bookings`, { params })
  },
}
