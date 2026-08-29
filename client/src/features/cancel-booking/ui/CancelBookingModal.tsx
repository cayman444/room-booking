import type { FC } from 'react'
import type { Booking } from '@/entities/bookings'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui'
import { CancelBooking } from './CancelBooking'

interface CancelBookingModalProps {
  isOpen: boolean
  booking: Booking | null
  onOpenChange: (open: boolean) => void
}

export const CancelBookingModal: FC<CancelBookingModalProps> = ({
  isOpen,
  booking,
  onOpenChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[20px] p-8 sm:max-w-120">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl font-extrabold">
            Отменить бронирование?
          </DialogTitle>
          <DialogDescription className="text-muted text-sm leading-relaxed">
            Это действие нельзя будет отменить. Освободившееся время станет доступно другим
            сотрудникам.
          </DialogDescription>
        </DialogHeader>
        {booking && <CancelBooking booking={booking} onClose={() => onOpenChange(false)} />}
      </DialogContent>
    </Dialog>
  )
}
