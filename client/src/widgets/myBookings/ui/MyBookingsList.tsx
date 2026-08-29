import type { FC } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { useMyBookings } from '../model/useMyBookings'

interface MyBookingsListProps {
  officeId: string
  scope: BookingsScope
}

export const MyBookingsList: FC<MyBookingsListProps> = ({ officeId, scope }) => {
  const { bookings } = useMyBookings({ officeId, scope })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {bookings.map((b) => (
          <div key={b.id}>Booking card</div>
        ))}
      </div>
    </div>
  )
}
