import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_PARAM_KEYS } from '@/shared/config'
import { formatDateToYMD } from '@/shared/lib/date'
import { type BookRoomFormValues, bookRoomSchema } from './bookRoom.schema'

export const useBookForm = (onSubmitCallback: (values: BookRoomFormValues) => void) => {
  const [searchParams] = useSearchParams()
  const defaultDate = searchParams.get(SEARCH_PARAM_KEYS.DATE) || formatDateToYMD(new Date())
  const defaultStartTime = searchParams.get(SEARCH_PARAM_KEYS.START_TIME) || '09:00'
  const defaultDuration = Number(searchParams.get(SEARCH_PARAM_KEYS.DURATION)) || 60

  const form = useForm<BookRoomFormValues>({
    resolver: zodResolver(bookRoomSchema),
    defaultValues: {
      title: '',
      date: defaultDate,
      startTime: defaultStartTime,
      duration: defaultDuration,
      comment: '',
    },
    mode: 'onTouched',
  })

  const watchedDate = useWatch({ control: form.control, name: 'date' })
  const watchedStartTime = useWatch({ control: form.control, name: 'startTime' })
  const watchedDuration = useWatch({ control: form.control, name: 'duration' })

  const onSubmit = form.handleSubmit((values) => {
    onSubmitCallback(values)
  })

  const handleDateChange = (newDate: string) => {
    form.setValue('date', newDate, { shouldValidate: true, shouldDirty: true })
  }

  const handleStartTimeChange = (newStartTime: string) => {
    form.setValue('startTime', newStartTime, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  const handleDurationChange = (newDuration: number) => {
    form.setValue('duration', newDuration, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  return {
    watchedDate,
    watchedStartTime,
    watchedDuration,
    onSubmit,
    handleDateChange,
    handleStartTimeChange,
    handleDurationChange,
    register: form.register,
    errors: form.formState.errors,
  }
}
