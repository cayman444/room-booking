import { AlertTriangle } from 'lucide-react'
import type { FC } from 'react'

interface BookingErrorProps {
  error: string
}

export const BookingError: FC<BookingErrorProps> = ({ error }) => {
  return (
    <div className="bg-occupied-bg text-destructive flex items-center gap-2 rounded-lg p-3.5 text-xs font-semibold">
      <AlertTriangle className="size-4 shrink-0 stroke-2" />
      <span>{error}</span>
    </div>
  )
}
