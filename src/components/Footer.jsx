import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 dark:border-[#111] py-6 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-[#444]">
        <span>© {year} {personalInfo.name}. All rights reserved.</span>
        <span>
          Built with{' '}
          <span className="text-gray-500 dark:text-[#555]">React</span>
          {' '}·{' '}
          <span className="text-gray-500 dark:text-[#555]">Tailwind CSS</span>
          {' '}·{' '}
          <span className="text-gray-500 dark:text-[#555]">Vite</span>
        </span>
      </div>
    </footer>
  )
}
