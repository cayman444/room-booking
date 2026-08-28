import * as React from 'react'
import { cn } from '@/shared/lib/utils'

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  error?: boolean | string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'border-border bg-card text-foreground ring-offset-background placeholder:text-muted/60 focus:border-primary focus:ring-primary/20 flex min-h-20 w-full resize-none rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors hover:border-slate-300 focus:ring-2 focus:ring-offset-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
