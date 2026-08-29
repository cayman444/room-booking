import type { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRoomBookings } from '@/entities/rooms'
import { useMe } from '@/entities/user'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { calculateIntervalIso, formatDateToYMD, getGridRowSpan } from '@/shared/lib/date'
import { SCHEDULE_HOURS, WORK_DAY_TOTAL_MINUTES } from '@/shared/lib/date/consts'
import { cn } from '@/shared/lib/utils'

interface ScheduleListProps {
  roomId: string
}

export const ScheduleList: FC<ScheduleListProps> = ({ roomId }) => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get(SEARCH_PARAM_KEYS.DATE) || formatDateToYMD(new Date())

  const { data: currentUser } = useMe()
  const { from, to } = calculateIntervalIso(date, SCHEDULE_HOURS[0], WORK_DAY_TOTAL_MINUTES)
  const { data: bookings = [], isLoading } = useRoomBookings(roomId, { from, to })

  if (isLoading) {
    return <div className="text-muted py-8 text-center text-sm">Загрузка расписания...</div>
  }

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

          return (
            <div
              key={booking.id}
              style={{
                gridRow: getGridRowSpan(booking.startsAt, booking.endsAt),
                gridColumn: '1 / -1',
              }}
              className={cn(
                'z-10 m-0.5 flex items-center rounded-xl px-4 py-1 text-sm font-medium transition-all',
                isMyBooking
                  ? 'bg-primary/10 border-primary text-primary border'
                  : 'bg-muted/70 text-foreground border-border/40 border',
              )}
            >
              <span className="truncate">{isMyBooking ? booking.title : 'Занято'}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
