import { useState } from 'react'
import type { Room } from '@/entities/rooms'

export function useBookRoomModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const openBookModal = (room: Room) => {
    setSelectedRoom(room)
    setIsOpen(true)
  }

  const closeBookModal = () => {
    setIsOpen(false)
    setSelectedRoom(null)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setSelectedRoom(null)
    }
  }

  return {
    isOpen,
    selectedRoom,
    openBookModal,
    closeBookModal,
    handleOpenChange,
  }
}
