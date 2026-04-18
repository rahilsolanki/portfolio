import React from 'react'

/**
 * Standard Stat component for "Number + Label" patterns.
 */
export default function Stat({ value, label, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 py-6 px-4 rounded-2xl border border-white/[0.06] bg-[#111]/80 backdrop-blur-md hover:border-indigo-500/30 transition-colors duration-300 ${className}`}>
      <span className="text-3xl font-extrabold bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        {value}
      </span>
      <span className="text-[11px] text-[#666] uppercase tracking-widest text-center">{label}</span>
    </div>
  )
}
