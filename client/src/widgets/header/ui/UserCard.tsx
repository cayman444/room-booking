import { useGetUser } from '../model/useGetUser'
import { UserSkeleton } from './UserSkeleton'

export const UserCard = () => {
  const { user, formattedName, isLoading } = useGetUser()

  if (isLoading) {
    return <UserSkeleton />
  }

  return (
    <div className="flex items-center gap-3">
      <div className="text-foreground text-sm font-semibold">{formattedName}</div>
      <div className="text-primary-foreground bg-avatar-bg flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold shadow-sm">
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.displayName}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span>{user?.initials}</span>
        )}
      </div>
    </div>
  )
}
