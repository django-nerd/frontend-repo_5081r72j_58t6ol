import { useEffect, useRef } from 'react'

export default function ParallaxForest() {
  const container = useRef(null)
  const layers = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const handle = () => {
      const base = container.current?.getBoundingClientRect()
      if (!base) return
      const center = base.top + base.height / 2
      const dist = (window.innerHeight / 2 - center) / window.innerHeight
      const speeds = [8, 16, 24, 36]
      layers.forEach((r, i) => {
        if (!r.current) return
        r.current.style.transform = `translateY(${dist * speeds[i]}px)`
      })
    }
    handle()
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <section ref={container} className="relative h-[60vh] sm:h-[70vh] overflow-hidden bg-gradient-to-b from-emerald-50 via-emerald-100/60 to-white">
      <div className="absolute inset-0">
        <div ref={layers[0]} className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(90deg,#d1fae5_50%,transparent_0)] [background-size:40px_100%] opacity-40" />
        <div ref={layers[1]} className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(90deg,#a7f3d0_33%,transparent_0)] [background-size:60px_100%] opacity-50" />
        <div ref={layers[2]} className="absolute bottom-0 left-0 right-0 h-56 bg-[linear-gradient(90deg,#6ee7b7_25%,transparent_0)] [background-size:80px_100%] opacity-60" />
        <div ref={layers[3]} className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(90deg,#34d399_20%,transparent_0)] [background-size:110px_100%] opacity-70" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="px-6 text-center">
          <p className="text-emerald-800/80 font-semibold">Feel the breeze</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-emerald-900">Parallax forest</h3>
          <p className="mt-3 max-w-xl mx-auto text-emerald-900/70">Subtle layered motion that moves as you scroll — like trees swaying as you pass.</p>
        </div>
      </div>

      <svg className="pointer-events-none absolute inset-0" viewBox="0 0 1440 400" preserveAspectRatio="none">
        {[...Array(20)].map((_, i) => (
          <g key={i} className="opacity-30">
            <path d="M0 0 Q 10 8, 20 0 T 40 0 T 60 0 T 80 0 T 100 0" stroke="#065f46" strokeWidth="1" fill="none" transform={`translate(${i*70}, ${320 - (i%5)*8})`} />
            <circle cx={i*70+18} cy={312 - (i%5)*8} r={2 + (i%3)} fill="#10b981" />
          </g>
        ))}
      </svg>
    </section>
  )
}
