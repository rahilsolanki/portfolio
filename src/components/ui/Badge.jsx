import React from 'react'
import { Code2 } from 'lucide-react'

/**
 * Standard badge/tag component for skills, categories, or tech stack items.
 */
export default function Badge({ 
  label, 
  icon: Icon, 
  color, 
  className = '',
  variant = 'default' 
}) {
  const isDefault = variant === 'default'
  
  const baseClasses = 'inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold tracking-wide rounded-md transition-colors duration-300'
  const variantClasses = isDefault 
    ? 'bg-white/5 border border-white/[0.08] text-[#b0b0b0] group-hover:border-white/[0.18]'
    : 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20'

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {Icon ? (
        <Icon size={12} style={{ color: color }} className="flex-shrink-0" />
      ) : isDefault ? (
        <Code2 size={12} className="text-[#555] flex-shrink-0" />
      ) : null}
      {label}
    </span>
  )
}
