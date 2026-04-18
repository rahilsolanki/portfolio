import React from 'react'
import {
  Layers,
  Terminal,
  Cpu,
  Globe,
  MessageSquare,
  Ticket
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiSlack,
  SiPostman,
  SiJira,
  SiConfluence
} from 'react-icons/si'

// ─── Skill brand icon map ──────────────────────────────────────────────────
export const SKILL_ICONS = {
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
}

// ─── Collab tool icon map ──────────────────────────────────────────────────
// SiMicrosoftteams & SiServicenow removed from Simple Icons (trademark policy)
// Using lucide-react fallbacks for those two
export const COLLAB_ICONS = {
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: '#ffffff' },
  Slack: { Icon: SiSlack, color: '#E01E5A' },
  MSTeams: { Icon: MessageSquare, color: '#6264A7' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  ServiceNow: { Icon: Ticket, color: '#62D84E' },
  Jira: { Icon: SiJira, color: '#0052CC' },
  Confluence: { Icon: SiConfluence, color: '#0052CC' },
}

export const COLLAB_LABELS = {
  Git: 'Git',
  GitHub: 'GitHub',
  Slack: 'Slack',
  MSTeams: 'MS Teams',
  Postman: 'Postman',
  ServiceNow: 'ServiceNow',
  Jira: 'Jira',
  Confluence: 'Confluence',
}

// ─── Skill category config ─────────────────────────────────────────────────
export const CATEGORY_STYLES = {
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
