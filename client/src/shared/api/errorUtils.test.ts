import { AxiosError, AxiosHeaders } from 'axios'
import { describe, expect, it } from 'vitest'
import { type ApiErrorResponse, getErrorMessage, isConflictError } from './errorUtils'

describe('errorUtils', () => {
  it('returns custom message from ApiErrorResponse in AxiosError', () => {
    const error = new AxiosError<ApiErrorResponse>('Request failed')
    error.response = {
      data: {
        error: {
          code: 'BOOKING_CONFLICT',
          message: 'Переговорная уже занята',
        },
      },
      status: 409,
      statusText: 'Conflict',
      headers: {},
      config: { headers: new AxiosHeaders() },
    }

    expect(getErrorMessage(error)).toBe('Переговорная уже занята')
    expect(isConflictError(error)).toBe(true)
  })

  it('returns standard Error message for regular JS errors', () => {
    const error = new Error('Сетевой сбой')
    expect(getErrorMessage(error)).toBe('Сетевой сбой')
    expect(isConflictError(error)).toBe(false)
  })

  it('returns fallback message for unknown error types', () => {
    expect(getErrorMessage(null, 'Запасная ошибка')).toBe('Запасная ошибка')
    expect(getErrorMessage(undefined, 'Запасная ошибка')).toBe('Запасная ошибка')
    expect(isConflictError(null)).toBe(false)
  })
})
