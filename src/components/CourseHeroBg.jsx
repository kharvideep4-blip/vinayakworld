// Animated background for the course page hero: soft glowing orbs and floating particles.
// Pure CSS animation, no image needed. Edit the arrays below to change count, colour or position.

const orbs = [
  { top: '10%', left: '15%', size: 420, color: 'rgba(58,95,165,0.30)', anim: 'orb-float-slow' },
  { bottom: '5%', right: '10%', size: 360, color: 'rgba(251,181,36,0.12)', anim: 'orb-float-medium' },
  { top: '55%', left: '55%', size: 220, color: 'rgba(138,169,217,0.14)', anim: 'orb-float-fast' },
]

// color, glow, size (px), position, animation duration (s) and delay (s)
const particles = [
  { top: '12%', left: '8%', size: 5, color: '#8aa9d9', dur: 8, delay: 0 },
  { top: '22%', left: '18%', size: 3, color: '#ffffff', dur: 10, delay: 1.2 },
  { top: '35%', left: '6%', size: 4, color: '#fbb524', dur: 9, delay: 0.6 },
  { top: '70%', left: '12%', size: 3, color: '#ffffff', dur: 11, delay: 2 },
  { top: '82%', left: '28%', size: 4, color: '#8aa9d9', dur: 9, delay: 3 },
  { top: '15%', left: '40%', size: 3, color: '#ffffff', dur: 12, delay: 0.3 },
  { top: '60%', left: '42%', size: 5, color: '#fbb524', dur: 8, delay: 1.8 },
  { top: '28%', left: '58%', size: 4, color: '#8aa9d9', dur: 10, delay: 2.5 },
  { top: '8%', left: '72%', size: 3, color: '#ffffff', dur: 9, delay: 0.9 },
  { top: '45%', left: '78%', size: 5, color: '#fbb524', dur: 11, delay: 1.5 },
  { top: '75%', left: '68%', size: 3, color: '#ffffff', dur: 10, delay: 3.2 },
  { top: '20%', left: '90%', size: 4, color: '#8aa9d9', dur: 8, delay: 2.2 },
  { top: '88%', left: '88%', size: 3, color: '#ffffff', dur: 12, delay: 0.5 },
  { top: '52%', left: '25%', size: 3, color: '#8aa9d9', dur: 9, delay: 4 },
  { top: '92%', left: '50%', size: 4, color: '#fbb524', dur: 10, delay: 1 },
  { top: '38%', left: '95%', size: 3, color: '#ffffff', dur: 11, delay: 2.8 },
]

export default function CourseHeroBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Glowing orbs */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${o.anim}`}
          style={{
            top: o.top,
            bottom: o.bottom,
            left: o.left,
            right: o.right,
            width: o.size,
            height: o.size,
            background: o.color,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
