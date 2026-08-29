import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'
export const API_SOCKET_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3000/api/v1/ws'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
})
