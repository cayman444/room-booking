import { Monitor, PenTool, Tv, Users, Video } from 'lucide-react'
import type { FC, ReactNode } from 'react'
import type { Room } from '../model/types'

interface RoomInfoProps {
  room?: Room
}

const FEATURE_ICONS: Record<string, ReactNode> = {
  display: <Tv className="text-primary size-5 shrink-0" />,
  monitor: <Monitor className="text-primary size-5 shrink-0" />,
  whiteboard: <PenTool className="text-primary size-5 shrink-0" />,
  video: <Video className="text-primary size-5 shrink-0" />,
}

export const RoomInfo: FC<RoomInfoProps> = ({ room }) => {
  if (!room) return null

  return (
    <div className="bg-card border-border flex flex-col rounded-[20px] border p-8 shadow-sm">
      <h1 className="text-foreground text-2xl font-extrabold tracking-tight">{room.name}</h1>
      <p className="text-muted mt-1 text-sm">
        {room.office.name} · {room.office.address} ({room.floor} этаж)
      </p>
      <hr className="border-border my-6" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Users className="text-primary size-5 shrink-0" />
          <span className="text-foreground text-sm font-medium">
            Вместимость: до {room.capacity} человек
          </span>
        </div>
        {room.features?.map((feature) => (
          <div key={feature.code} className="flex items-center gap-3">
            {FEATURE_ICONS[feature.code] || <Monitor className="text-primary size-5 shrink-0" />}
            <span className="text-foreground text-sm font-medium">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
