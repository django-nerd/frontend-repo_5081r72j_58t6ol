import { useEffect, useRef } from 'react'
import { Globe2, MapPin, Plane, Leaf } from 'lucide-react'

export default function Features() {
  const refs = Array.from({ length: 4 }, () => useRef(null))

  useEffect(() => {
    const onScroll = () => {
      refs.forEach((r, i) => {
        const el = r.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const inView = rect.top < window.innerHeight * 0.85
        el.style.transform = inView ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.98)'
        el.style.opacity = inView ? '1' : '0'
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { icon: Globe2, title: 'AI Itineraries', text: 'Generate day-by-day plans tailored to your vibe and budget.' },
    { icon: MapPin, title: 'Live Maps', text: 'Offline-friendly maps, saved spots, and smart routing.' },
    { icon: Plane, title: 'Smart Booking', text: 'Track prices and auto-book when your rules match.' },
    { icon: Leaf, title: 'Eco Mode', text: 'Greener routes and auto carbon offsets for every trip.' },
  ]

  return (
    <section id="features" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-emerald-50/40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything for effortless travel</h2>
          <p className="mt-3 text-gray-600">We bring planning, booking, and collaboration into one clean workspace.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={it.title} ref={refs[idx]} className="p-6 rounded-xl bg-white/80 ring-1 ring-black/5 shadow-sm transition-all duration-700">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
