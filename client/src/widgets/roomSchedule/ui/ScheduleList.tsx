import type { FC } from 'react'
import { type RoomBooking } from '@/entities/rooms'
import { type User } from '@/entities/user'
import { SCHEDULE_HOURS } from '@/shared/lib/date/consts'
import { getBookingCardInfo } from '../lib/scheduleUtils'
import { ScheduleItem } from './ScheduleItem'

interface ScheduleListProps {
  bookings: RoomBooking[]
  currentUser?: User
}

export const ScheduleList: FC<ScheduleListProps> = ({ bookings, currentUser }) => {
  return (
    <div className="mt-2.5 grid grid-cols-[60px_1fr] select-none">
      <div className="grid grid-rows-[repeat(44,12px)] text-sm">
        {SCHEDULE_HOURS.map((hour, idx) => (
          <span
            key={hour}
            className="text-muted -translate-y-2.5 font-normal"
            style={{ gridRow: `${idx * 4 + 1}` }}
          >
            {hour}
          </span>
        ))}
      </div>
      <div className="border-border grid grid-rows-[repeat(44,12px)] border-t">
        {SCHEDULE_HOURS.slice(0, -1).map((_, idx) => (
          <div
            key={idx}
            className="border-border pointer-events-none border-b"
            style={{
              gridRow: `${idx * 4 + 1} / span 4`,
              gridColumn: '1 / -1',
            }}
          />
        ))}
        {bookings.map((booking) => {
          const isMyBooking =
            booking.userId === currentUser?.id || booking.owner?.id === currentUser?.id
          const { label, fullTitle } = getBookingCardInfo(booking, isMyBooking)

          return (
            <ScheduleItem
              key={booking.id}
              title={fullTitle}
              label={label}
              startsAt={booking.startsAt}
              endsAt={booking.endsAt}
              isMyBooking={isMyBooking}
            />
          )
        })}
      </div>
    </div>
  )
}
