import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useSyncedState(key: string, defaultValue: string = '') {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlValue = searchParams.get(key)
  const localValue = localStorage.getItem(key) || null
  const value = urlValue ?? localValue ?? defaultValue

  useEffect(() => {
    if (localValue && !urlValue) {
      setSearchParams(
        (prevParams) => {
          const nextParams = new URLSearchParams(prevParams)

          nextParams.set(key, localValue)

          return nextParams
        },
        { replace: true },
      )
    } else if (urlValue) {
      localStorage.setItem(key, value)
    }
  }, [key, localValue, setSearchParams, urlValue, value])

  const setValue = useCallback(
    (newValue: string) => {
      setSearchParams((prevParams) => {
        const nextParams = new URLSearchParams(prevParams)

        if (newValue) {
          nextParams.set(key, newValue)
          localStorage.setItem(key, newValue)
        } else {
          nextParams.delete(key)
          localStorage.removeItem(key)
        }

        return nextParams
      })
    },
    [key, setSearchParams],
  )

  return [value, setValue] as const
}
