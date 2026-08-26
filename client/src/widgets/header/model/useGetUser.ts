import { useMe } from '@/entities/user'

export const useGetUser = () => {
  const { data: user, isLoading } = useMe()

  const splittedName = user?.displayName.split(' ')
  const formattedName =
    splittedName?.length === 2
      ? splittedName[0] + ' ' + splittedName[1][0] + '.'
      : user?.displayName

  return { user, formattedName, isLoading }
}
