import { Skeleton } from '@/shared/ui'

export function UserSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-4 w-24 rounded-md" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  )
}
