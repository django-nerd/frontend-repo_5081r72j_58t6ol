import { useEffect, useRef } from 'react'

// Fullscreen playfield with many separated sprite-like images that parallax to cursor
export default function ParallaxPlayfield() {
  const container = useRef(null)
  const layers = useRef([])
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const el = container.current
    if (!el) return

    const elems = Array.from(el.querySelectorAll('[data-depth]'))
    layers.current = elems

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const rx = (e.clientX - rect.left) / rect.width - 0.5
      const ry = (e.clientY - rect.top) / rect.height - 0.5
      target.current = { x: rx, y: ry }
      if (!raf.current) animate()
    }

    const animate = () => {
      raf.current = requestAnimationFrame(animate)
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      const { x, y } = current.current
      for (const node of layers.current) {
        const d = parseFloat(node.getAttribute('data-depth') || '0')
        const tx = x * d * 40
        const ty = y * d * 40
        node.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      }
    }

    el.addEventListener('mousemove', onMove)

    return () => {
      el.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  const sprite = (depth, className, style) => (
    <div data-depth={depth} className={`absolute will-change-transform ${className}`} style={style} />
  )

  return (
    <section className="relative min-h-screen bg-slate-950 text-white">
      <div ref={container} className="relative h-[100svh] overflow-hidden">
        {/* background stars */}
        {sprite(0.05, 'h-1 w-1 rounded-full bg-white/30', { left: '10%', top: '20%' })}
        {sprite(0.05, 'h-1 w-1 rounded-full bg-white/20', { left: '30%', top: '10%' })}
        {sprite(0.05, 'h-1 w-1 rounded-full bg-white/20', { left: '70%', top: '30%' })}
        {sprite(0.05, 'h-1 w-1 rounded-full bg-white/30', { left: '80%', top: '15%' })}

        {/* rocks */}
        {sprite(0.25, 'h-28 w-28 rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 shadow-2xl', { left: '5%', bottom: '10%', rotate: '6deg' })}
        {sprite(0.35, 'h-24 w-24 rounded-xl bg-gradient-to-br from-slate-700 to-slate-500 shadow-xl', { left: '20%', bottom: '18%', rotate: '-8deg' })}
        {sprite(0.5, 'h-36 w-36 rounded-xl bg-gradient-to-br from-slate-700 to-slate-500 shadow-2xl', { left: '65%', bottom: '12%', rotate: '3deg' })}

        {/* trees */}
        {sprite(0.3, 'h-40 w-24 bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-b-[40%] rounded-t-[45%] shadow-xl', { left: '12%', bottom: '14%' })}
        {sprite(0.45, 'h-56 w-28 bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-b-[45%] rounded-t-[45%] shadow-xl', { left: '48%', bottom: '10%' })}
        {sprite(0.6, 'h-44 w-24 bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-b-[45%] rounded-t-[45%] shadow-xl', { left: '78%', bottom: '16%' })}

        {/* leaves */}
        {sprite(0.7, 'h-4 w-7 bg-emerald-400/80 rounded-full', { left: '30%', top: '30%', rotate: '-20deg' })}
        {sprite(0.8, 'h-3 w-6 bg-emerald-300/90 rounded-full', { left: '40%', top: '40%', rotate: '15deg' })}
        {sprite(0.9, 'h-5 w-9 bg-emerald-500/80 rounded-full', { left: '60%', top: '22%', rotate: '35deg' })}
        {sprite(1.0, 'h-3 w-5 bg-emerald-400/90 rounded-full', { left: '70%', top: '45%', rotate: '-10deg' })}

        {/* character placeholder */}
        {sprite(0.95, 'h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shadow-[0_0_60px_-10px_rgba(56,189,248,0.6)]', { left: '50%', top: '50%', transform: 'translate(-50%,-50%)' })}

        <div className="absolute inset-x-0 bottom-10 text-center pointer-events-none">
          <p className="text-white/70">Move your mouse to explore the scene</p>
        </div>
      </div>
    </section>
  )
}
