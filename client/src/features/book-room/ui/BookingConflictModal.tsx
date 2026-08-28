import { AlertTriangle } from 'lucide-react'
import type { FC } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui'

interface BookingConflictModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BookingConflictModal: FC<BookingConflictModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex max-w-120 flex-col gap-6 text-center">
        <DialogHeader className="flex">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-occupied-bg text-destructive flex size-16 items-center justify-center rounded-full">
              <AlertTriangle className="size-8 stroke-2" />
            </div>
            <DialogTitle className="text-foreground text-[22px] font-extrabold">
              Время уже занято
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted mx-auto max-w-100 text-center text-sm font-normal">
            Выбранный интервал был забронирован другим сотрудником. Расписание обновлено.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose}>Выбрать другое время</Button>
      </DialogContent>
    </Dialog>
  )
}
