import { useSearchParams } from 'react-router-dom'
import { RoomCard, useRooms } from '@/entities/rooms'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { EmptyNoOffice } from './EmptyNoOffice'
import { EmptyRooms } from './EmptyRooms'
import { RoomsError } from './RoomsError'
import { RoomsLoading } from './RoomsLoading'

export const AvailableRooms = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''
  const minCapacityStr = searchParams.get(SEARCH_PARAM_KEYS.MIN_CAPACITY)
  const minCapacity = minCapacityStr ? Number(minCapacityStr) : undefined

  const {
    data: rooms = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useRooms({
    officeId,
    minCapacity,
  })

  const handleResetFilters = () => {
    setSearchParams('')
  }

  if (!officeId) {
    return <EmptyNoOffice />
  }

  if (isLoading) {
    return <RoomsLoading />
  }

  if (isError) {
    return <RoomsError message={error?.message} onRetry={refetch} />
  }

  if (rooms.length === 0) {
    return <EmptyRooms onResetFilters={handleResetFilters} />
  }

  return (
    <div className="p-10">
      <h2 className="text-foreground mb-8 text-[22px] font-extrabold">
        Доступные переговорные в этом офисе
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}
