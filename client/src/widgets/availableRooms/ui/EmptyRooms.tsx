import { SearchX } from 'lucide-react'
import { Button } from '@/shared/ui'

interface EmptyRoomsProps {
  onResetFilters: () => void
}

export function EmptyRooms({ onResetFilters }: EmptyRoomsProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-10">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="bg-border text-subtle flex size-30 items-center justify-center rounded-full">
          <SearchX className="size-14 stroke-1" />
        </div>
        <div className="space-y-3">
          <h3 className="text-foreground text-[22px] font-extrabold">Нет доступных переговорных</h3>
          <p className="text-muted text-sm">
            Попробуйте изменить параметры фильтрации или выбрать другой офис
          </p>
        </div>
        <Button size={'lg'} onClick={onResetFilters}>
          Сбросить фильтры
        </Button>
      </div>
    </div>
  )
}
