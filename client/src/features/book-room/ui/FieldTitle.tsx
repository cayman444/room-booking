import type { FC } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { FormField } from '@/shared/ui'

interface FieldTitleProps {
  registration: UseFormRegisterReturn
  error?: string
}

export const FieldTitle: FC<FieldTitleProps> = ({ registration, error }) => {
  return (
    <FormField
      id="booking-title"
      label="Тема встречи"
      required
      placeholder="Укажите тему встречи"
      error={error}
      {...registration}
    />
  )
}
