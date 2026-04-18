import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'
import Badge from '../ui/Badge'

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0
    const text = personalInfo.name || ''
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedName(text.slice(0, index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Availability badge */}
      <div className="animate-[fadeUp_0.5s_ease-out] mb-7">
        <Badge
          label="Available for opportunities"
          icon={() => <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />}
          className="rounded-full px-4"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 animate-[fadeUp_0.5s_ease-out_0.1s_both] flex items-center justify-center">
        <span className="bg-gradient-to-br from-gray-900 via-indigo-700 to-indigo-500 dark:from-[#f5f5f5] dark:via-[#c8c8f8] dark:to-indigo-400 bg-clip-text text-transparent">
          {displayedName}
        </span>
        {isTyping && <span className="inline-block w-[4px] h-[0.9em] bg-indigo-500 align-middle ml-1 animate-pulse rounded-sm"></span>}
      </h1>

      {/* Role */}
      <div className="text-sm sm:text-base font-medium text-gray-400 dark:text-[#888] mb-4 animate-[fadeUp_0.5s_ease-out_0.2s_both]">
        {personalInfo.title}
        {/* <span className="mx-2 text-gray-300 dark:text-[#333]">·</span> */}
        {/* React · Next.js · TypeScript */}
      </div>

      {/* Tagline */}
      <p className="max-w-lg text-gray-500 dark:text-[#666] text-sm sm:text-base leading-relaxed mb-10 animate-[fadeUp_0.5s_ease-out_0.3s_both]">
        {personalInfo.tagline}
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-[fadeUp_0.5s_ease-out_0.4s_both]">
        <button onClick={() => scrollTo('#projects')} className="btn-primary">
          View My Work
        </button>
        <button onClick={() => scrollTo('#contact')} className="btn-ghost">
          Get In Touch
        </button>
        {personalInfo.resumeUrl && (
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-gray-200 dark:border-[#222] hover:border-gray-300 dark:hover:border-[#333] text-gray-400 dark:text-[#666] hover:text-gray-600 dark:hover:text-[#999] text-sm font-medium transition-all duration-200"
          >
            <Download size={14} />
            Resume
          </a>
        )}
      </div>

      {/* Social links */}
      <div className="flex items-center gap-6 animate-[fadeUp_0.5s_ease-out_0.5s_both]">
        {personalInfo.github && (
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-gray-400 dark:text-[#555] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors duration-200">
            <Github size={19} />
          </a>
        )}
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-gray-400 dark:text-[#555] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors duration-200">
            <Linkedin size={19} />
          </a>
        )}
        <a href={`mailto:${personalInfo.email}`} aria-label="Email"
          className="text-gray-400 dark:text-[#555] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors duration-200">
          <Mail size={19} />
        </a>
      </div>

      {/* Scroll nudge */}
      <button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 dark:text-[#333] hover:text-gray-500 dark:hover:text-[#666] transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
