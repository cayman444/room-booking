import { useState } from 'react'
import type { Booking } from '@/entities/bookings'

export function useCancelBookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  const openCancelModal = (booking: Booking) => {
    setSelectedBooking(booking)
    setIsOpen(true)
  }

  const closeCancelModal = () => {
    setIsOpen(false)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  return {
    isOpen,
    selectedBooking,
    openCancelModal,
    closeCancelModal,
    handleOpenChange,
  }
}
