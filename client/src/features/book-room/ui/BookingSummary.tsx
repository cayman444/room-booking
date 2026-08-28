import { Info } from 'lucide-react'
import type { FC } from 'react'
import { formatDateDisplay } from '@/shared/lib/date'

interface BookingSummaryProps {
  date: string
  startTime: string
  duration: number
}

export const BookingSummary: FC<BookingSummaryProps> = ({ date, startTime }) => {
  if (!date || !startTime) return null

  const summaryText = formatDateDisplay(date)

  return (
    <div className="bg-available-bg text-available-fg flex items-center gap-2 rounded-lg p-3.5 text-xs font-semibold">
      <Info className="size-4 shrink-0 stroke-3" />
      <span>{summaryText}</span>
    </div>
  )
}
