// ─── Personal Info ────────────────────────────────────────────────────────────
// TODO: Replace placeholder values with your real name, email, and profile URLs
export const personalInfo = {
  name: 'Solanki Rahil',
  initials: '',
  title: 'Software Engineer',
  tagline:
    'Building performant, scalable web apps with React, Next.js & TypeScript — 2.5+ years of shipping real products.',
  email: 'rahilsolanki19@gmail.com',
  phone: '+919157068623', // TODO: Replace with your full number
  location: 'Navsari, Gujarat, India',
  linkedin: 'https://www.linkedin.com/in/rahilsolanki', // TODO: Replace with your LinkedIn URL
  github: 'https://github.com/rahilsolanki',       // TODO: Replace with your GitHub URL
  resumeUrl: '/resume.pdf',                         // TODO: Add your resume PDF to /public/

  // Profile avatar — swap with any image path inside /public/
  avatarUrl: '/avatar.png',

  // Web3Forms access key — get yours free at https://web3forms.com
  // 1. Go to web3forms.com  2. Enter your email  3. Paste the key here
  web3formsKey: 'd79dad03-525d-48bf-ac23-b1e0f869cb28', // TODO: Replace with your Web3Forms key
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  Frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Redux Toolkit',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Material UI',
    'Bootstrap',
  ],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Postman',
    'Microsoft 365',
    'ServiceNow',
    'Active Directory',
    'Azure',
    'VDI',
  ],
}

// ─── Work Experience ──────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'Software Engineer',
    company: 'CoderKube Technology',
    period: 'Jul 2025 – Present',
    highlights: [
      'Built E-commerce and Gaming platforms using React.js, TypeScript, and Redux Toolkit for responsive and engaging user experiences.',
      'Designed and optimized APIs with Node.js, Express, and MongoDB, supporting 10k+ daily transactions and thousands of concurrent players.',
      'Developed custom reusable components and theming systems, reducing duplicate code by 30%.',
      'Improved performance and cross-browser compatibility, cutting load times by 25%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'MD Tech',
    period: 'Nov 2024 – Jul 2025',
    highlights: [
      'Built reusable React and TypeScript components, helping the team ship features 20% faster.',
      'Managed app state with Redux Toolkit to ensure dashboards updated smoothly.',
      'Integrated APIs with backend engineers, ensuring end-to-end reliability.',
      'Assisted in deployments and debugging, improving release stability.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'TJCG',
    period: 'Aug 2023 – Oct 2024',
    highlights: [
      'Developed mobile-friendly UIs with Next.js and React, enhancing usability across devices.',
      'Optimized component libraries, reducing duplicate code and development time by 25%.',
      'Contributed to Agile sprints, delivering features on time with high quality.',
      'Collaborated with product and API teams to ensure scalable frontend integration.',
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    name: 'Sudia League',
    type: 'Gaming Platform',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    description:
      'Developed frontend modules and RESTful APIs for a real-time gaming platform. Integrated backend services supporting live user interactions, leaderboards, and dynamic game features.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: '#', // TODO: Replace with real GitHub URL
    live: 'https://primeeleague.com/prime',   // TODO: Replace with live demo URL
    featured: true,
    company: 'CoderKube Technology',
  },
  {
    name: 'JDWebnShip',
    type: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    description:
      'Built a theme-based e-commerce storefront from scratch with React.js and integrated third-party APIs. Migrated the entire frontend to Next.js, improving SEO scores and page load performance.',
    tech: ['React.js', 'Next.js', 'REST API', 'CSS3', 'JavaScript'],
    github: '#',
    live: 'https://moinjd.jdwebnship.com/',
    featured: true,
    company: 'CoderKube Technology',
  },
  {
    name: 'ISSO',
    type: 'Admin Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description:
      'Developed a full admin dashboard and user portal with REST API integration. Delivered a fully responsive UI with role-based access patterns and real-time data updates.',
    tech: ['React.js', 'TypeScript', 'REST API', 'Tailwind CSS'],
    github: '#',
    live: 'https://isso.tjcg.in/login',
    featured: false,
    company: 'TJCG',
  },
  {
    name: 'Virtual Afsar',
    type: 'Web App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description:
      'Built reusable frontend modules with complete API integration. Ensured cross-platform compatibility and a consistent, accessible user experience across major browsers and devices.',
    tech: ['React.js', 'JavaScript', 'REST API', 'Bootstrap'],
    github: '#',
    live: '#',
    featured: false,
    company: 'TJCG',
  },
  {
    name: 'Login and signup From with validation',
    type: 'npm package',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    description: 'A simple and reusable login and signup form with validation.',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/rahilsolanki/loginForm',
    live: 'https://github.com/rahilsolanki/loginForm',
    featured: false,
    company: 'Personal Project',
  }
]

// ─── Freelance ────────────────────────────────────────────────────────────
export const freelance = {
  headline: 'Available for Freelance Projects',
  description:
    "I take on select freelance work — from full builds to targeted sprints. If you need a reliable frontend engineer who ships fast and communicates clearly, let's talk.",
  services: [
    {
      title: 'Frontend Development',
      description: 'Custom React/Next.js web applications with responsive, pixel-perfect UIs.',
      icon: 'code',
    },
    {
      title: 'Performance Optimization',
      description: 'Audit and fix Core Web Vitals, reduce bundle size, and speed up load times.',
      icon: 'zap',
    },
    {
      title: 'UI/UX Implementation',
      description: 'Turn Figma/Adobe designs into production-ready, accessible components.',
      icon: 'layout',
    },
    {
      title: 'Migration & Upgrades',
      description: 'Migrate legacy codebases to React/Next.js or upgrade to latest frameworks.',
      icon: 'refresh',
    },
  ],
  process: [
    { step: '01', title: 'Discovery', description: 'Understand scope, goals, and timeline.' },
    { step: '02', title: 'Proposal', description: 'Clear estimate with milestones and pricing.' },
    { step: '03', title: 'Build', description: 'Iterative development with regular check-ins.' },
    { step: '04', title: 'Deliver', description: 'Polished handoff with documentation and support.' },
  ],
  availability: 'Open to projects starting immediately',
  preferredStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
}

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  { name: 'Microsoft 365 Fundamentals', issuer: 'Microsoft' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
  { name: 'Power Platform Fundamentals', issuer: 'Microsoft' },
  { name: 'Google IT Support Fundamentals', issuer: 'Google' },
  { name: 'SQL & Relational Databases', issuer: 'Coursera' },
  { name: 'React JS', issuer: 'Udemy' },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree: 'B.Tech in Information Technology',
  institution: 'Parul University',
  period: '2016 – 2020',
}
