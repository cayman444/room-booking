import { useSearchParams } from 'react-router-dom'
import { RoomCard, useRooms } from '@/entities/rooms'
import { SEARCH_PARAM_KEYS } from '@/shared/config'

export const AvailableRooms = () => {
  const [searchParams] = useSearchParams()
  const officeId = searchParams.get(SEARCH_PARAM_KEYS.OFFICE_ID) || ''

  const { data: rooms = [] } = useRooms({ officeId })

  // if (!officeId) {
  //   return <EmptyNoOffice />
  // }

  // if (isLoading) {
  //   return <RoomsSkeleton />
  // }

  // if (isError) {
  //   return <RoomsError onRetry={() => refetch()} />
  // }

  // if (rooms.length === 0) {
  //   return <RoomsEmpty />
  // }

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
