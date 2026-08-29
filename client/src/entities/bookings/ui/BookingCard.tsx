import { DoorOpen } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '@/shared/ui'
import { getBookingCardDetails } from '../lib/bookingUtils'
import type { Booking } from '../model/types'

interface BookingCardProps {
  booking: Booking
  onCancel?: (booking: Booking) => void
  showCancelButton?: boolean
}

export const BookingCard: FC<BookingCardProps> = ({
  booking,
  onCancel,
  showCancelButton = true,
}) => {
  const { monthUpper, dayNumber, timeRange } = getBookingCardDetails(booking)

  return (
    <div className="bg-card border-border flex flex-col flex-wrap justify-between gap-4 rounded-2xl border p-6 transition-all md:flex-row md:items-center">
      <div className="flex items-center gap-6">
        <div className="bg-background flex size-20 shrink-0 flex-col items-center justify-center rounded-xl p-3 select-none">
          <span className="text-subtle text-xs leading-none font-bold tracking-wider uppercase">
            {monthUpper}
          </span>
          <span className="text-foreground mt-1 text-2xl leading-none font-extrabold">
            {dayNumber}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground text-lg font-bold">{booking.title}</h3>
          <div className="text-muted flex flex-wrap items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1.5 font-semibold">
              <DoorOpen className="size-4 shrink-0 stroke-3" />
              <span className="text-primary">{booking.room.name}</span>
            </div>
            <span className="text-subtle">•</span>
            <span>{booking.room.floor} этаж</span>
            <span className="text-subtle">•</span>
            <span>{timeRange}</span>
          </div>
        </div>
      </div>
      {showCancelButton && onCancel && (
        <div className="flex shrink-0 items-center">
          <Button variant="destructiveOutline" onClick={() => onCancel(booking)}>
            Отменить
          </Button>
        </div>
      )}
    </div>
  )
}
