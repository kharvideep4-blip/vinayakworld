export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900">
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
          <path d="M14 18l18 30 18-30" fill="none" stroke="#fbb524" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-bold ${light ? 'text-white' : 'text-navy-900'}`}>Vinayak World</span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.2em] ${light ? 'text-navy-200' : 'text-navy-500'}`}>Technology Institute</span>
      </span>
    </span>
  )
}
