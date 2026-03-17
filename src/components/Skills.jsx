import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'

const CATEGORY_STYLES = {
  Frontend: { tag: 'tag tag-indigo', dot: 'bg-indigo-500' },
  Backend: { tag: 'tag tag-emerald', dot: 'bg-emerald-500' },
  'Tools & Platforms': { tag: 'tag tag-amber', dot: 'bg-amber-500' },
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Stack</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Frontend
            return (
              <div key={category} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                  <h3 className="text-xs font-semibold text-gray-700 dark:text-[#d0d0d0] uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={style.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
