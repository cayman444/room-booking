import { toast } from 'sonner'
import { useCreateBooking } from '@/entities/bookings'
import type { Room } from '@/entities/rooms'
import { getErrorMessage } from '@/shared/api'
import { calculateIntervalIso, formatBookingToastDescription } from '@/shared/lib/date'
import type { BookRoomFormValues } from './bookRoom.schema'

export const useCreateBook = ({ room, onClose }: { room: Room; onClose: () => void }) => {
  const createBookingMutation = useCreateBooking()

  const handleCreateBook = (values: BookRoomFormValues) => {
    const { from, to } = calculateIntervalIso(values.date, values.startTime, values.duration)

    if (!from || !to) {
      toast.error('Бронирование не создано', {
        description: 'Некорректный интервал времени',
      })

      return
    }

    createBookingMutation.mutate(
      {
        roomId: room.id,
        title: values.title.trim(),
        comment: values.comment?.trim(),
        startsAt: from,
        endsAt: to,
      },
      {
        onSuccess: () => {
          toast.success('Бронирование создано', {
            description: formatBookingToastDescription(
              room.name,
              values.date,
              values.startTime,
              values.duration,
              room.office.timezone,
            ),
          })

          onClose()
        },
        onError: (error: unknown) => {
          toast.error('Бронирование не создано', {
            description: getErrorMessage(error, 'Произошла ошибка при бронировании'),
          })
        },
      },
    )
  }

  return {
    isSubmitting: createBookingMutation.isPending,
    serverError: createBookingMutation.isError
      ? getErrorMessage(createBookingMutation.error)
      : null,
    handleCreateBook,
  }
}
