import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StatsBar from './components/StatsBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-navy-700">We could not find the page you were looking for.</p>
      <Link to="/" className="btn-dark mt-6">Back to home</Link>
    </section>
  )
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main key={pathname} className="page-enter flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {pathname !== '/' && <StatsBar />}
      <Footer />
    </div>
  )
}
