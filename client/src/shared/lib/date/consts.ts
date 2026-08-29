export const DEFAULT_CAPACITY_OPTIONS = [
  { value: 'all', label: 'Любая' },
  { value: '4', label: 'Мин. 4 чел.' },
  { value: '8', label: 'Мин. 8 чел.' },
  { value: '12', label: 'Мин. 12 чел.' },
] as const

export const DEFAULT_DURATION_OPTIONS = [
  { value: '15', label: '15 минут' },
  { value: '30', label: '30 минут' },
  { value: '45', label: '45 минут' },
  { value: '60', label: '1 час' },
  { value: '90', label: '1.5 часа' },
  { value: '120', label: '2 часа' },
] as const

export const DURATION_LABELS = DEFAULT_DURATION_OPTIONS.reduce<Record<string, string>>(
  (acc, { label, value }) => {
    acc[value] = label
    return acc
  },
  {},
)

export const RU_WEEKDAYS_ACCUSATIVE = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среду',
  'Четверг',
  'Пятницу',
  'Субботу',
] as const

export const SCHEDULE_HOURS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
] as const

export const WORK_DAY_START_HOUR = 9
export const WORK_DAY_END_HOUR = 20
export const WORK_DAY_TOTAL_MINUTES = (WORK_DAY_END_HOUR - WORK_DAY_START_HOUR) * 60

export const DEFAULT_TIME_SLOTS = [
  '09:00',
  '09:15',
  '09:30',
  '09:45',
  '10:00',
  '10:15',
  '10:30',
  '10:45',
  '11:00',
  '11:15',
  '11:30',
  '11:45',
  '12:00',
  '12:15',
  '12:30',
  '12:45',
  '13:00',
  '13:15',
  '13:30',
  '13:45',
  '14:00',
  '14:15',
  '14:30',
  '14:45',
  '15:00',
  '15:15',
  '15:30',
  '15:45',
  '16:00',
  '16:15',
  '16:30',
  '16:45',
  '17:00',
  '17:15',
  '17:30',
  '17:45',
  '18:00',
  '18:15',
  '18:30',
  '18:45',
  '19:00',
  '19:15',
  '19:30',
  '19:45',
] as const
