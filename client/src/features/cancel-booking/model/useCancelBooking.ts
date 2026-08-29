import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import { toast } from 'sonner'
import { type Booking, useCancelBooking as useCancelBookingMutation } from '@/entities/bookings'
import { getErrorMessage } from '@/shared/api'

interface UseCancelBookingParams {
  booking: Booking
  onClose: () => void
}

export const useCancelBooking = ({ booking, onClose }: UseCancelBookingParams) => {
  const cancelBookingMutation = useCancelBookingMutation()

  const startDate = parseISO(booking.startsAt)
  const endDate = parseISO(booking.endsAt)
  const dateFormatted = format(startDate, 'EEEE, d MMMM', { locale: ru })
  const capitalizedDate = dateFormatted[0].toUpperCase() + dateFormatted.slice(1)
  const timeFormatted = `${capitalizedDate}, ${format(startDate, 'HH:mm')} - ${format(endDate, 'HH:mm')}`

  const handleConfirmCancel = () => {
    cancelBookingMutation.mutate(booking.id, {
      onSuccess: () => {
        toast.success('Бронирование отменено', {
          description: `Бронирование "${booking.title}" успешно отменено`,
        })
        onClose()
      },
      onError: (error) => {
        toast.error('Не удалось отменить бронирование', {
          description: getErrorMessage(error, 'Попробуйте снова позже'),
        })
      },
    })
  }

  return {
    timeFormatted,
    isPending: cancelBookingMutation.isPending,
    handleConfirmCancel,
  }
}
