import { Building } from 'lucide-react'

export function EmptyNoOffice() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-10">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="bg-available-bg text-primary flex size-30 items-center justify-center rounded-full">
          <Building className="size-14 stroke-1" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-foreground text-[22px] font-extrabold">Выберите офис</h3>
          <p className="text-muted max-w-md text-sm">
            Для просмотра доступных переговорных сначала выберите офис из списка выше
          </p>
        </div>
      </div>
    </div>
  )
}
