import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { courses, honesty } from '../data/courses'

export default function Courses() {
  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-16">
        <div className="container-x">
          <p className="eyebrow !text-gold-300">Courses</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Choose your programme</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Each programme has a full module-wise syllabus, practical labs, a capstone and a certification pathway.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <h2 className="text-2xl font-semibold">Compare at a glance</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-card">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Course</th>
                  <th className="px-5 py-3 font-semibold">Duration</th>
                  <th className="px-5 py-3 font-semibold">Guided hours</th>
                  <th className="px-5 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {courses.map((c) => (
                  <tr key={c.slug} className="align-top">
                    <td className="px-5 py-4 font-semibold">
                      <Link to={`/courses/${c.slug}`} className="underline-offset-4 hover:underline">{c.name}</Link>
                    </td>
                    <td className="px-5 py-4 text-navy-700">{c.duration}</td>
                    <td className="px-5 py-4 text-navy-700">{c.guidedHours}</td>
                    <td className="px-5 py-4 text-navy-700">{c.audience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-600">{honesty}</p>
        </div>
      </section>
    </>
  )
}
