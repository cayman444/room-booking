import { Clock } from 'lucide-react'
import type { FC } from 'react'
import { DEFAULT_TIME_SLOTS } from '@/shared/lib/date/consts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

interface FieldStartTimeProps {
  value: string
  onChange: (timeStr: string) => void
  error?: string
}

export const FieldStartTime: FC<FieldStartTimeProps> = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-muted block text-sm font-bold select-none">Время начала</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={
            error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''
          }
        >
          <div className="flex items-center gap-2">
            <Clock className="text-muted size-4 stroke-3" />
            <SelectValue placeholder="--:--" />
          </div>
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {DEFAULT_TIME_SLOTS.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-destructive text-xs font-semibold">{error}</p>}
    </div>
  )
}
