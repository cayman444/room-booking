import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { Booking, CreateBookingDto } from '../model/types'

export function useCreateBooking() {
  const queryClient = useQueryClient()

  return useMutation<Booking, Error, CreateBookingDto>({
    mutationFn: (data: CreateBookingDto) =>
      apiClient.post<Booking>('/bookings', data).then((res) => res.data),
    onSuccess: (newBooking) => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      queryClient.invalidateQueries({ queryKey: ['room', newBooking.roomId] })
      queryClient.invalidateQueries({ queryKey: ['room-bookings', newBooking.roomId] })
    },
  })
}
