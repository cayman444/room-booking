import { Skeleton } from '@/shared/ui'

export function OfficeSelectorSkeleton() {
  return (
    <div className="border-border bg-card border-b px-10 py-6">
      <Skeleton className="h-8 w-44 rounded-md" />
      <Skeleton className="mt-2 h-4 w-64 rounded-md" />
    </div>
  )
}
