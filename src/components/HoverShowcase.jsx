import { useState } from 'react'
import { Zap, Shield, Cpu, Stars } from 'lucide-react'

const tiles = [
  { icon: Zap, title: 'Realtime Events', desc: 'Low-latency ingest and fanout.', hue: 'from-yellow-400 to-orange-500' },
  { icon: Shield, title: 'Anti-Cheat', desc: 'Behavioral ML & rules engine.', hue: 'from-emerald-400 to-teal-500' },
  { icon: Cpu, title: 'Matchmaking', desc: 'Skill-based queues & parties.', hue: 'from-sky-400 to-indigo-500' },
  { icon: Stars, title: 'Liveops', desc: 'A/B tests, offers, seasons.', hue: 'from-fuchsia-400 to-pink-500' },
]

export default function HoverShowcase() {
  const [active, setActive] = useState(null)

  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for high-performance games</h2>
          <p className="mt-3 text-slate-600">Hover to explore. Each card highlights with a subtle glow and 3D lift.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t, i) => {
            const Icon = t.icon
            const isActive = active === i
            return (
              <div
                key={t.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`relative group rounded-2xl border border-slate-200 p-5 transition-all duration-300 bg-white/80 ${
                  isActive ? 'shadow-xl -translate-y-1' : 'shadow-sm'
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${t.hue} blur-xl`} />
                <div className="relative">
                  <div className={`h-10 w-10 rounded-lg grid place-items-center bg-slate-900 text-white shadow ${
                    isActive ? 'scale-105' : ''
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-slate-600">{t.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-slate-900/60 group-hover:text-slate-900">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
