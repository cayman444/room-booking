import { type FC, useState } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { useMyBookings } from '../model/useMyBookings'
import { MyBookingsTabs } from './MyBookingsTabs'

interface MyBookingsListProps {
  officeId: string
}

export const MyBookingsList: FC<MyBookingsListProps> = ({ officeId }) => {
  const [tabScope, setTabScope] = useState<BookingsScope>('upcoming')
  const { bookings, upcomingCount } = useMyBookings({ officeId, scope: tabScope })

  return (
    <div className="flex flex-col gap-8">
      <MyBookingsTabs tabScope={tabScope} setTabScope={setTabScope} upcomingCount={upcomingCount} />
      <div className="flex flex-col gap-4">
        {bookings.map((b) => (
          <div key={b.id}>Booking card</div>
        ))}
      </div>
    </div>
  )
}
