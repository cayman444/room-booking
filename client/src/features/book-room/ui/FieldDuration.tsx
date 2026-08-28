import type { FC } from 'react'
import { DEFAULT_DURATION_OPTIONS } from '@/shared/lib/date/consts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui'

interface FieldDurationProps {
  value: number
  onChange: (duration: number) => void
  startTime?: string
  error?: string
}

export const FieldDuration: FC<FieldDurationProps> = ({ value, onChange, error }) => {
  const stringValue = String(value)

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-foreground block text-sm font-semibold select-none">
        Продолжительность
      </label>
      <Select value={stringValue} onValueChange={(val) => onChange(Number(val))}>
        <SelectTrigger
          className={
            error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''
          }
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {DEFAULT_DURATION_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={String(option.value)}>
              {option.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-destructive text-xs font-medium">{error}</p>}
    </div>
  )
}
