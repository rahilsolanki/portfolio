import { Code, Zap, Layout, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { freelance, personalInfo } from '../../data/portfolio'

const ICONS = {
  code: Code,
  zap: Zap,
  layout: Layout,
  refresh: RefreshCw,
}

function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || Code

  return (
    <div className="card card-hover p-5 flex gap-4 items-start">
      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center">
        <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-[#e8e8e8] mb-1">
          {service.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-[#666] leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default function Freelance() {
  const [ref, inView] = useInView()

  return (
    <section id="freelance" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label">Freelance</p>
        <h2 className="section-title">{freelance.headline}</h2>

        <p className="text-gray-500 dark:text-[#777] text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          {freelance.description}
        </p>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {freelance.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Process steps */}
        <h3 className="text-xs font-semibold tracking-[0.15em] text-indigo-600 dark:text-indigo-400 uppercase mb-6">
          How I Work
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {freelance.process.map((item) => (
            <div key={item.step} className="card p-5 text-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400/60 block mb-2">
                {item.step}
              </span>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-[#d0d0d0] mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 dark:text-[#666] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: stack + availability + CTA */}
        <div className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            {/* Preferred stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {freelance.preferredStack.map((tech) => (
                <span key={tech} className="tag tag-indigo">{tech}</span>
              ))}
            </div>
            {/* Availability */}
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-[#666]">
              <CheckCircle size={13} className="text-emerald-500" />
              {freelance.availability}
            </div>
          </div>

          <a
            href={`mailto:${personalInfo.email}?subject=Freelance%20Project%20Inquiry`}
            className="btn-primary inline-flex items-center justify-center gap-2 shrink-0 text-center w-full sm:w-auto"
          >
            Discuss a Project
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
