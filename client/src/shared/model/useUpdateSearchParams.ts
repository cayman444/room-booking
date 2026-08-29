import { useSearchParams } from 'react-router-dom'

export const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateSearchParams = (key: string, value?: string) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value && value !== 'all') {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams)
  }

  return { updateSearchParams }
}
