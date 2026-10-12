import { useEffect, useRef, useState } from 'react'

// Plain number that counts up to `end` when it scrolls into view.
// If `end` changes later (live data), it smoothly counts from the shown value to the new one.
// Example: <CountNumber end={1320} suffix="+" />  ->  1,320+
export default function CountNumber({ end, suffix = '', duration = 2000, className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const shown = useRef(0)
  const visible = useRef(false)
  const raf = useRef(0)

  const animateTo = (target, ms) => {
    cancelAnimationFrame(raf.current)
    const from = shown.current
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / ms, 1)
      shown.current = Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3)))
      setValue(shown.current)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      shown.current = end
      setValue(end)
      return
    }
    if (visible.current) {
      animateTo(end, 900)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.current = true
          animateTo(end, duration)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration])

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  return (
    <span ref={ref} className={className} aria-label={`${end.toLocaleString('en-IN')}${suffix}`}>
      <span aria-hidden="true">
        {value.toLocaleString('en-IN')}
        {suffix}
      </span>
    </span>
  )
}
