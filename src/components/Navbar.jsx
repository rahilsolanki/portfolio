import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#080808]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
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
                  // fallback to initials if image fails to load
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
            <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.initials}</span>
            {/* <span className="text-gray-900 dark:text-[#f0f0f0]">.</span> */}
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-gray-500 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + Hire Me */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-gray-400 dark:text-[#666] hover:text-gray-700 dark:hover:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-gray-400 dark:text-[#666] hover:text-gray-700 dark:hover:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-200"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="p-1 text-gray-400 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-[#0d0d0d] border-t border-gray-100 dark:border-[#1a1a1a]`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-gray-500 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors duration-200"
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
