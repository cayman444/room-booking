import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Building2, Calendar, Loader2 } from 'lucide-react'
import type { FC } from 'react'
import { toast } from 'sonner'
import { type Booking, useCancelBooking } from '@/entities/bookings'
import { getErrorMessage } from '@/shared/api'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui'

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
  const cancelBookingMutation = useCancelBooking()

  if (!booking) return null

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
        onOpenChange(false)
      },
      onError: (error) => {
        toast.error('Не удалось отменить бронирование', {
          description: getErrorMessage(error, 'Попробуйте снова позже'),
        })
      },
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl p-8 sm:max-w-115">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-foreground text-xl font-bold">
            Отменить бронирование?
          </DialogTitle>
          <DialogDescription className="text-muted text-sm leading-relaxed font-normal">
            Это действие нельзя будет отменить. Освободившееся время станет доступно другим
            сотрудникам.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-muted/40 border-border/50 my-2 flex flex-col gap-2 rounded-2xl border p-4.5">
          <h4 className="text-foreground text-sm font-bold sm:text-base">{booking.title}</h4>
          <div className="text-muted flex flex-col gap-1.5 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-medium">
              <Building2 className="text-muted size-4 shrink-0" />
              <span>
                Комната '{booking.room.name}', {booking.room.floor} этаж
              </span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Calendar className="text-muted size-4 shrink-0" />
              <span>{timeFormatted}</span>
            </div>
          </div>
        </div>
        <DialogFooter className="mt-2 flex flex-row items-center gap-3 sm:justify-between">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1 font-semibold"
            onClick={() => onOpenChange(false)}
            disabled={cancelBookingMutation.isPending}
          >
            Нет, оставить
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="lg"
            className="flex-1 bg-[#EE4B42] font-semibold hover:bg-[#D43D35]"
            onClick={handleConfirmCancel}
            disabled={cancelBookingMutation.isPending}
          >
            {cancelBookingMutation.isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
            Да, отменить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
