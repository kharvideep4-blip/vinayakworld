import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourse, courses, honesty } from '../data/courses'
import CourseImage from '../components/CourseImage'
import PricingPlans from '../components/PricingPlans'
import CourseHeroBg from '../components/CourseHeroBg'
import { getModuleDetail } from '../data/moduleDetails'
import { iconFor, CheckIcon, ClockIcon, UsersIcon, BookIcon, ArrowIcon } from '../components/Icons'

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-navy-200">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  )
}

function ModuleRow({ slug, m, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const detail = getModuleDetail(slug, m.no)
  const hasDetail = detail && (detail.topics.length > 0 || detail.practical.length > 0)

  return (
    <li>
      <button
        type="button"
        onClick={() => hasDetail && setOpen((o) => !o)}
        aria-expanded={hasDetail ? open : undefined}
        className={`flex w-full items-start gap-4 px-4 py-3.5 text-left transition-colors sm:px-5 ${
          hasDetail ? 'cursor-pointer hover:bg-navy-50' : 'cursor-default'
        } ${open ? 'bg-navy-50' : ''}`}
      >
        <span className="w-8 shrink-0 font-serif text-lg font-bold text-gold-600">{m.no}</span>
        <span className="flex-1 text-sm font-medium leading-snug text-navy-900 sm:text-base">{m.title}</span>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-100">
          {m.hours} h
        </span>
        {hasDetail && (
          <span
            className={`shrink-0 text-xl leading-none text-navy-500 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            aria-hidden="true"
          >
            +
          </span>
        )}
      </button>

      {hasDetail && (
        <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="space-y-6 border-t border-navy-100 bg-white px-4 py-6 sm:px-5 sm:pl-[4.25rem]">
              {detail.objective && (
                <p className="text-sm italic leading-relaxed text-navy-600">{detail.objective}</p>
              )}

              {detail.topics.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">What you will learn</p>
                  {detail.topics.some(([, d]) => d) ? (
                    <ul className="mt-3 space-y-3">
                      {detail.topics.map(([title, text]) => (
                        <li key={title} className="flex items-start gap-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                          <p className="text-sm leading-relaxed text-navy-800">
                            <span className="font-semibold text-navy-900">{title}</span>
                            {text && <span className="text-navy-700">{`: ${text}`}</span>}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {detail.topics.map(([title]) => (
                        <li key={title} className="rounded-full border border-navy-100 bg-paper px-3 py-1.5 text-sm text-navy-800">
                          {title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {detail.practical.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">Practical work</p>
                  <ul className="mt-3 space-y-2">
                    {detail.practical.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-400" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(detail.evidence || detail.tools) && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.evidence && (
                    <div className="rounded-lg bg-paper p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Evidence you submit</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-800">{detail.evidence}</p>
                    </div>
                  )}
                  {detail.tools && (
                    <div className="rounded-lg bg-paper p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Tools</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-800">{detail.tools}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

function ModuleTable({ slug, rows, openFirst = false }) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy-100 bg-white">
      <ul className="divide-y divide-navy-100">
        {rows.map((m, i) => (
          <ModuleRow key={m.no} slug={slug} m={m} defaultOpen={openFirst && i === 0} />
        ))}
      </ul>
    </div>
  )
}

export default function CoursePage() {
  const { slug } = useParams()
  const course = getCourse(slug)
  const [openStage, setOpenStage] = useState(0)

  if (!course) {
    return (
      <section className="container-x py-24 text-center">
        <h1 className="text-3xl font-semibold">Course not found</h1>
        <p className="mt-3 text-navy-700">The course you are looking for does not exist.</p>
        <Link to="/courses" className="btn-dark mt-6">Back to courses</Link>
      </section>
    )
  }

  const Icon = iconFor(course.icon)
  const others = courses.filter((c) => c.slug !== course.slug)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <CourseHeroBg />
        <div className="container-x relative z-10 grid items-center gap-10 py-14 lg:grid-cols-5 lg:py-20">
          <div className="lg:col-span-3">
            <nav aria-label="Breadcrumb" className="text-sm text-navy-200">
              <Link to="/courses" className="hover:text-white">Courses</Link> <span className="mx-1">/</span> {course.name}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-navy-950">
                <Icon className="h-7 w-7" />
              </span>
              <p className="eyebrow !text-gold-300">Programme</p>
            </div>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{course.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">{course.summary}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Fact icon={ClockIcon} label="Duration" value={course.duration} />
              <Fact icon={BookIcon} label="Guided hours" value={course.guidedHours} />
              <Fact icon={UsersIcon} label="Level" value={course.level} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/contact?course=${course.slug}`} className="btn-primary">Enquire about this course</Link>
              <a href="#syllabus" className="btn-secondary">View syllabus</a>
              <a href="#fees" className="btn-secondary">Fees and plans</a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="aspect-[5/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <CourseImage course={course} />
            </div>
          </div>
        </div>
      </section>

      {/* Audience and outcomes */}
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">Who it is for</p>
            <h2 className="section-title mt-2">Designed for you if you are starting out.</h2>
            <p className="mt-4 leading-relaxed text-navy-700">{course.audience}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">Learning outcomes</p>
            <h2 className="section-title mt-2">What you will be able to do</h2>
            <ul className="mt-6 grid gap-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm leading-relaxed text-navy-800 sm:text-base">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="scroll-mt-20 bg-white py-14">
        <div className="container-x">
          <p className="eyebrow">Syllabus</p>
          <h2 className="section-title mt-2">Module-wise curriculum</h2>
          <p className="mt-3 text-sm text-navy-600">Select any module to see exactly what you will learn, the practical work and the evidence you submit.</p>
          {course.modulesNote && <p className="mt-1 text-sm text-navy-500">{course.modulesNote}</p>}

          <div className="mt-8">
            {course.stages ? (
              <div className="space-y-3">
                {course.stages.map((stage, i) => {
                  const isOpen = openStage === i
                  return (
                    <div key={stage.name} className="overflow-hidden rounded-xl border border-navy-100 bg-paper">
                      <button
                        type="button"
                        onClick={() => setOpenStage(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-navy-50"
                      >
                        <span>
                          <span className="block font-serif text-lg font-semibold">{stage.name}</span>
                          <span className="text-sm text-navy-600">{stage.modules.length} modules, {stage.hours} hours</span>
                        </span>
                        <span className={`text-2xl leading-none text-navy-500 transition ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-navy-100 p-3 sm:p-4">
                          <ModuleTable slug={course.slug} rows={stage.modules.map(([no, title, hours]) => ({ no, title, hours }))} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <ModuleTable slug={course.slug} rows={course.modules} openFirst />
            )}
          </div>

          {course.tracks && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold">Specialist tracks</h3>
              <p className="mt-2 max-w-3xl text-sm text-navy-600">
                After the mandatory core, learners choose a career track. The full programme takes all of them.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.tracks.map((t) => (
                  <div key={t.name} className="rounded-xl border border-navy-100 bg-paper p-5">
                    <p className="font-serif text-lg font-semibold">{t.name}</p>
                    <p className="mt-1 text-sm font-medium text-gold-700">{t.extra}</p>
                    <p className="mt-2 text-sm text-navy-700">Typical entry roles: {t.roles}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {course.safety && (
            <div className="mt-10 rounded-xl border-l-4 border-gold-400 bg-gold-50 p-5">
              <p className="font-semibold text-navy-900">Lab safety and ethics</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-800">{course.safety}</p>
            </div>
          )}
        </div>
      </section>

      {/* Labs */}
      <section className="py-14">
        <div className="container-x">
          <p className="eyebrow">Practical work</p>
          <h2 className="section-title mt-2">Hands-on labs you will complete</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {course.labs.map((l) => (
              <div key={l} className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
                <p className="font-medium leading-snug text-navy-900">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPlans course={course} />

      {/* Certifications */}
      <section className="bg-white py-14">
        <div className="container-x">
          <p className="eyebrow">Certification pathway</p>
          <h2 className="section-title mt-2">Where this course can lead</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-navy-100">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-navy-50 text-navy-800">
                <tr>
                  <th className="px-5 py-3 font-semibold">Credential</th>
                  <th className="px-5 py-3 font-semibold">Provider</th>
                  <th className="px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {course.certifications.map((c) => (
                  <tr key={c.name} className="align-top">
                    <td className="px-5 py-4 font-medium">{c.name}</td>
                    <td className="px-5 py-4 text-navy-700">{c.body}</td>
                    <td className="px-5 py-4 text-navy-700">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-navy-600">{honesty}</p>
        </div>
      </section>

      {/* Other courses + CTA */}
      <section className="py-14">
        <div className="container-x">
          <h2 className="text-2xl font-semibold">Explore other programmes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((c) => {
              const I = iconFor(c.icon)
              return (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white p-5 transition hover:border-navy-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-700"><I /></span>
                    <span className="font-semibold">{c.name}</span>
                  </span>
                  <ArrowIcon className="h-5 w-5 text-navy-500 transition group-hover:translate-x-1" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
