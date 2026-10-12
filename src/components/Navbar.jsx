import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { MenuIcon, CloseIcon } from './Icons'
import { courses } from '../data/courses'

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'text-navy-900 bg-navy-50' : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)

  return (
    <header className={`sticky top-0 z-40 border-b border-navy-100 bg-white/90 backdrop-blur transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" onClick={close} aria-label="Vinayak World home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          {courses.map((c) => (
            <NavLink key={c.slug} to={`/courses/${c.slug}`} className={linkClass}>
              {c.short}
            </NavLink>
          ))}
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link to="/contact" className="btn-dark ml-3 !py-2">Enquire now</Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy-900 hover:bg-navy-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-navy-100 bg-white lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col gap-1 py-3">
            <NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink>
            <NavLink to="/courses" className={linkClass} onClick={close}>All courses</NavLink>
            {courses.map((c) => (
              <NavLink key={c.slug} to={`/courses/${c.slug}`} className={linkClass} onClick={close}>
                {c.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className={linkClass} onClick={close}>Contact</NavLink>
            <Link to="/contact" onClick={close} className="btn-dark mt-2">Enquire now</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
