import { useInView } from '../hooks/useInView'
import { skills, keyHighlights, collaboration, collaborationTools } from '../data/portfolio'
import { Layers, Terminal, Cpu, TrendingUp, Users, MessageSquare, Ticket, Globe, Code2 } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiRedux,
  SiHtml5, SiCss, SiTailwindcss, SiMui, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, SiSlack, SiPostman, SiJira, SiConfluence,
} from 'react-icons/si'

// ─── Skill brand icon map ──────────────────────────────────────────────────
const SKILL_ICONS = {
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
  'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { Icon: SiJavascript, color: '#F7DF1E' },
  'Redux': { Icon: SiRedux, color: '#764ABC' },
  'HTML5': { Icon: SiHtml5, color: '#E34F26' },
  'CSS3': { Icon: SiCss, color: '#1572B6' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  'Material UI': { Icon: SiMui, color: '#007FFF' },
  'Bootstrap': { Icon: SiBootstrap, color: '#7952B3' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  'Express.js': { Icon: SiExpress, color: '#ffffff' },
  'MongoDB': { Icon: SiMongodb, color: '#47A248' },
  'REST API': { Icon: Globe, color: '#888888' },
  // 'Git': { Icon: SiGit, color: '#F05032' },
  // 'GitHub': { Icon: SiGithub, color: '#ffffff' },
  // 'Postman': { Icon: SiPostman, color: '#FF6C37' },
  // 'Jira': { Icon: SiJira, color: '#0052CC' },
  // 'Confluence': { Icon: SiConfluence, color: '#0052CC' },
}

// ─── Collab tool icon map ──────────────────────────────────────────────────
const COLLAB_ICONS = {
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: '#ffffff' },
  Slack: { Icon: SiSlack, color: '#E01E5A' },
  MSTeams: { Icon: MessageSquare, color: '#6264A7' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  // ServiceNow: { Icon: Ticket, color: '#62D84E' },
  // Jira: { Icon: SiJira, color: '#0052CC' },
  // Confluence: { Icon: SiConfluence, color: '#0052CC' },
}

const COLLAB_LABELS = {
  Git: 'Git', GitHub: 'GitHub', Slack: 'Slack', MSTeams: 'MS Teams',
  Postman: 'Postman', ServiceNow: 'ServiceNow', Jira: 'Jira', Confluence: 'Confluence',
}

// ─── Skill category config ─────────────────────────────────────────────────
const CATEGORY_STYLES = {
  Frontend: {
    icon: <Layers size={20} />,
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-400',
    accentFrom: 'from-indigo-500/10',
    border: 'group-hover:border-indigo-500/30',
  },
  Backend: {
    icon: <Terminal size={20} />,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    accentFrom: 'from-emerald-500/10',
    border: 'group-hover:border-emerald-500/30',
  },
  'Tools & Platforms': {
    icon: <Cpu size={20} />,
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    accentFrom: 'from-amber-500/10',
    border: 'group-hover:border-amber-500/30',
  },
}

// ─── Sub-components ────────────────────────────────────────────────────────
function SkillTag({ skill }) {
  const meta = SKILL_ICONS[skill]
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold tracking-wide rounded-md bg-white/5 border border-white/[0.08] text-[#b0b0b0] group-hover:border-white/[0.18] transition-colors duration-300">
      {meta ? (
        <meta.Icon size={12} style={{ color: meta.color }} className="flex-shrink-0" />
      ) : (
        <Code2 size={12} className="text-[#555] flex-shrink-0" />
      )}
      {skill}
    </span>
  )
}

function SkillCard({ title, items, styleConfig }) {
  const { icon, iconBg, iconColor, accentFrom, border } = styleConfig
  return (
    <div className={`group relative rounded-2xl border border-white/[0.06] bg-[#111]/80 backdrop-blur-md p-6 flex flex-col gap-5 transition-all duration-300 ${border} hover:bg-[#141414]/90`}>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accentFrom} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className="flex items-center gap-3 relative z-10">
        <span className={`p-2.5 rounded-xl ${iconBg} ${iconColor}`}>{icon}</span>
        <h3 className="text-xs font-bold text-[#f0f0f0] uppercase tracking-widest">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {items.map((skill) => <SkillTag key={skill} skill={skill} />)}
      </div>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="flex-1 min-w-[120px] flex flex-col items-center gap-1.5 py-6 px-4 rounded-2xl border border-white/[0.06] bg-[#111]/80 backdrop-blur-md hover:border-indigo-500/30 transition-colors duration-300">
      <span className="text-3xl font-extrabold bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        {value}
      </span>
      <span className="text-[11px] text-[#666] uppercase tracking-widest text-center">{label}</span>
    </div>
  )
}

function CollabCard({ name, desc }) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-[#111]/60 hover:border-violet-500/30 hover:bg-[#141414]/80 transition-all duration-300">
      <span className="mt-0.5 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0 group-hover:shadow-[0_0_8px_2px_rgba(167,139,250,0.5)] transition-shadow duration-300" />
      <div>
        <p className="text-sm font-semibold text-[#e0e0e0]">{name}</p>
        <p className="text-xs text-[#666] mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ToolBadge({ toolKey }) {
  const meta = COLLAB_ICONS[toolKey]
  if (!meta) return null
  const { Icon, color } = meta
  return (
    <div className="group flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.06] bg-[#111]/60 hover:border-white/20 hover:bg-[#1a1a1a]/80 transition-all duration-200 cursor-default min-w-[72px]">
      <Icon size={24} style={{ color }} className="transition-transform duration-200 group-hover:scale-110" />
      <span className="text-[10px] text-[#777] group-hover:text-[#aaa] transition-colors duration-200 font-medium tracking-wide text-center">
        {COLLAB_LABELS[toolKey]}
      </span>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────
export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <p className="section-label">Skills &amp; Tools</p>
        <h2 className="section-title">Technical Stack</h2>

        {/* ── Skill Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {Object.entries(skills).map(([category, items]) => {
            const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Frontend
            return <SkillCard key={category} title={category} items={items} styleConfig={style} />
          })}
        </div>

        {/* ── Key Highlights ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400"><TrendingUp size={18} /></span>
            <h3 className="text-sm font-bold text-[#f0f0f0] uppercase tracking-widest">Key Highlights</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {keyHighlights.map((h) => (
              <StatCard key={h.label} value={h.value} label={h.label} />
            ))}
          </div>
        </div>

        {/* ── Collaboration ── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-xl bg-violet-500/15 text-violet-400"><Users size={18} /></span>
            <h3 className="text-sm font-bold text-[#f0f0f0] uppercase tracking-widest">Collaboration</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {collaboration.map((c) => (
              <CollabCard key={c.name} name={c.name} desc={c.desc} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {collaborationTools.map((toolKey) => (
              <ToolBadge key={toolKey} toolKey={toolKey} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
