import { useMutation, useQueryClient } from '@tanstack/react-query'
import { bookingsApi } from '@/entities/bookings'
import type { Room } from '@/entities/rooms'
import { getErrorMessage } from '@/shared/api'
import { calculateIntervalIso } from '@/shared/lib/date'
import type { BookRoomFormValues } from './bookRoom.schema'

export const useCreateBook = ({ room, onClose }: { room: Room; onClose: () => void }) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (values: BookRoomFormValues) => {
      const { from, to } = calculateIntervalIso(values.date, values.startTime, values.duration)

      if (!from || !to) {
        throw new Error('Некорректный интервал времени')
      }

      return bookingsApi.create({
        roomId: room.id,
        title: values.title.trim(),
        comment: values.comment?.trim(),
        startsAt: from,
        endsAt: to,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
      queryClient.invalidateQueries({ queryKey: ['room', room.id] })
      onClose()
    },
  })

  return {
    mutation,
    isSubmitting: mutation.isPending,
    serverError: mutation.isError ? getErrorMessage(mutation.error) : null,
    handleCreateBook: mutation.mutate,
  }
}
