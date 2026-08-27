import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/shared/api'
import type { Office } from '../model/types'

interface ApiResponse {
  items: Office[]
}

export function useOffices() {
  return useQuery<ApiResponse, Error, Office[]>({
    queryKey: ['offices'],
    queryFn: () => apiClient.get<ApiResponse>('/offices'),
    select: (data) => data.items,
  })
}
