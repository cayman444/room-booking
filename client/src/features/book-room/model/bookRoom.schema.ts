import { z } from 'zod'

export const bookRoomSchema = z.object({
  title: z.string().trim().min(1, 'Обязательное поле').max(100, 'Максимум 100 символов'),
  date: z.string().min(1, 'Обязательное поле'),
  startTime: z.string().min(1, 'Обязательное поле'),
  duration: z.coerce.number().min(15, 'Минимум 15 минут'),
  comment: z.string().max(500, 'Максимум 500 символов').optional(),
})

export type BookRoomFormValues = z.infer<typeof bookRoomSchema>
