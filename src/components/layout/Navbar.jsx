import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-sm shadow-black/20`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + swaying cartoon avatar */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-2.5 group"
          aria-label="Back to top"
        >
          {/* Cartoon avatar with left-right sway */}
          <span className="animate-sway relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-white ring-2 ring-indigo-400/40 dark:ring-indigo-500/30 shadow-md shadow-indigo-400/20 group-hover:ring-indigo-500/70 group-hover:shadow-indigo-400/40 transition-all duration-200">
            {personalInfo.avatarUrl ? (
              <img
                src={personalInfo.avatarUrl}
                alt={`${personalInfo.name} avatar`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
            ) : null}
            {/* Initials fallback */}
            <span
              style={{ display: personalInfo.avatarUrl ? 'none' : 'flex' }}
              className="absolute inset-0 items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xs font-bold"
            >
              {personalInfo.initials}
            </span>
          </span>

          {/* Initials text beside avatar */}
          <span className="text-base font-bold tracking-wide">
            <span className="text-indigo-400">{personalInfo.initials}</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Hire Me */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <div className="md:hidden flex items-center">
          <button
            className="p-1 text-[#888] hover:text-[#f0f0f0] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } bg-[#0d0d0d] border-t border-[#1a1a1a]`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-block text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
