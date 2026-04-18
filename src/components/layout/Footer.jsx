import { personalInfo } from '../../data/portfolio'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    href: personalInfo.github,
    show: !!personalInfo.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    show: !!personalInfo.linkedin,
    external: true,
  },
  {
    icon: Mail,
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    show: !!personalInfo.email,
    external: false,
  },
  {
    icon: Phone,
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    show: !!personalInfo.phone,
    external: false,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-100 dark:border-[#111] transition-colors duration-300 overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/60 dark:to-[#060606]/80 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-10">

        {/* Name + tagline */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-[#e8e8e8]">
            {personalInfo.name}
          </span>
          <span className="text-xs text-gray-400 dark:text-[#555] max-w-xs leading-relaxed">
            {personalInfo.title} · Open for opportunities
          </span>
        </div>

        {/* Icon-only social row */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.filter((l) => l.show).map(({ icon: Icon, label, href, external }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1e1e1e] bg-white dark:bg-[#0e0e0e] text-gray-500 dark:text-[#666] hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200"
            >
              <Icon size={16} strokeWidth={1.8} />
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white bg-gray-900 dark:bg-[#111] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Thin divider */}
        <div className="w-16 h-px bg-gray-200 dark:bg-[#1a1a1a]" />

        {/* Copyright */}
        <p className="text-[11px] text-gray-400 dark:text-[#333] tracking-wide">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
