import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'
import { Layers, Terminal, Cpu } from 'lucide-react'

// Tailwind classes pre-compiled to avoid dynamic string interpolation issues
const CATEGORY_STYLES = {
  Frontend: {
    icon: <Layers size={22} />,
    iconBg: 'bg-indigo-50 dark:bg-indigo-500/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    gradientFrom: 'from-indigo-500/20'
  },
  Backend: {
    icon: <Terminal size={22} />,
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    gradientFrom: 'from-emerald-500/20'
  },
  'Tools & Platforms': {
    icon: <Cpu size={22} />,
    iconBg: 'bg-amber-50 dark:bg-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    gradientFrom: 'from-amber-500/20'
  },
}

function SkillCard({ title, items, styleConfig }) {
  const { icon, iconBg, iconColor, gradientFrom } = styleConfig

  return (
    <div className="relative group rounded-3xl p-px bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent h-full cursor-default overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-tr ${gradientFrom} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className="relative h-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl rounded-[23px] p-6 lg:p-8 flex flex-col shadow-sm group-hover:shadow-xl transition-shadow duration-500 dark:shadow-none">

        <div className="flex items-center gap-4 mb-8">
          <div className={`p-3 rounded-2xl shadow-sm dark:shadow-none ${iconBg} ${iconColor}`}>
            {icon}
          </div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-[#f0f0f0] uppercase tracking-widest">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5 relative z-10">
          {items.map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-[#d0d0d0] shadow-sm dark:shadow-none group-hover:border-gray-300 dark:group-hover:border-white/20 transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <p className="section-label">Skills & Tools</p>
        <h2 className="section-title">Technical Stack</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {Object.entries(skills).map(([category, items]) => {
            const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Frontend
            return (
              <SkillCard key={category} title={category} items={items} styleConfig={style} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
