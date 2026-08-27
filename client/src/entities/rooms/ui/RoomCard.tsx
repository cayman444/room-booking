import { Clock, Users } from 'lucide-react'
import type { FC } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config'
import { Button } from '@/shared/ui'
import type { Room } from '../model/types'

interface RoomCardProps {
  room: Room
  onBook?: (roomId: string) => void
}

export const RoomCard: FC<RoomCardProps> = ({ room, onBook }) => {
  const isAvailable = room.available !== false

  return (
    <div className="bg-card border-border rounded-2xl border p-5">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h4 className="text-foreground text-lg font-bold">{room.name}</h4>
          <div className="text-muted text-sm">{room.floor} этаж</div>
        </div>
        <div className="text-muted space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Users className="size-4 stroke-3" />
            <p>Вместимость: до {room.capacity} человек</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 stroke-3" />
            <p>{isAvailable ? 'Свободна весь день' : 'Занята на выбранное время'}</p>
          </div>
        </div>
        {isAvailable ? (
          <div className="bg-available-bg text-available-fg flex items-center gap-2 rounded-lg p-2.5 text-xs font-semibold">
            <span className="bg-available-fg size-1.5 rounded-full" />
            Доступно на выбранное время
          </div>
        ) : (
          <div className="bg-border text-muted flex items-center gap-2 rounded-lg p-2.5 text-xs font-semibold">
            <span className="bg-subtle size-1.5 rounded-full" />
            Недоступно на выбранное время
          </div>
        )}
        <div className="grid grid-cols-2 items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to={generatePath(ROUTES_PATHS.ROOMS_DETAILS, { roomId: room.id })}>
              Подробнее
            </Link>
          </Button>
          <Button
            disabled={!isAvailable}
            onClick={() => onBook?.(room.id)}
            className={!isAvailable ? 'cursor-not-allowed opacity-50' : ''}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  )
}
