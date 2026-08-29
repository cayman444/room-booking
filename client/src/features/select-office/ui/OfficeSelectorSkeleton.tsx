import { Skeleton } from '@/shared/ui'

export function OfficeSelectorSkeleton() {
  return (
    <div className="border-border bg-card border-b px-6 py-6 md:px-10">
      <Skeleton className="h-8 w-44 rounded-md" />
      <Skeleton className="mt-2 h-4 w-64 rounded-md" />
    </div>
  )
}
