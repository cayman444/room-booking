import type { FC } from 'react'
import type { Room } from '@/entities/rooms'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui'
import { BookRoom } from './BookRoom'

interface BookRoomModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  currentRoom?: Room | null
}

export const BookRoomModal: FC<BookRoomModalProps> = ({ isOpen, currentRoom, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="border-border border-b pb-5">
          <DialogTitle>Новое бронирование</DialogTitle>
          {currentRoom && (
            <DialogDescription className="text-muted text-sm font-normal">
              Переговорная: <span className="text-primary font-bold">{currentRoom.name}</span> (
              {currentRoom.office.name}, {currentRoom.floor} этаж)
            </DialogDescription>
          )}
        </DialogHeader>
        {currentRoom && <BookRoom room={currentRoom} onClose={() => onOpenChange(false)} />}
      </DialogContent>
    </Dialog>
  )
}
