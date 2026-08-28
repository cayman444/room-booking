import type { FC } from 'react'
import type { Room } from '@/entities/rooms'
import { Button } from '@/shared/ui'
import { useBookForm } from '../model/useBookForm'
import { useCreateBook } from '../model/useCreateBook'
import { BookingConflictModal } from './BookingConflictModal'
import { BookingError } from './BookingError'
import { BookingSummary } from './BookingSummary'
import { FieldComment } from './FieldComment'
import { FieldDate } from './FieldDate'
import { FieldDuration } from './FieldDuration'
import { FieldStartTime } from './FieldStartTime'
import { FieldTitle } from './FieldTitle'

interface BookRoomProps {
  room: Room
  onClose: () => void
}

export const BookRoom: FC<BookRoomProps> = ({ room, onClose }) => {
  const { isSubmitting, serverError, handleCreateBook, isConflictModalOpen, closeConflictModal } =
    useCreateBook({ room, onClose })
  const {
    watchedDate,
    watchedDuration,
    watchedStartTime,
    errors,
    handleDateChange,
    handleDurationChange,
    handleStartTimeChange,
    onSubmit,
    register,
  } = useBookForm(handleCreateBook)

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <FieldTitle registration={register('title')} error={errors.title?.message} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FieldDate
              value={watchedDate}
              onChange={handleDateChange}
              error={errors.date?.message}
            />
            <FieldStartTime
              value={watchedStartTime}
              onChange={handleStartTimeChange}
              error={errors.startTime?.message}
            />
          </div>
          <FieldDuration
            value={watchedDuration}
            startTime={watchedStartTime}
            onChange={handleDurationChange}
            error={errors.duration?.message}
          />
          <FieldComment registration={register('comment')} error={errors.comment?.message} />
        </div>
        <div className="space-y-2">
          <BookingSummary
            date={watchedDate}
            startTime={watchedStartTime}
            duration={watchedDuration}
          />
          {serverError && <BookingError error={serverError} />}
        </div>
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-6 py-2.5"
          >
            Отмена
          </Button>
          <Button type="submit" disabled={isSubmitting} className="px-6 py-2.5">
            {isSubmitting ? 'Бронирование...' : 'Забронировать'}
          </Button>
        </div>
      </form>
      <BookingConflictModal isOpen={isConflictModalOpen} onClose={closeConflictModal} />
    </>
  )
}
