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
      <DialogContent className="max-w-110 gap-6 text-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-red-100/70 text-red-500">
            <AlertTriangle className="size-7 stroke-2" />
          </div>
          <DialogHeader className="space-y-2 text-center">
            <DialogTitle className="text-foreground text-center text-xl font-extrabold">
              Время уже занято
            </DialogTitle>
            <DialogDescription className="text-muted text-center text-sm font-normal">
              Выбранный интервал был забронирован другим сотрудником. Расписание обновлено.
            </DialogDescription>
          </DialogHeader>
        </div>
        <Button onClick={onClose} className="w-full py-2.5 text-base font-bold">
          Выбрать другое время
        </Button>
      </DialogContent>
    </Dialog>
  )
}
