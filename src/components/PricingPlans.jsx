import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { CheckIcon, ClockIcon, BookIcon } from './Icons'
import { pricing, pricingNotes, SHOW_PRICES, CURRENCY } from '../data/pricing'

const formatPrice = (n) => `${CURRENCY} ${n.toLocaleString('en-IN')}`

export default function PricingPlans({ course }) {
  const plans = pricing[course.slug]
  if (!plans || plans.length === 0) return null

  const cols = plans.length === 4 ? 'xl:grid-cols-4 md:grid-cols-2' : 'lg:grid-cols-3 md:grid-cols-2'

  return (
    <section id="fees" className="scroll-mt-20 py-14">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Fees and plans</p>
          <h2 className="section-title mt-2 max-w-2xl">Choose the plan that fits your goal.</h2>
          <p className="mt-3 max-w-2xl text-navy-700">
            Start with the foundation and move up, or take the complete programme from day one.
          </p>
        </Reveal>

        <div className={`mt-10 grid gap-6 ${cols}`}>
          {plans.map((plan, i) => {
            const dark = plan.highlight
            const hasPrice = SHOW_PRICES && typeof plan.price === 'number'
            return (
              <Reveal key={plan.name} delay={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                    dark
                      ? 'border-navy-900 bg-navy-900 text-white shadow-xl'
                      : 'border-navy-100 bg-white text-navy-900 shadow-card'
                  }`}
                >
                  {dark && (
                    <span className="absolute -top-3 left-7 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                      Most chosen
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className={`mt-1 text-sm ${dark ? 'text-navy-200' : 'text-navy-600'}`}>{plan.tagline}</p>

                  <div className="mt-6">
                    {hasPrice ? (
                      <>
                        <p className="font-serif text-4xl font-bold">{formatPrice(plan.price)}</p>
                        <p className={`mt-1 text-xs uppercase tracking-wider ${dark ? 'text-navy-200' : 'text-navy-500'}`}>
                          Course fee
                        </p>
                      </>
                    ) : (
                      <p className="font-serif text-2xl font-bold">Contact us for fees</p>
                    )}
                  </div>

                  <div className={`mt-6 space-y-2 border-y py-4 text-sm ${dark ? 'border-white/15 text-navy-100' : 'border-navy-100 text-navy-700'}`}>
                    <p className="flex items-start gap-2">
                      <BookIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {plan.scope}
                    </p>
                    <p className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 shrink-0 text-gold-500" /> {plan.duration}
                    </p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-gold-300' : 'text-gold-600'}`} />
                        <span className={dark ? 'text-navy-50' : 'text-navy-800'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/contact?course=${course.slug}`}
                    className={`mt-7 ${dark ? 'btn-primary' : 'btn-dark'} w-full`}
                  >
                    Enquire about this plan
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <ul className="mt-10 max-w-3xl space-y-2 text-sm leading-relaxed text-navy-600">
            {pricingNotes.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" /> {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
