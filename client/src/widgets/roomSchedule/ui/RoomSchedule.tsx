import { CalendarIcon } from 'lucide-react'
import type { FC } from 'react'
import { type Room } from '@/entities/rooms'
import { Button } from '@/shared/ui'
import { ScheduleList } from './ScheduleList'

interface RoomScheduleProps {
  room: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
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
        <ScheduleList roomId={room.id} />
      </div>
    </div>
  )
}
