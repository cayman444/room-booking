import { type FC, useState } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { BookingCard } from '@/entities/bookings'
import { CancelBookingModal, useCancelBookingModal } from '@/features/cancel-booking'
import { useMyBookings } from '../model/useMyBookings'
import { MyBookingsEmpty } from './MyBookingsEmpty'
import { MyBookingsError } from './MyBookingsError'
import { MyBookingsTabs } from './MyBookingsTabs'

interface MyBookingsListProps {
  officeId: string
}

export const MyBookingsList: FC<MyBookingsListProps> = ({ officeId }) => {
  const [tabScope, setTabScope] = useState<BookingsScope>('upcoming')
  const { bookings, upcomingCount, isError, refetch } = useMyBookings({
    officeId,
    scope: tabScope,
  })
  const { isOpen, selectedBooking, openCancelModal, handleOpenChange } = useCancelBookingModal()

  return (
    <div className="flex flex-1 flex-col gap-8">
      <MyBookingsTabs tabScope={tabScope} setTabScope={setTabScope} upcomingCount={upcomingCount} />
      {isError ? (
        <MyBookingsError onRetry={refetch} />
      ) : bookings.length === 0 ? (
        <MyBookingsEmpty scope={tabScope} />
      ) : (
        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onCancel={openCancelModal}
              showCancelButton={tabScope === 'upcoming'}
            />
          ))}
        </div>
      )}
      <CancelBookingModal
        isOpen={isOpen}
        booking={selectedBooking}
        onOpenChange={handleOpenChange}
      />
    </div>
  )
}
