import { Calendar as CalendarIcon } from 'lucide-react'

interface FilterDateProps {
  value?: string
  onClick?: () => void
  disabled?: boolean
}

export function FilterDate({ value, onClick, disabled }: FilterDateProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-subtle text-xs font-bold tracking-wider uppercase">Дата</span>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="border-border bg-card text-foreground focus:border-primary focus:ring-primary/20 flex h-10 min-w-44 cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors outline-none hover:border-slate-300 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CalendarIcon className="text-muted size-4 stroke-3" />
        <span>{value || 'Выберите дату'}</span>
      </button>
    </div>
  )
}
