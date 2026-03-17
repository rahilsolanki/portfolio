import { useInView } from '../hooks/useInView'
import { certifications, education, personalInfo } from '../data/portfolio'
import { Award, GraduationCap, MapPin } from 'lucide-react'

const STATS = [
  { value: '3.5+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Delivered' },
  { value: '6', label: 'Certifications' },
  { value: '3', label: 'Companies' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label">About</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Bio */}
          <div className="space-y-4 text-gray-500 dark:text-[#888] text-sm sm:text-base leading-relaxed">
            <p>
              I'm a versatile Software Engineer with{' '}
              <strong className="text-gray-800 dark:text-[#d0d0d0] font-medium">
                3.5+ years of experience
              </strong>{' '}
              crafting performant, responsive web applications. My core expertise lies in the React
              ecosystem — building complex UIs with React.js, Next.js, and TypeScript while keeping
              code clean, reusable, and maintainable.
            </p>
            <p>
              I've shipped products across{' '}
              <strong className="text-gray-800 dark:text-[#d0d0d0] font-medium">
                e-commerce, real-time gaming, and enterprise dashboards
              </strong>
              , collaborating with cross-functional teams to deliver features that are fast,
              accessible, and scalable. I take ownership from initial design through deployment —
              and care deeply about developer experience as much as user experience.
            </p>
            <p>
              Beyond frontend, I'm comfortable building Node.js/Express backends, designing REST
              APIs, and working within Microsoft Azure and 365 environments. I hold Microsoft
              certifications in Azure, 365, and Power Platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#666]">
                <MapPin size={13} className="text-indigo-600 dark:text-indigo-400" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#666]">
                <GraduationCap size={13} className="text-indigo-600 dark:text-indigo-400" />
                {education.degree} · {education.institution}
              </span>
            </div>
          </div>

          {/* Stats + certs */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="card p-5 flex flex-col justify-center">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-[#666] mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award size={14} className="text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-semibold text-gray-700 dark:text-[#d0d0d0] uppercase tracking-wide">
                  Certifications
                </span>
              </div>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2 text-xs text-gray-500 dark:text-[#777]">
                    <span className="text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>
                      {cert.name}
                      <span className="text-gray-400 dark:text-[#555] ml-1">· {cert.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
