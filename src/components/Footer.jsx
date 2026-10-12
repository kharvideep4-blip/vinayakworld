import { Link } from 'react-router-dom'
import Logo from './Logo'
import { courses, INSTITUTE } from '../data/courses'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed">{INSTITUTE.tagline}. Practical, lab-based training with clear learning outcomes and honest certification guidance.</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Courses</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to={`/courses/${c.slug}`} className="hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{INSTITUTE.email}</li>
            <li>{INSTITUTE.phone}</li>
            <li>{INSTITUTE.address}</li>
            <li>{INSTITUTE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Vinayak World. All rights reserved.</p>
          <p>vinayakworld.com</p>
        </div>
      </div>
    </footer>
  )
}
