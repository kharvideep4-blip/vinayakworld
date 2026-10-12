import Reveal from './Reveal'
import CountNumber from './CountNumber'
import { stats } from '../data/stats'
import useEnrolledCount from '../hooks/useEnrolledCount'

// White stats bar with counting numbers, in the site's own fonts and colours.
// Used under the hero on the home page and above the footer on other pages.
export default function StatsBar() {
  const live = useEnrolledCount()
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="text-center md:text-left">
              <p className="font-serif text-4xl font-bold tabular-nums text-navy-900">
                <CountNumber end={i === 0 ? live.end : s.end} suffix={i === 0 ? live.suffix : s.suffix} />
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-navy-600 md:justify-start">
                {i === 0 && live.live && (
                  <span className="relative flex h-2 w-2" title="Updates live" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                )}
                {s.label}
                {i === 0 && live.live && <span className="sr-only"> (live)</span>}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
