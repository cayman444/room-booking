import { Users } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'
import { DEFAULT_CAPACITY_OPTIONS } from '../model/consts'

interface FilterCapacityProps {
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function FilterCapacity({ value, onChange, disabled }: FilterCapacityProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-subtle text-xs font-bold tracking-wider uppercase">Вместимость</span>
      <Select value={value || 'all'} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="min-w-40">
          <div className="flex items-center gap-2">
            <Users className="text-muted size-4 stroke-3" />
            <SelectValue placeholder="Любая" />
          </div>
        </SelectTrigger>
        <SelectContent className="min-w-40">
          {DEFAULT_CAPACITY_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
