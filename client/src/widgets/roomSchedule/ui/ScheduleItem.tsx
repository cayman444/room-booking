import type { FC } from 'react'

interface ScheduleItemProps {
  hour: string
}

export const ScheduleItem: FC<ScheduleItemProps> = ({ hour }) => {
  return (
    <div className="flex h-12">
      <div className="text-muted w-15 self-start">{hour}</div>
      <div className="border-border flex-1 border-b" />
    </div>
  )
}
