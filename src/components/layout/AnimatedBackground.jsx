const PARTICLES = [
  { left: '10%',  top: '72%', delay: '0s'   },
  { left: '25%',  top: '80%', delay: '1.1s' },
  { left: '45%',  top: '83%', delay: '2.4s' },
  { left: '62%',  top: '76%', delay: '0.7s' },
  { left: '76%',  top: '81%', delay: '3.0s' },
  { left: '88%',  top: '70%', delay: '1.8s' },
  { left: '34%',  top: '77%', delay: '4.2s' },
  { left: '55%',  top: '88%', delay: '2.0s' },
]

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Orb 1 — indigo, top-center */}
      <div className="anim-orb-1 orb orb-1" />

      {/* Orb 2 — violet, bottom-right */}
      <div className="anim-orb-2 orb orb-2" />

      {/* Orb 3 — blue, left */}
      <div className="anim-orb-3 orb orb-3" />

      {/* Drifting dot grid */}
      <div className="animated-grid absolute inset-0 opacity-[0.07] dark:opacity-[0.04]" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="anim-particle absolute w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
}
