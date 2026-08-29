import { ChevronRight } from 'lucide-react'
import type { FC } from 'react'
import { Skeleton } from '@/shared/ui'

export const RoomDetailBreadcrumbsSkeleton: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-5 w-25 rounded" />
      <ChevronRight className="text-subtle size-3.5 stroke-4" />
      <Skeleton className="h-5 w-20 rounded" />
      <ChevronRight className="text-subtle size-3.5 stroke-4" />
      <Skeleton className="h-5 w-30 rounded" />
    </div>
  )
}
