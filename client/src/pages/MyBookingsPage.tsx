import { useState } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { MyBookingsFilters, MyBookingsList } from '@/widgets/myBookings'

export function MyBookingsPage() {
  const [selectedOfficeId, setSelectedOfficeId] = useState('')
  const [selectedScope, setSelectedScope] = useState<BookingsScope>('all')

  return (
    <div className="flex flex-1 flex-col gap-8 p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground text-[28px] font-extrabold tracking-tight">
          Мои бронирования
        </h1>
        <MyBookingsFilters
          selectedOfficeId={selectedOfficeId}
          setSelectedOfficeId={setSelectedOfficeId}
          selectedScope={selectedScope}
          setSelectedScope={setSelectedScope}
        />
      </div>
      <MyBookingsList officeId={selectedOfficeId} scope={selectedScope} />
    </div>
  )
}
