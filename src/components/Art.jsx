// Original SVG illustrations, so the site needs no stock photos.
// To use real photos later, put them in /public/images and swap these components for <img> tags.

const Frame = ({ children, id }) => (
  <svg viewBox="0 0 600 360" className="h-full w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1b2d52" />
        <stop offset="1" stopColor="#0b1429" />
      </linearGradient>
      <pattern id={`grid-${id}`} width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0V30" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
      </pattern>
    </defs>
    <rect width="600" height="360" fill={`url(#bg-${id})`} />
    <rect width="600" height="360" fill={`url(#grid-${id})`} />
    {children}
  </svg>
)

const Node = ({ x, y, r = 8, fill = '#fbb524' }) => <circle cx={x} cy={y} r={r} fill={fill} />

export function AiArt() {
  const L1 = [90, 160, 230, 300]
  const L2 = [60, 130, 200, 270, 340]
  const L3 = [110, 180, 250]
  const L4 = [160, 200]
  const layers = [
    { x: 130, ys: L1 },
    { x: 260, ys: L2 },
    { x: 390, ys: L3 },
    { x: 500, ys: L4 },
  ]
  const lines = []
  layers.slice(0, -1).forEach((l, i) =>
    l.ys.forEach((y1) =>
      layers[i + 1].ys.forEach((y2) =>
        lines.push(<line key={`${i}-${y1}-${y2}`} x1={l.x} y1={y1} x2={layers[i + 1].x} y2={y2} stroke="#8aa9d9" strokeOpacity="0.28" />)
      )
    )
  )
  return (
    <Frame id="ai">
      {lines}
      {layers.map((l, i) => l.ys.map((y) => <Node key={`${i}-${y}`} x={l.x} y={y} r={9} fill={i === 3 ? '#fbb524' : '#dde7f5'} />))}
    </Frame>
  )
}

export function ShieldArt() {
  return (
    <Frame id="sec">
      <g transform="translate(300 180)">
        <path d="M0 -130l105 42v82c0 75-45 120-105 148-60-28-105-73-105-148v-82z" fill="#12203d" stroke="#fbb524" strokeWidth="4" />
        <path d="M0 -100l78 31v62c0 56-34 90-78 111-44-21-78-55-78-111v-62z" fill="none" stroke="#8aa9d9" strokeOpacity="0.5" strokeWidth="2" />
        <rect x="-30" y="-12" width="60" height="50" rx="6" fill="#fbb524" />
        <path d="M-18 -12v-14a18 18 0 0136 0v14" fill="none" stroke="#fbb524" strokeWidth="8" />
        <circle cx="0" cy="12" r="6" fill="#12203d" />
        <rect x="-2.5" y="14" width="5" height="14" fill="#12203d" />
      </g>
      {[[70, 80], [520, 70], [90, 290], [510, 280]].map(([x, y]) => (
        <g key={x} stroke="#8aa9d9" strokeOpacity="0.5">
          <circle cx={x} cy={y} r="5" fill="#8aa9d9" fillOpacity="0.5" />
          <line x1={x} y1={y} x2={x < 300 ? x + 90 : x - 90} y2={y < 180 ? y + 40 : y - 40} />
        </g>
      ))}
    </Frame>
  )
}

export function NetworkArt() {
  const sw = [[170, 190], [430, 190]]
  const pcs = [[70, 90], [70, 290], [530, 90], [530, 290], [300, 310]]
  return (
    <Frame id="net">
      <g stroke="#8aa9d9" strokeOpacity="0.6" strokeWidth="2">
        <line x1="300" y1="70" x2="170" y2="190" />
        <line x1="300" y1="70" x2="430" y2="190" />
        <line x1="170" y1="190" x2="430" y2="190" strokeDasharray="6 6" />
        <line x1="170" y1="190" x2="70" y2="90" />
        <line x1="170" y1="190" x2="70" y2="290" />
        <line x1="430" y1="190" x2="530" y2="90" />
        <line x1="430" y1="190" x2="530" y2="290" />
        <line x1="300" y1="190" x2="300" y2="310" />
        <line x1="170" y1="190" x2="300" y2="190" />
        <line x1="300" y1="190" x2="430" y2="190" />
      </g>
      <circle cx="300" cy="70" r="30" fill="#fbb524" />
      <path d="M285 70h30M300 55v30" stroke="#12203d" strokeWidth="4" strokeLinecap="round" />
      {sw.map(([x, y]) => (
        <g key={x}>
          <rect x={x - 28} y={y - 18} width="56" height="36" rx="6" fill="#dde7f5" />
          {[-16, -6, 4, 14].map((dx) => <rect key={dx} x={x + dx - 3} y={y - 3} width="6" height="8" fill="#12203d" />)}
        </g>
      ))}
      <rect x="272" y="172" width="56" height="36" rx="6" fill="#3a5fa5" />
      {pcs.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 22} y={y - 16} width="44" height="28" rx="3" fill="#dde7f5" />
          <rect x={x - 17} y={y - 11} width="34" height="18" fill="#12203d" />
          <rect x={x - 12} y={y + 14} width="24" height="4" rx="2" fill="#8aa9d9" />
        </g>
      ))}
    </Frame>
  )
}

