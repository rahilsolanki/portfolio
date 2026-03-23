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
    <article className="group perspective-[1000px] h-[360px] w-full cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none">

        {/* FRONT FACE (Image + Title) */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5">
          {project.image ? (
            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
          ) : (
            <div className="absolute inset-0 bg-indigo-900/40" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />

          {/* Type Badge Top Left */}
          <div className="absolute top-5 left-5 z-10">
            <span className={`text-[10px] px-3 py-1.5 rounded-full font-medium shadow-sm backdrop-blur-md bg-white/10 border-white/20 text-white border`}>
              {project.type}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 z-10">
            <h3 className="text-2xl font-bold text-white mb-1.5 drop-shadow-md">
              {project.name}
            </h3>
            {project.company && (
              <p className="text-sm text-gray-300 font-medium drop-shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                {project.company}
              </p>
            )}
          </div>
        </div>

        {/* BACK FACE (Details) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub`}
                    className="text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white transition-colors p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                    <Github size={18} />
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white transition-colors p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-[#e8e8e8] mb-3">{project.name}</h4>
            <p className="text-sm text-gray-500 dark:text-[#888] leading-relaxed line-clamp-5">
              {project.description}
            </p>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20">
                {t}
              </span>
            ))}
          </div>
        </div>

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
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
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
