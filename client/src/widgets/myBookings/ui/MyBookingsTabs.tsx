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
      className="w-auto"
    >
      <TabsList className="bg-muted/60 h-11 rounded-xl p-1">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-card data-[state=active]:text-foreground flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:shadow-sm"
        >
          <span>Предстоящие</span>
          {upcomingCount > 0 && (
            <span className="bg-primary/15 text-primary flex size-5 items-center justify-center rounded-full text-xs font-bold">
              {upcomingCount}
            </span>
          )}
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="data-[state=active]:bg-card data-[state=active]:text-foreground rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:shadow-sm"
        >
          Прошедшие
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
