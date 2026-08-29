import { Calendar, DoorOpen, Loader2 } from 'lucide-react'
import type { FC } from 'react'
import type { Booking } from '@/entities/bookings'
import { Button } from '@/shared/ui'
import { useCancelBooking } from '../model/useCancelBooking'

interface CancelBookingProps {
  booking: Booking
  onClose: () => void
}

export const CancelBooking: FC<CancelBookingProps> = ({ booking, onClose }) => {
  const { timeFormatted, isPending, handleConfirmCancel } = useCancelBooking({
    booking,
    onClose,
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-background flex flex-col gap-3 rounded-2xl p-4">
        <h4 className="text-foreground font-bold">{booking.title}</h4>
        <div className="text-muted flex flex-col gap-1.5 text-sm">
          <div className="flex items-center gap-2 font-medium">
            <DoorOpen className="text-muted size-4 stroke-3" />
            <span>
              Комната '{booking.room.name}', {booking.room.floor} этаж
            </span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Calendar className="text-muted size-4 stroke-3" />
            <span>{timeFormatted}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="flex-1 font-semibold"
          onClick={onClose}
          disabled={isPending}
        >
          Нет, оставить
        </Button>
        <Button
          type="button"
          variant="destructive"
          size="lg"
          onClick={handleConfirmCancel}
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
          Да, отменить
        </Button>
      </div>
    </div>
  )
}
