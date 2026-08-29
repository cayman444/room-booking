import type { FC } from 'react'
import { useMyBookings } from '../model/useMyBookings'

export const MyBookingsList: FC = () => {
  const { bookings } = useMyBookings()

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
