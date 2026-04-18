import React from 'react'

/**
 * A flexible glassmorphism card component with standard borders and backdrop blurs.
 */
export default function Card({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  glass = true 
}) {
  const baseStyles = 'rounded-2xl border border-white/[0.06] transition-all duration-300'
  const glassStyles = glass ? 'bg-[#111]/80 backdrop-blur-md' : 'bg-transparent'
  const hoverStyles = hover ? 'hover:bg-[#141414]/90 hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/20' : ''

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${padding} ${className}`}>
      {children}
    </div>
  )
}
