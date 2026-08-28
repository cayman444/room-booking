import axios from 'axios'

export interface ApiErrorResponse {
  error: {
    code: string
    message: string
    details?: unknown
  }
}

export function getErrorMessage(
  error: unknown,
  fallback = 'Произошла непредвиденная ошибка',
): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.error?.message || error.message || fallback
  }
  if (error instanceof Error) {
    return error.message
  }
  return fallback
}

export function isConflictError(error: unknown): boolean {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return (
      error.response?.status === 409 ||
      error.response?.data?.error?.code === 'BOOKING_CONFLICT'
    )
  }
  return false
}
