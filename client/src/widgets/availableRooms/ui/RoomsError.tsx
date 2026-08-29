import { AlertTriangle } from 'lucide-react'
import { Button } from '@/shared/ui'

interface RoomsErrorProps {
  message?: string
  onRetry: () => void
}

export function RoomsError({ message, onRetry }: RoomsErrorProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-10">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="bg-occupied-bg text-destructive flex size-30 items-center justify-center rounded-full">
          <AlertTriangle className="size-14 stroke-1" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-foreground text-[22px] font-extrabold">
            Не удалось загрузить данные
          </h3>
          <p className="text-muted text-sm">
            {message || 'Произошла ошибка при загрузке списка переговорных'}
          </p>
        </div>
        <Button onClick={onRetry} size="lg">
          Попробовать снова
        </Button>
      </div>
    </div>
  )
}
