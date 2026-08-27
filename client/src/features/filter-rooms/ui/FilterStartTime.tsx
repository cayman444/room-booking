import { Clock } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'
import { DEFAULT_TIME_SLOTS } from '../model/consts'

interface FilterStartTimeProps {
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function FilterStartTime({ value, onChange, disabled }: FilterStartTimeProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-subtle text-xs font-bold tracking-wider uppercase">Время начала</span>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="min-w-36">
          <div className="flex items-center gap-2">
            <Clock className="text-muted size-4 stroke-3" />
            <SelectValue placeholder="--:--" />
          </div>
        </SelectTrigger>
        <SelectContent className="max-h-60 min-w-36">
          {DEFAULT_TIME_SLOTS.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
