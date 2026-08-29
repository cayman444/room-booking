import { CalendarIcon } from 'lucide-react'
import type { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { type Room, useRoomBookings } from '@/entities/rooms'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { calculateIntervalIso, formatDateToYMD } from '@/shared/lib/date'
import { SCHEDULE_HOURS, WORK_DAY_TOTAL_MINUTES } from '@/shared/lib/date/consts'
import { Button } from '@/shared/ui'

interface RoomScheduleProps {
  room: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get(SEARCH_PARAM_KEYS.DATE) || formatDateToYMD(new Date())

  const { from, to } = calculateIntervalIso(date, SCHEDULE_HOURS[0], WORK_DAY_TOTAL_MINUTES)
  useRoomBookings(room.id, { from, to })

  return (
    <div className="bg-card border-border rounded-2xl border p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-accent-foreground text-[20px] font-extrabold">
              Расписание на день
            </h2>
            <p className="text-muted text-sm">Дата</p>
          </div>
          <Button variant={'outline'}>
            <div className="flex items-center gap-2">
              <CalendarIcon className="text-muted size-4 stroke-3" />
              <span>Выбрать дату</span>
            </div>
          </Button>
        </div>
        <div className="flex flex-col">
          {SCHEDULE_HOURS.map((hour) => (
            <div key={hour}>{hour}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
