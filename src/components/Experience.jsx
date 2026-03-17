import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200 dark:bg-[#1e1e1e]" aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-9">
                {/* Dot */}
                <span
                  className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full bg-indigo-500 border-2 border-gray-50 dark:border-[#080808] ring-2 ring-indigo-500/20"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-[#f0f0f0]">{job.role}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-0.5">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-[#555] shrink-0 sm:pt-0.5">{job.period}</span>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((point, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-gray-500 dark:text-[#777] leading-relaxed">
                      <span className="text-indigo-400 dark:text-indigo-500/70 mt-0.5 shrink-0 text-xs">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
