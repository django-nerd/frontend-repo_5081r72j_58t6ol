import { useRef, useEffect } from 'react'
import { Rocket, Gamepad2, Sparkles } from 'lucide-react'

export default function GameHero() {
  const orb1 = useRef(null)
  const orb2 = useRef(null)
  const orb3 = useRef(null)
  const frame = useRef(0)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      target.current = {
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      }
      if (!frame.current) animate()
    }

    const animate = () => {
      frame.current = requestAnimationFrame(animate)
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      const { x, y } = current.current
      if (orb1.current) orb1.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0) scale(1.05)`
      if (orb2.current) orb2.current.style.transform = `translate3d(${x * -35}px, ${y * -15}px, 0)`
      if (orb3.current) orb3.current.style.transform = `translate3d(${x * 50}px, ${y * -30}px, 0)`
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 pb-24 sm:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-850 text-white">
      <div className="absolute inset-0 -z-10">
        <div ref={orb1} className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div ref={orb2} className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
        <div ref={orb3} className="absolute left-1/2 bottom-[10%] -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" /> New: Realtime analytics for game events
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">Build, launch, and grow your game with a modern SaaS toolkit</h1>
          <p className="mt-4 text-white/70 sm:text-lg">Monetization, matchmaking, telemetry, leaderboards, and liveops—everything you need in one fast, reliable platform.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-2.5 font-medium shadow-sm hover:shadow-md transition-shadow">
              <Rocket className="h-4 w-4" /> Start free
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-medium text-white hover:bg-white/10 transition-colors">
              <Gamepad2 className="h-4 w-4" /> See features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
