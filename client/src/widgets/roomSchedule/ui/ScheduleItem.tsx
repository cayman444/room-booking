import type { FC } from 'react'
import { cn } from '@/shared/lib/utils'
import { getGridRowSpan } from '../lib/scheduleUtils'

interface ScheduleItemProps {
  title: string
  label: string
  startsAt: string
  endsAt: string
  isMyBooking: boolean
}

export const ScheduleItem: FC<ScheduleItemProps> = ({
  label,
  title,
  isMyBooking,
  endsAt,
  startsAt,
}) => {
  return (
    <div
      title={title}
      style={{
        gridRow: getGridRowSpan(startsAt, endsAt),
        gridColumn: '1 / -1',
      }}
      className={cn(
        'z-10 m-0.5 flex items-center justify-between gap-2 overflow-hidden rounded-lg px-4 py-1 text-sm font-semibold transition-all',
        isMyBooking
          ? 'border-primary bg-available-bg text-available-fg border'
          : 'bg-accent text-foreground border-border border',
      )}
    >
      <span className="truncate">{label}</span>
    </div>
  )
}
