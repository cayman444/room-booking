import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { User } from '../model/types'

export function useMe() {
  return useQuery<User>({
    queryKey: ['me'],
    queryFn: () => apiClient.get<User>('/me').then((res) => res.data),
  })
}

