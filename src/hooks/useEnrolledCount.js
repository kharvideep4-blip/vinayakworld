import { useEffect, useState } from 'react'
import { enrolled } from '../data/stats'

// Frontend-only live counter. Starts from the number in src/data/stats.js and
// ticks up by 1 every 20-45 seconds while the page is open. No backend needed.
// The count is remembered in the browser so it doesn't jump back on reload.
const KEY = 'vw-enrolled-count'

export default function useEnrolledCount() {
  const [end, setEnd] = useState(() => {
    try {
      return Math.max(enrolled.end, Number(localStorage.getItem(KEY)) || 0)
    } catch (e) {
      return enrolled.end
    }
  })

  useEffect(() => {
    let t
    const tick = () => {
      t = setTimeout(() => {
        setEnd((n) => {
          try { localStorage.setItem(KEY, String(n + 1)) } catch (e) { /* ignore */ }
          return n + 1
        })
        tick()
      }, 20000 + Math.random() * 25000)
    }
    tick()
    return () => clearTimeout(t)
  }, [])

  return { end, suffix: '+', live: true }
}
