import { useEffect, useState, useCallback } from 'react'
import { AiArt, NetworkArt, CloudArt, ShieldArt } from './Art'
import { ArrowIcon } from './Icons'

// Put the matching JPG files in /public/images/hero/. Until they exist, the SVG art is shown instead.
export const heroSlides = [
  { id: 'networking', label: 'Networking', src: '/images/hero/hero-networking.jpg', Art: NetworkArt },
  { id: 'cloud', label: 'Cloud Computing', src: '/images/hero/hero-cloud.jpg', Art: CloudArt },
  { id: 'ai', label: 'Artificial Intelligence', src: '/images/hero/hero-ai.jpg', Art: AiArt },
  { id: 'cybersecurity', label: 'Cybersecurity', src: '/images/hero/hero-cybersecurity.jpg', Art: ShieldArt },
]

const INTERVAL = 6000

function Slide({ slide, active, first }) {
  const [failed, setFailed] = useState(false)
  const { Art } = slide
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden={!active}
    >
      <div className={`h-full w-full ${active ? 'hero-zoom' : ''}`}>
        {failed ? (
          <Art />
        ) : (
          <img
            src={slide.src}
            alt=""
            className="h-full w-full object-cover"
            loading={first ? 'eager' : 'lazy'}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}

export default function HeroSlider({ paused = false }) {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const reduced =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const go = useCallback((i) => setIndex((i + count) % count), [count])

  useEffect(() => {
    if (paused || reduced) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => clearInterval(t)
  }, [paused, reduced, count, index])

  return (
    <>
      <div className="absolute inset-0 z-0 bg-navy-950">
        {heroSlides.map((s, i) => (
          <Slide key={s.id} slide={s} active={i === index} first={i === 0} />
        ))}
        {/* Dark overlays keep the text readable on any image */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />
      </div>

      <div className="absolute inset-x-0 bottom-5 z-20">
        <div className="container-x flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-navy-100 sm:block" aria-live="polite">
              <span className="text-gold-300">{String(index + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}
              <span className="ml-3 text-white">{heroSlides[index].label}</span>
            </p>
            <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.label}`}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-10 bg-gold-400' : 'w-4 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
