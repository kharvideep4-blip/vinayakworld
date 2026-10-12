import { Link } from 'react-router-dom'
import CourseImage from './CourseImage'
import { iconFor, ArrowIcon, ClockIcon } from './Icons'

export default function CourseCard({ course }) {
  const Icon = iconFor(course.icon)
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500"
    >
      <div className="relative h-48 overflow-hidden bg-navy-900">
        <CourseImage course={course} className="transition duration-700 ease-out group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex min-h-[3.5rem] items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700 transition duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
            <Icon />
          </span>
          <h3 className="text-xl font-semibold leading-snug text-navy-900">{course.name}</h3>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">{course.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-3 whitespace-nowrap border-t border-navy-100 pt-4 text-sm">
          <span className="flex items-center gap-1.5 text-navy-600">
            <ClockIcon className="h-4 w-4" /> {course.cardDuration}
          </span>
          <span className="flex items-center gap-1 font-semibold text-navy-900">
            View syllabus <ArrowIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
