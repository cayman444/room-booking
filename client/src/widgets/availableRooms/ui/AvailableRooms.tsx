import { RoomCard } from '@/entities/rooms'
import { BookRoomModal, useBookRoomModal } from '@/features/book-room'
import { useAvailableRooms } from '../model/useAvailableRooms'
import { EmptyNoOffice } from './EmptyNoOffice'
import { EmptyRooms } from './EmptyRooms'
import { RoomsError } from './RoomsError'
import { RoomsLoading } from './RoomsLoading'

export const AvailableRooms = () => {
  const { rooms, officeId, isLoading, isError, errorMessage, refetch, handleResetFilters } =
    useAvailableRooms()
  const {
    isOpen: modalBookOpen,
    selectedRoom: currentRoom,
    openBookModal: handleOpenModal,
    handleOpenChange: handleChangeModalOpen,
  } = useBookRoomModal()

  if (!officeId) {
    return <EmptyNoOffice />
  }

  if (isLoading) {
    return <RoomsLoading />
  }

  if (isError) {
    return <RoomsError message={errorMessage} onRetry={refetch} />
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
          <RoomCard key={room.id} room={room} onBook={handleOpenModal} />
        ))}
      </div>
      <BookRoomModal
        isOpen={modalBookOpen}
        onOpenChange={handleChangeModalOpen}
        currentRoom={currentRoom}
      />
    </div>
  )
}
