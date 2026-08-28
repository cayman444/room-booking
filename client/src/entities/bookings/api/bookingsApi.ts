import { apiClient } from '@/shared/api'
import type { Booking, CreateBookingDto } from '../model/types'

export const bookingsApi = {
  create: (data: CreateBookingDto): Promise<Booking> => {
    return apiClient.post<Booking>('/bookings', data).then((res) => res.data)
  },
  cancel: (bookingId: string): Promise<void> => {
    return apiClient.delete(`/bookings/${bookingId}`).then((res) => res.data)
  },
  listCurrentUser: (params?: {
    scope?: 'upcoming' | 'past' | 'all'
    officeId?: string
  }): Promise<Booking[]> => {
    return apiClient.get<Booking[]>('/bookings', { params }).then((res) => res.data)
  },
  listByRoom: (roomId: string, params?: { from?: string; to?: string }): Promise<Booking[]> => {
    return apiClient.get<Booking[]>(`/rooms/${roomId}/bookings`, { params }).then((res) => res.data)
  },
}
