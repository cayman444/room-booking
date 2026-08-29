import type { FC } from 'react'
import type { BookingsScope } from '@/entities/bookings'
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui'

interface MyBookingsTabsProps {
  tabScope: BookingsScope
  setTabScope: (tabScope: BookingsScope) => void
  upcomingCount?: number
}

export const MyBookingsTabs: FC<MyBookingsTabsProps> = ({
  tabScope,
  setTabScope,
  upcomingCount = 0,
}) => {
  return (
    <Tabs
      value={tabScope}
      onValueChange={(val) => setTabScope(val as BookingsScope)}
      className="w-full"
    >
      <TabsList>
        <TabsTrigger value="upcoming">
          <span>Предстоящие ({upcomingCount})</span>
        </TabsTrigger>
        <TabsTrigger value="past">
          <span>Прошедшие</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
