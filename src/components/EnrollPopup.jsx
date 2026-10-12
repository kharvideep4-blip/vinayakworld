import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import CountNumber from './CountNumber'
import useEnrolledCount from '../hooks/useEnrolledCount'

const KEY = 'vw-enroll-popup-seen'

// Small pop-up that slides in on the home page a moment after it opens.
// Shows once per browser session. It only shows the real total from src/data/stats.js.
export default function EnrollPopup() {
  const enrolled = useEnrolledCount()
  const [show, setShow] = useState(false)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(KEY) === '1'
    } catch (e) {
      /* storage blocked: just show it */
    }
    if (seen) return
    const t = setTimeout(() => setShow(true), 1800)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setShow(false)
    try {
      sessionStorage.setItem(KEY, '1')
    } catch (e) {
      /* ignore */
    }
  }

  if (!show) return null

  // Portal to <body>: the page fade-in puts a transform on <main>, which would otherwise pin this to the page bottom.
  return createPortal(
    <div
      role="status"
      className="enroll-pop fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-xs rounded-2xl border border-gold-400/30 bg-navy-900 p-4 text-white shadow-2xl"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute right-2.5 top-2 rounded p-1 text-lg leading-none text-navy-200 hover:text-white"
      >
        &times;
      </button>
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-navy-100">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
        </span>
        Enrolments open
      </p>
      <div className="mt-3 flex items-center gap-3">
        <p className="font-serif text-4xl font-bold tabular-nums text-gold-300">
          <CountNumber end={enrolled.end} suffix={enrolled.suffix} />
        </p>
        <p className="text-sm leading-snug text-navy-100">students have enrolled with us</p>
      </div>
      <Link to="/contact" onClick={close} className="mt-3 inline-block text-sm font-semibold text-gold-300 underline underline-offset-4 hover:text-gold-200">
        Join the next batch
      </Link>
    </div>,
    document.body
  )
}
