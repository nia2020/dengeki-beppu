import { useEffect, useState } from 'react'
import { isReleasedAt } from '../lib/publishSchedule'

/** 指定時刻以降に true。正午ちょうどにページを開いたままでも切り替わる */
export function useIsReleased(publishAt: string): boolean {
  const [released, setReleased] = useState(() => isReleasedAt(publishAt))

  useEffect(() => {
    if (released) return

    const at = Date.parse(publishAt)
    const delay = Math.max(0, at - Date.now())
    const id = window.setTimeout(() => {
      setReleased(true)
    }, delay)

    return () => window.clearTimeout(id)
  }, [publishAt, released])

  return released
}
