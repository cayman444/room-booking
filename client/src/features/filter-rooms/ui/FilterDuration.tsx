import { DEFAULT_DURATION_OPTIONS } from '@/shared/lib/date/consts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

interface FilterDurationProps {
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function FilterDuration({ value, onChange, disabled }: FilterDurationProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-subtle text-xs font-bold tracking-wider uppercase">Длительность</span>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="min-w-36">
          <SelectValue placeholder="Выберите" />
        </SelectTrigger>
        <SelectContent className="min-w-36">
          {DEFAULT_DURATION_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
