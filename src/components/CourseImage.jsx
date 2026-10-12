import { useState } from 'react'
import { artFor } from './Art'

// Shows /public/images/courses/<slug>.jpg when it exists.
// Falls back to the built-in SVG illustration, so the site never shows a broken image.
export default function CourseImage({ course, className = '' }) {
  const [failed, setFailed] = useState(false)
  const Art = artFor(course.icon)
  return (
    <div className={`h-full w-full ${className}`}>
      {failed ? (
        <Art />
      ) : (
        <img
          src={`/images/courses/${course.slug}.jpg`}
          alt={`${course.name} course`}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
