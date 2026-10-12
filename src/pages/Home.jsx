import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import Reveal from '../components/Reveal'
import CourseCard from '../components/CourseCard'
import EnrollPopup from '../components/EnrollPopup'
import StatsBar from '../components/StatsBar'
import { BookIcon, LabIcon, UsersIcon, ShieldIcon, CheckIcon } from '../components/Icons'
import { courses, method, honesty } from '../data/courses'

const methodIcons = [BookIcon, LabIcon, UsersIcon, ShieldIcon]

const steps = [
  { title: 'Choose a programme', text: 'Read the syllabus and pick the course that fits the role you want.' },
  { title: 'Talk to our team', text: 'Send an enquiry. We help you confirm your starting level and batch dates.' },
  { title: 'Learn by doing', text: 'Attend concept sessions, guided labs and weekly practical checks.' },
  { title: 'Build your portfolio', text: 'Finish a capstone and leave with documented, demonstrable work.' },
]

export default function Home() {
  const [paused, setPaused] = useState(false)
  return (
    <>
      <EnrollPopup />

      {/* Hero with sliding background images */}
      <section
        className="relative overflow-hidden bg-navy-950 text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <HeroSlider paused={paused} />
        <div className="container-x relative z-10 pb-28 pt-20 lg:pb-36 lg:pt-32">
          <div className="hero-rise max-w-2xl">
            <p className="eyebrow !text-gold-300">Vinayak World Technology Institute</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
              Learn the technology skills that careers are built on.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
              Structured, lab-based training in Artificial Intelligence, Cybersecurity, Networking and Cloud Computing,
              designed for beginners and taught with real practical work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="btn-primary">Explore courses</Link>
              <Link to="/contact" className="btn-secondary">Request a callback</Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-navy-100 sm:grid-cols-2">
              {['Beginner friendly', 'Hands-on lab practice', 'Clear learning outcomes', 'Capstone project'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold-300" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats: digital counters */}
      <StatsBar />

      {/* Courses */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Our programmes</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="section-title max-w-2xl">Four disciplines. One practical, structured approach.</h2>
              <Link to="/courses" className="text-sm font-semibold text-navy-700 underline underline-offset-4 hover:text-navy-900">
                Compare all courses
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 110} className="h-full">
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">How we teach</p>
            <h2 className="section-title mt-2 max-w-2xl">A teaching method built around evidence of learning.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => {
              const Icon = methodIcons[i]
              return (
                <Reveal key={m.title} delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-navy-100 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-300">
                      <Icon />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">{m.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Your journey</p>
            <h2 className="section-title mt-2 max-w-2xl">From first enquiry to a finished portfolio.</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 100} className="h-full">
                  <div className="relative h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1">
                    <span className="font-serif text-3xl font-bold text-gold-500">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honest certification notice */}
      <section className="bg-navy-50 py-12">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl border border-navy-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">About certificates and exams</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-700">{honesty}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Ready to start learning?</h2>
            <p className="mt-2 max-w-xl text-navy-100">Tell us which course interests you and we will share batch details and answer your questions.</p>
          </div>
          <Link to="/contact" className="btn-primary">Send an enquiry</Link>
        </div>
      </section>
    </>
  )
}