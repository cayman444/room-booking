import { Calendar } from 'lucide-react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES_PATHS } from '@/shared/config/routes'
import { Button } from '@/shared/ui'

interface MyBookingsEmptyProps {
  scope: 'upcoming' | 'past' | 'all'
}

export const MyBookingsEmpty: FC<MyBookingsEmptyProps> = ({ scope }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center">
      <div className="bg-primary/15 text-primary flex size-30 items-center justify-center rounded-full">
        <Calendar className="size-12 stroke-2" />
      </div>
      <div className="max-w-md space-y-2">
        <h3 className="text-foreground text-[22px] font-bold">Нет бронирований</h3>
        <p className="text-muted text-sm leading-relaxed">
          {scope === 'upcoming'
            ? 'У вас пока нет предстоящих бронирований. Перейдите в раздел переговорных, чтобы забронировать комнату.'
            : 'У вас пока нет прошедших бронирований.'}
        </p>
      </div>
      {scope === 'upcoming' && (
        <Button asChild size="lg">
          <Link to={ROUTES_PATHS.ROOMS}>Перейти к переговорным</Link>
        </Button>
      )}
    </div>
  )
}
