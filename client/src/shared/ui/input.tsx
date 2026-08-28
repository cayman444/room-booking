import * as React from 'react'
import { cn } from '@/shared/lib/utils'

export interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean | string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-border bg-card text-foreground ring-offset-background placeholder:text-muted/60 focus:border-primary focus:ring-primary/20 flex h-10 w-full rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors hover:border-slate-300 focus:ring-2 focus:ring-offset-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
