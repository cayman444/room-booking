import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { API_SOCKET_URL } from '@/shared/api'

export const useRealtime = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const ws = new WebSocket(API_SOCKET_URL)

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        switch (message.type) {
          case 'booking.created':
          case 'booking.cancelled':
            queryClient.invalidateQueries({ queryKey: ['bookings'] })
            queryClient.invalidateQueries({ queryKey: ['room-bookings'] })
            break

          case 'room.availability_changed':
            queryClient.invalidateQueries({ queryKey: ['rooms'] })
            queryClient.invalidateQueries({ queryKey: ['room-bookings'] })
            break

          case 'data.reset':
            queryClient.invalidateQueries()
            break
        }
      } catch {
        console.error('Ошибка парсинга WS сообщения')
      }
    }

    return () => {
      ws.onmessage = null
      ws.onerror = null

      if (ws.readyState === WebSocket.OPEN) {
        ws.close()
      } else if (ws.readyState === WebSocket.CONNECTING) {
        ws.onopen = () => {
          ws.close()
        }
      }
    }
  }, [queryClient])
}
