import { RoomFilters } from '@/features/filter-rooms'
import { OfficeSelector } from '@/features/select-office'
import { AvailableRooms } from '@/widgets/availableRooms'

export function RoomsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <OfficeSelector />
      <RoomFilters />
      <AvailableRooms />
    </div>
  )
}
