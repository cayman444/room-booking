import { Clock, Users } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '@/shared/ui'
import type { Room } from '../model/types'

interface RoomCardProps {
  room: Room
}

export const RoomCard: FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-card border-border rounded-2xl border p-5">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h4 className="text-accent-foreground text-lg font-bold">{room.name}</h4>
          <div className="text-muted">{room.floor} этаж</div>
        </div>
        <div className="text-muted space-y-2">
          <div className="flex items-center gap-2">
            <Users className="size-4 stroke-3" />
            <p>Вместимость: до {room.capacity} человек</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 stroke-3" />
            <p>Занята до 15:30</p>
          </div>
        </div>
        <div className="bg-available-bg text-primary flex items-center gap-2 rounded-lg p-2.5 text-xs font-semibold">
          <span className="bg-primary size-1.5 rounded-full"></span>
          Доступно на выбранное время
        </div>
        <div className="grid grid-cols-2 items-center gap-3">
          <Button variant={'ghost'}>Подробнее</Button>
          <Button>Забронировать</Button>
        </div>
      </div>
    </div>
  )
}
