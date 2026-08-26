import axios, { type AxiosRequestConfig } from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

const instance = axios.create({
  baseURL: API_BASE_URL,
})

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error?.message || error.message || 'Ошибка запроса'
    return Promise.reject(new Error(message))
  },
)

export const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    instance.get(url, config) as Promise<T>,
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    instance.post(url, data, config) as Promise<T>,
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    instance.put(url, data, config) as Promise<T>,
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    instance.delete(url, config) as Promise<T>,
}
