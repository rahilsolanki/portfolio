import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'
import Section from '../ui/Section'
import Card from '../ui/Card'

const INPUT_BASE =
  'w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none ' +
  'bg-gray-50 dark:bg-[#0e0e0e] border border-gray-200 dark:border-[#222] ' +
  'text-gray-800 dark:text-[#d0d0d0] placeholder-gray-400 dark:placeholder-[#444] ' +
  'focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: personalInfo.web3formsKey,
          from_name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact from ${form.name}`,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <Section id="contact" label="Contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* ── Left: Info card ── */}
        <div className="flex flex-col gap-5">
          <p className="text-gray-500 dark:text-[#777] text-sm leading-relaxed">
            Have a project in mind or want to discuss an opportunity?
            Fill out the form and I'll get back to you within 24 hours.
          </p>

          <Card padding="p-6" className="space-y-4 flex-1 flex flex-col justify-center" hover={false}>
            {/* Email */}
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-[#161616] border border-gray-200 dark:border-[#222] flex items-center justify-center">
                  <Mail size={15} className="text-indigo-600 dark:text-indigo-400" />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-gray-800 dark:text-[#d0d0d0] group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-gray-300 dark:text-[#444] group-hover:text-indigo-500 transition-colors duration-200" />
            </a>

            <div className="border-t border-gray-100 dark:border-[#1a1a1a]" />

            {/* Phone */}
            {personalInfo.phone && (
              <>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-[#161616] border border-gray-200 dark:border-[#222] flex items-center justify-center">
                      <Phone size={15} className="text-violet-600 dark:text-violet-400" />
                    </span>
                    <div>
                      <p className="text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-sm text-gray-800 dark:text-[#d0d0d0] group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-gray-300 dark:text-[#444] group-hover:text-indigo-500 transition-colors duration-200" />
                </a>
                <div className="border-t border-gray-100 dark:border-[#1a1a1a]" />
              </>
            )}

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-[#161616] border border-gray-200 dark:border-[#222] flex items-center justify-center">
                <MapPin size={15} className="text-emerald-600 dark:text-emerald-400" />
              </span>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-sm text-gray-800 dark:text-[#d0d0d0]">{personalInfo.location}</p>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-[#1a1a1a]" />

            {/* Socials */}
            <div className="flex items-center gap-5 pt-1">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 dark:text-[#666] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  <Linkedin size={15} /> LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 dark:text-[#666] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  <Github size={15} /> GitHub
                </a>
              )}
            </div>
          </Card>
        </div>

        {/* ── Right: Contact form ── */}
        <form onSubmit={handleSubmit}>
          <Card padding="p-6 sm:p-8" className="space-y-4 flex flex-col" hover={false}>
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-1.5">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={INPUT_BASE}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={INPUT_BASE}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry, job opportunity, etc."
                value={form.subject}
                onChange={handleChange}
                className={INPUT_BASE}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[10px] text-gray-400 dark:text-[#555] uppercase tracking-wider mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                className={`${INPUT_BASE} resize-none`}
              />
            </div>

            {/* Submit button + status */}
            <div className="flex sm:flex-row flex-col items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status feedback */}
              {status === 'success' && (
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 animate-[fadeUp_0.3s_ease-out]">
                  <CheckCircle size={14} />
                  Message sent successfully!
                </span>
              )}
              {status === 'error' && (
                <span className="inline-flex items-center gap-1.5 text-xs text-red-500 animate-[fadeUp_0.3s_ease-out]">
                  <AlertCircle size={14} />
                  Something went wrong. Try again.
                </span>
              )}
            </div>
          </Card>
        </form>
      </div>
    </Section>
  )
}
