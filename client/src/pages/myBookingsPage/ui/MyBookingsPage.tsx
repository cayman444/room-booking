import { useState } from 'react'
import { MyBookingsFilters, MyBookingsList, useMyBookings } from '@/widgets/myBookings'
import { MyBookingsPageSkeleton } from './MyBookingsPageSkeleton'

export function MyBookingsPage() {
  const [selectedOfficeId, setSelectedOfficeId] = useState('')
  const { isLoading } = useMyBookings({ officeId: selectedOfficeId })

  if (isLoading) {
    return <MyBookingsPageSkeleton />
  }

  return (
    <div className="flex flex-1 flex-col gap-8 p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-foreground text-[28px] font-extrabold tracking-tight">
          Мои бронирования
        </h1>
        <MyBookingsFilters
          selectedOfficeId={selectedOfficeId}
          setSelectedOfficeId={setSelectedOfficeId}
        />
      </div>
      <MyBookingsList officeId={selectedOfficeId} />
    </div>
  )
}
