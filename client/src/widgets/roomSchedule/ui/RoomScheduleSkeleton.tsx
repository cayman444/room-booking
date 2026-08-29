import type { FC } from 'react'
import { SCHEDULE_HOURS } from '@/shared/lib/date/consts'
import { Skeleton } from '@/shared/ui'

export const RoomScheduleSkeleton: FC = () => {
  return (
    <div className="bg-card border-border rounded-2xl border p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton className="h-7.5 w-50 rounded" />
            <Skeleton className="h-5 w-32 rounded" />
          </div>
          <Skeleton className="h-10 w-38 rounded-lg" />
        </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
