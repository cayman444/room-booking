import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'

export function useCancelBooking() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: async (bookingId: string) => {
      await apiClient.delete(`/bookings/${bookingId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
      queryClient.invalidateQueries({ queryKey: ['room-bookings'] })
    },
  })
}
