import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { Input, type InputProps } from './input'

export interface FormFieldProps extends InputProps {
  label: string
  id: string
  required?: boolean
  leftIcon?: ReactNode
  error?: string
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, required, error, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        <label
          htmlFor={id}
          className="text-muted block cursor-pointer text-sm font-bold select-none"
        >
          {label}
          {required && <span className="text-foreground ml-0.5">*</span>}
        </label>
        <Input id={id} ref={ref} error={!!error} {...props} />
        {error && <p className="text-destructive text-xs font-semibold">{error}</p>}
      </div>
    )
  },
)
FormField.displayName = 'FormField'
