import { OfficeSelector } from '@/features/select-office'
import { AvailableRooms } from '@/widgets/availableRooms'

export function RoomsPage() {
  return (
    <div className="flex flex-col">
      <OfficeSelector />
      <AvailableRooms />
    </div>
  )
}
