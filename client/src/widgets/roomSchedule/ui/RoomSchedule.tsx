import type { FC } from 'react'
import { type Room } from '@/entities/rooms'
import { BookRoomModal, useBookRoomModal } from '@/features/book-room'
import { Button } from '@/shared/ui'
import { useRoomSchedule } from '../model/useRoomSchedule'
import { RoomScheduleDateSelect } from './RoomScheduleDateSelect'
import { RoomScheduleError } from './RoomScheduleError'
import { RoomScheduleSkeleton } from './RoomScheduleSkeleton'
import { ScheduleList } from './ScheduleList'

interface RoomScheduleProps {
  room: Room
}

export const RoomSchedule: FC<RoomScheduleProps> = ({ room }) => {
  const { bookings, currentUser, isLoading, isError, formattedDate, date, refetch } =
    useRoomSchedule(room.id)
  const {
    isOpen: modalBookOpen,
    selectedRoom: currentRoom,
    openBookModal: handleOpenModal,
    handleOpenChange: handleChangeModalOpen,
  } = useBookRoomModal()

  if (isLoading) {
    return <RoomScheduleSkeleton />
  }

  if (isError) {
    return <RoomScheduleError onRetry={refetch} />
  }

  return (
    <div className="bg-card border-border rounded-2xl border p-5 sm:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-accent-foreground text-[20px] font-extrabold">
              Расписание на день
            </h2>
            <p className="text-muted text-sm">{formattedDate}</p>
          </div>
          <RoomScheduleDateSelect date={date} />
        </div>
        <ScheduleList bookings={bookings} currentUser={currentUser} />
        <div className="flex justify-end">
          <Button size={'lg'} onClick={() => handleOpenModal(room)}>
            Забронировать комнату
          </Button>
        </div>
      </div>
      <BookRoomModal
        isOpen={modalBookOpen}
        onOpenChange={handleChangeModalOpen}
        currentRoom={currentRoom}
      />
    </div>
  )
}
