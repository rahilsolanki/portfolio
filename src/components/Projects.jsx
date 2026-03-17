import { ExternalLink, Github, Folder } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { projects, personalInfo } from '../data/portfolio'

const TYPE_STYLES = {
  'Gaming Platform': 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/20',
  'E-commerce': 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20',
  'Admin Dashboard': 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20',
  'Web App': 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/20',
}

function ProjectCard({ project }) {
  const typeStyle = TYPE_STYLES[project.type] ?? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20'

  return (
    <article className="card card-hover p-6 flex flex-col h-full group">
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <Folder size={22} className="text-indigo-400/50 dark:text-indigo-400/60" aria-hidden="true" />
        <div className="flex items-center gap-3">
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.name} GitHub`}
              className="text-gray-300 dark:text-[#444] hover:text-gray-700 dark:hover:text-[#f0f0f0] transition-colors duration-200">
              <Github size={16} />
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-gray-300 dark:text-[#444] hover:text-gray-700 dark:hover:text-[#f0f0f0] transition-colors duration-200">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Type badge */}
      <span className={`self-start text-xs px-2.5 py-1 rounded-full border mb-3 ${typeStyle}`}>
        {project.type}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-800 dark:text-[#e8e8e8] mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-[#666] leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-[#161616] text-gray-500 dark:text-[#666] border border-gray-200 dark:border-[#222]">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 dark:text-[#444] mt-10">
          More projects on{' '}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
            GitHub ↗
          </a>
        </p>
      </div>
    </section>
  )
}
