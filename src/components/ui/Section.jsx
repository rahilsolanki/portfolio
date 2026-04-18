import React from 'react'
import { useInView } from '../../hooks/useInView'

/**
 * Section container with entrance animations and standardized headers.
 */
export default function Section({ id, label, title, children, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <section id={id} className={`py-24 px-6 relative ${className}`}>
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {label && <p className="section-label">{label}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
