import { Package, PenLine, Tv, Users, Video } from 'lucide-react'
import type { FC, ReactNode } from 'react'
import type { Room, RoomFeaturesCode } from '../model/types'

interface RoomInfoProps {
  room: Room
}

const FEATURE_ICONS: Record<RoomFeaturesCode, ReactNode> = {
  display: <Tv className="text-primary size-5 shrink-0" />,
  whiteboard: <PenLine className="text-primary size-5 shrink-0" />,
  video: <Video className="text-primary size-5 shrink-0" />,
}

export const RoomInfo: FC<RoomInfoProps> = ({ room }) => {
  const splittedAddress = room.office.address.split(',')
  const formattedAddress = splittedAddress.length
    ? splittedAddress.slice(1).join(',')
    : room.office.address

  return (
    <div className="bg-card border-border flex flex-col rounded-2xl border p-6">
      <h1 className="text-foreground text-2xl font-extrabold tracking-tight">{room.name}</h1>
      <p className="text-muted mt-2 text-sm">
        {room.office.name} · {formattedAddress}
      </p>
      <hr className="border-border my-5" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Users className="text-primary size-5 shrink-0" />
          <span className="text-foreground text-sm font-medium">
            Вместимость: до {room.capacity} человек
          </span>
        </div>
        {room.features?.map((feature) => (
          <div key={feature.code} className="flex items-center gap-3">
            {FEATURE_ICONS[feature.code] || <Package className="text-primary size-5 shrink-0" />}
            <span className="text-foreground text-sm font-medium">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
