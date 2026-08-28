import type { FC } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Textarea } from '@/shared/ui'

interface FieldCommentProps {
  registration: UseFormRegisterReturn
  error?: string
}

export const FieldComment: FC<FieldCommentProps> = ({ registration, error }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor="booking-comment"
        className="text-muted block cursor-pointer text-sm font-bold select-none"
      >
        Комментарий
      </label>
      <Textarea
        id="booking-comment"
        placeholder="Дополнительная информация для участников встречи..."
        error={!!error}
        {...registration}
      />
      {error && <p className="text-destructive text-xs font-semibold">{error}</p>}
    </div>
  )
}
