import { AlertTriangle } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '@/shared/ui'

interface RoomScheduleErrorProps {
  onRetry: () => void
}

export const RoomScheduleError: FC<RoomScheduleErrorProps> = ({ onRetry }) => {
  return (
    <div className="bg-card border-border rounded-2xl border p-8">
      <div className="flex flex-col items-center justify-center gap-6 py-17 text-center">
        <div className="bg-occupied-bg text-destructive flex size-30 items-center justify-center rounded-full">
          <AlertTriangle className="size-14 stroke-1" />
        </div>
        <div className="space-y-3">
          <h3 className="text-foreground text-[22px] font-extrabold">
            Не удалось загрузить расписание
          </h3>
          <p className="text-muted mx-auto max-w-sm text-sm">
            Произошла ошибка при загрузке расписания переговорной
          </p>
        </div>
        <Button size="lg" onClick={onRetry}>
          Попробовать снова
        </Button>
      </div>
    </div>
  )
}
