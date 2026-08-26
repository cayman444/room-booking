import { useQuery } from '@tanstack/react-query'

import { apiClient } from '@/shared/api'

import type { User } from '../types'

export function useMe() {
  return useQuery<User>({
    queryKey: ['me'],
    queryFn: () => apiClient.get('/me'),
  })
}
