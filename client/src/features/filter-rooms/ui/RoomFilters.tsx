import { FilterCapacity } from './FilterCapacity'
import { FilterDate } from './FilterDate'
import { FilterDuration } from './FilterDuration'
import { FilterStartTime } from './FilterStartTime'

interface RoomFiltersProps {
  date?: string
  startTime?: string
  duration?: string
  capacity?: string
  onDateClick?: () => void
  onStartTimeChange?: (time: string) => void
  onDurationChange?: (duration: string) => void
  onCapacityChange?: (capacity: string) => void
  disabled?: boolean
}

export function RoomFilters({
  date,
  startTime,
  duration,
  capacity,
  onDateClick,
  onStartTimeChange,
  onDurationChange,
  onCapacityChange,
  disabled,
}: RoomFiltersProps) {
  return (
    <div className="border-border bg-card flex flex-wrap items-center gap-4 border-b px-10 py-5">
      <FilterDate value={date} onClick={onDateClick} disabled={disabled} />
      <FilterStartTime value={startTime} onChange={onStartTimeChange} disabled={disabled} />
      <FilterDuration value={duration} onChange={onDurationChange} disabled={disabled} />
      <FilterCapacity value={capacity} onChange={onCapacityChange} disabled={disabled} />
    </div>
  )
}
