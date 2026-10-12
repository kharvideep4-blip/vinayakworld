import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { courses, INSTITUTE } from '../data/courses'
import { MailIcon, PhoneIcon, PinIcon, ClockIcon, CheckIcon } from '../components/Icons'

const field =
  'mt-1.5 w-full rounded-md border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200'

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: params.get('course') || '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // The form opens the visitor's email app with the enquiry filled in.
  // Replace this with a real backend or a form service (Formspree, Web3Forms) when ready.
  const submit = (e) => {
    e.preventDefault()
    const courseName = courses.find((c) => c.slug === form.course)?.name || 'General enquiry'
    const subject = encodeURIComponent(`Course enquiry: ${courseName}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCourse: ${courseName}\n\n${form.message}`
    )
    window.location.href = `mailto:${INSTITUTE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-16">
        <div className="container-x">
          <p className="eyebrow !text-gold-300">Contact</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Talk to our team</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Ask about batch dates, fees, prerequisites or which course suits your goals.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <form onSubmit={submit} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-semibold">Send an enquiry</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Full name
                <input required name="name" value={form.name} onChange={update} className={field} placeholder="Your name" autoComplete="name" />
              </label>
              <label className="text-sm font-medium">
                Email
                <input required type="email" name="email" value={form.email} onChange={update} className={field} placeholder="you@example.com" autoComplete="email" />
              </label>
              <label className="text-sm font-medium">
                Phone
                <input name="phone" value={form.phone} onChange={update} className={field} placeholder="+91" autoComplete="tel" />
              </label>
              <label className="text-sm font-medium">
                Course of interest
                <select name="course" value={form.course} onChange={update} className={field}>
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Message
                <textarea name="message" rows="5" value={form.message} onChange={update} className={field} placeholder="Tell us about your background and what you want to learn." />
              </label>
            </div>
            <button type="submit" className="btn-dark mt-6 w-full sm:w-auto">Send enquiry</button>
            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm text-navy-700" role="status">
                <CheckIcon className="h-4 w-4 text-gold-600" /> Your email app should open with the enquiry ready to send.
              </p>
            )}
          </form>

          <aside className="space-y-4 lg:col-span-2">
            {[
              [MailIcon, 'Email', INSTITUTE.email],
              [PhoneIcon, 'Phone', INSTITUTE.phone],
              [PinIcon, 'Address', INSTITUTE.address],
              [ClockIcon, 'Office hours', INSTITUTE.hours],
            ].map(([I, label, value]) => (
              <div key={label} className="flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <I />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">{label}</p>
                  <p className="mt-0.5 text-sm font-medium text-navy-900">{value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}