export function CloudArt() {
  return (
    <Frame id="cloud">
      <g transform="translate(300 130)">
        <path d="M-120 60a60 60 0 01-6-119 90 90 0 01172-24 70 70 0 0114 143z" fill="#dde7f5" />
        <path d="M-90 40h180" stroke="#8aa9d9" strokeWidth="3" />
      </g>
      {[150, 230, 310, 390, 450].map((x, i) => (
        <g key={x}>
          <line x1={x + 0} y1="215" x2={300 + (x - 300) * 0.5} y2="255" stroke="#8aa9d9" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      ))}
      {[120, 240, 360, 480].map((x) => (
        <g key={x}>
          <rect x={x - 40} y="255" width="80" height="72" rx="8" fill="#1b2d52" stroke="#5a80c2" strokeWidth="2" />
          <rect x={x - 28} y="268" width="56" height="10" rx="3" fill="#3a5fa5" />
          <rect x={x - 28} y="286" width="56" height="10" rx="3" fill="#3a5fa5" />
          <circle cx={x + 20} cy="313" r="4" fill="#fbb524" />
        </g>
      ))}
      <g stroke="#fbb524" strokeWidth="3" strokeLinecap="round">
        <line x1="300" y1="190" x2="300" y2="232" />
        <line x1="300" y1="232" x2="120" y2="232" />
        <line x1="300" y1="232" x2="480" y2="232" />
        {[120, 240, 360, 480].map((x) => <line key={x} x1={x} y1="232" x2={x} y2="255" />)}
      </g>
    </Frame>
  )
}

export const artFor = (icon) => ({ ai: AiArt, shield: ShieldArt, network: NetworkArt, cloud: CloudArt })[icon] || AiArt

// Larger hero illustration: a learning dashboard connected to the four disciplines.
export function HeroArt() {
  return (
    <svg viewBox="0 0 560 460" className="h-auto w-full" role="img" aria-label="Illustration of a learning dashboard connected to AI, security, networking and cloud">
      <rect x="20" y="40" width="520" height="340" rx="18" fill="#12203d" stroke="#3a5fa5" strokeWidth="2" />
      <rect x="20" y="40" width="520" height="38" rx="18" fill="#1b2d52" />
      {[44, 66, 88].map((x, i) => <circle key={x} cx={x} cy="59" r="5" fill={['#fbb524', '#8aa9d9', '#5a80c2'][i]} />)}
      <rect x="48" y="104" width="150" height="14" rx="4" fill="#fbb524" />
      <rect x="48" y="130" width="230" height="8" rx="4" fill="#8aa9d9" fillOpacity="0.6" />
      <rect x="48" y="148" width="190" height="8" rx="4" fill="#8aa9d9" fillOpacity="0.4" />
      <g>
        {[
          ['AI', 48, 180, '#fbb524'],
          ['SEC', 158, 180, '#8aa9d9'],
          ['NET', 268, 180, '#5a80c2'],
          ['CLOUD', 378, 180, '#dde7f5'],
        ].map(([t, x, y, c]) => (
          <g key={t}>
            <rect x={x} y={y} width="100" height="84" rx="10" fill="#1b2d52" stroke={c} strokeOpacity="0.7" />
            <rect x={x + 14} y={y + 14} width="26" height="26" rx="6" fill={c} />
            <text x={x + 14} y={y + 64} fill="#dde7f5" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">{t}</text>
          </g>
        ))}
      </g>
      <g>
        <text x="48" y="304" fill="#8aa9d9" fontSize="11" fontFamily="Inter, sans-serif">Course progress</text>
        {[
          [320, 200, '#fbb524'],
          [320, 150, '#8aa9d9'],
          [320, 110, '#5a80c2'],
        ].map(([y, w, c], i) => (
          <g key={i}>
            <rect x="48" y={314 + i * 16} width="300" height="8" rx="4" fill="#233b6a" />
            <rect x="48" y={314 + i * 16} width={w - 20 + i * 0} height="8" rx="4" fill={c} />
          </g>
        ))}
        <polyline points="380,350 410,330 440,338 470,310 505,300" fill="none" stroke="#fbb524" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(430 10)">
        <circle cx="50" cy="40" r="34" fill="#fbb524" />
        <path d="M28 40l22-12 22 12-22 12z M38 46v10c4 5 20 5 24 0V46" fill="none" stroke="#12203d" strokeWidth="3" strokeLinejoin="round" />
      </g>
      <rect x="150" y="392" width="260" height="14" rx="7" fill="#233b6a" />
      <rect x="220" y="380" width="120" height="14" rx="4" fill="#1b2d52" />
    </svg>
  )
}
