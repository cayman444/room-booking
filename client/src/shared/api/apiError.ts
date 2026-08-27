import axios from 'axios'

export interface ApiErrorData {
  code?: string
  message?: string
  details?: Record<string, unknown>
}

export interface ApiErrorResponse {
  error?: ApiErrorData
  message?: string
}

export class ApiError extends Error {
  readonly status?: number
  readonly code?: string
  readonly details?: Record<string, unknown>

  constructor(message: string, status?: number, code?: string, details?: Record<string, unknown>) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.details = details
  }

  static fromAxiosError(error: unknown): ApiError {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      const status = error.response?.status
      const errorObj = error.response?.data?.error
      const message =
        errorObj?.message ||
        error.response?.data?.message ||
        error.message ||
        'Произошла ошибка при обращении к серверу'
      const code = errorObj?.code
      const details = errorObj?.details

      return new ApiError(message, status, code, details)
    }

    if (error instanceof Error) {
      return new ApiError(error.message)
    }

    return new ApiError('Неизвестная ошибка')
  }
}
