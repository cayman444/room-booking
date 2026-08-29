import { AlertTriangle } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '@/shared/ui'

interface RoomDetailPageErrorProps {
  onRetry: () => void
}

export const RoomDetailPageError: FC<RoomDetailPageErrorProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-10 text-center">
      <div className="bg-occupied-bg text-destructive flex size-30 items-center justify-center rounded-full">
        <AlertTriangle className="size-14 stroke-1" />
      </div>
      <div className="space-y-3">
        <h2 className="text-foreground text-xl font-bold">
          Не удалось загрузить данные переговорной
        </h2>
        <p className="text-muted mx-auto max-w-sm text-sm">
          Возможно, комната была удалена или возникли проблемы с подключением к сети
        </p>
      </div>
      <Button onClick={onRetry} size={'lg'}>
        Попробовать снова
      </Button>
    </div>
  )
}
