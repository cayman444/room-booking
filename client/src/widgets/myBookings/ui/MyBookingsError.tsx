import { AlertTriangle } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '@/shared/ui'

interface MyBookingsErrorProps {
  onRetry: () => void
}

export const MyBookingsError: FC<MyBookingsErrorProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center md:p-10">
      <div className="bg-occupied-bg text-destructive flex size-30 items-center justify-center rounded-full">
        <AlertTriangle className="size-14 stroke-1" />
      </div>
      <div className="max-w-md space-y-2">
        <h3 className="text-foreground text-[22px] font-extrabold">Не удалось загрузить данные</h3>
        <p className="text-muted text-sm leading-relaxed">
          Произошла ошибка при загрузке ваших бронирований
        </p>
      </div>
      <Button size="lg" onClick={onRetry}>
        Попробовать снова
      </Button>
    </div>
  )
}
