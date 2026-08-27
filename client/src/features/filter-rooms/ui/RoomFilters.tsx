import { useRoomFilters } from '../model/useRoomFilters'
import { FilterCapacity } from './FilterCapacity'
import { FilterDate } from './FilterDate'
import { FilterDuration } from './FilterDuration'
import { FilterStartTime } from './FilterStartTime'

export function RoomFilters() {
  const { officeId, startTime, duration, minCapacity, setStartTime, setDuration, setMinCapacity } =
    useRoomFilters()

  const isDisabled = !officeId

  return (
    <div className="border-border bg-card flex flex-wrap items-center gap-4 border-b px-10 py-5">
      <FilterDate onClick={() => {}} disabled={isDisabled} />
      <FilterStartTime value={startTime} onChange={setStartTime} disabled={isDisabled} />
      <FilterDuration value={duration} onChange={setDuration} disabled={isDisabled} />
      <FilterCapacity value={minCapacity} onChange={setMinCapacity} disabled={isDisabled} />
    </div>
  )
}
