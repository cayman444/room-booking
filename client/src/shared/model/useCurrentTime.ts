import { useEffect, useState } from 'react'

export const useCurrentTime = (refreshRate = 1000) => {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, refreshRate)

    return () => clearInterval(interval)
  }, [refreshRate])

  return currentTime
}
