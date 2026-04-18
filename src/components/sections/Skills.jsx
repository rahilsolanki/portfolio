import React from 'react'
import { skills, keyHighlights, collaboration, collaborationTools } from '../../data/portfolio'
import { TrendingUp, Users } from 'lucide-react'
import {
  SKILL_ICONS,
  COLLAB_ICONS,
  COLLAB_LABELS,
  CATEGORY_STYLES
} from '../../constants/skills'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Stat from '../ui/Stat'

// ─── Sub-components ────────────────────────────────────────────────────────
function SkillTag({ skill }) {
  const meta = SKILL_ICONS[skill]
  return (
    <Badge 
      label={skill} 
      icon={meta?.Icon} 
      color={meta?.color} 
      className="group"
    />
  )
}

function SkillCard({ title, items, styleConfig }) {
  const { icon, iconBg, iconColor, accentFrom, border } = styleConfig
  return (
    <Card className={`group relative flex flex-col gap-5 ${border}`}>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accentFrom} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className="flex items-center gap-3 relative z-10">
        <span className={`p-2.5 rounded-xl ${iconBg} ${iconColor}`}>{icon}</span>
        <h3 className="text-xs font-bold text-[#f0f0f0] uppercase tracking-widest">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {items.map((skill) => <SkillTag key={skill} skill={skill} />)}
      </div>
    </Card>
  )
}

function CollabCard({ name, desc }) {
  return (
    <Card padding="p-4" glass={false} className="group flex items-start gap-4 border-white/[0.06] bg-[#111]/60 hover:border-violet-500/30 hover:bg-[#141414]/80">
      <span className="mt-0.5 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0 group-hover:shadow-[0_0_8px_2px_rgba(167,139,250,0.5)] transition-shadow duration-300" />
      <div>
        <p className="text-sm font-semibold text-[#e0e0e0]">{name}</p>
        <p className="text-xs text-[#666] mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </Card>
  )
}

function ToolBadge({ toolKey }) {
  const meta = COLLAB_ICONS[toolKey]
  if (!meta) return null
  const { Icon, color } = meta
  return (
    <Card glass={false} padding="px-4 py-3" className="group flex flex-col items-center gap-2 border-white/[0.06] bg-[#111]/60 hover:border-white/20 hover:bg-[#1a1a1a]/80 cursor-default min-w-[72px]">
      <Icon size={24} style={{ color }} className="transition-transform duration-200 group-hover:scale-110" />
      <span className="text-[10px] text-[#777] group-hover:text-[#aaa] transition-colors duration-200 font-medium tracking-wide text-center">
        {COLLAB_LABELS[toolKey]}
      </span>
    </Card>
  )
}

// ─── Main component ────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <Section id="skills" label="Skills & Tools" title="Technical Stack">
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
            <Stat key={h.label} value={h.value} label={h.label} />
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
    </Section>
  )
}
