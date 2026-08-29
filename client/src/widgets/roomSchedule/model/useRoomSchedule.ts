import { useSearchParams } from 'react-router-dom'
import { useRoomBookings } from '@/entities/rooms'
import { useMe } from '@/entities/user'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { calculateIntervalIso, formatDateDisplaySchedule, formatDateToYMD } from '@/shared/lib/date'
import { SCHEDULE_HOURS, WORK_DAY_TOTAL_MINUTES } from '@/shared/lib/date/consts'

export const useRoomSchedule = (roomId: string) => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get(SEARCH_PARAM_KEYS.DATE) || formatDateToYMD(new Date())

  const { data: currentUser } = useMe()
  const { from, to } = calculateIntervalIso(date, SCHEDULE_HOURS[0], WORK_DAY_TOTAL_MINUTES)
  const {
    data: bookings = [],
    isLoading,
    isError,
    refetch,
  } = useRoomBookings(roomId, { from, to })
  const formattedDate = formatDateDisplaySchedule(date)

  return { bookings, currentUser, isLoading, isError, refetch, formattedDate, date }
}
