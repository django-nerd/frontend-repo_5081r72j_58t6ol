import { useEffect, useRef } from 'react'

export default function Hero() {
  const layer1 = useRef(null)
  const layer2 = useRef(null)
  const layer3 = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      const damp = (v, m) => (v * m).toFixed(2)

      if (layer1.current) layer1.current.style.transform = `translate3d(${damp(-x, 12)}px, ${damp(-y, 12)}px, 0)`
      if (layer2.current) layer2.current.style.transform = `translate3d(${damp(x, 24)}px, ${damp(y, 24)}px, 0)`
      if (layer3.current) layer3.current.style.transform = `translate3d(${damp(-x, 40)}px, ${damp(y, 40)}px, 0)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-emerald-50" />

      <div className="absolute -top-20 right-1/4 w-[50rem] h-[50rem] rounded-full bg-emerald-200/40 blur-3xl" ref={layer1} />
      <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-sky-200/40 blur-3xl" ref={layer2} />
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[28rem] h-[28rem] rounded-full bg-teal-200/50 blur-3xl" ref={layer3} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 ring-1 ring-black/5 text-sm text-emerald-700">
            New • AI Itineraries • Carbon-smart routes
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Build your dream trips with a magical travel OS
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Plan, book, and manage travel like a pro. Real-time prices, smart suggestions, and collaborative planning — all in one streamlined workspace.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Get started free</a>
            <a href="#features" className="px-6 py-3 rounded-lg bg-white ring-1 ring-gray-200 text-gray-700 hover:bg-gray-50">See features</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-gray-600">
            <div><span className="text-gray-900 font-semibold">20k+</span> teams planning with Wanderly</div>
            <div className="h-5 w-px bg-gray-200" />
            <div>Offset your footprint automatically</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Coastal mountains" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="text-sm">
                <p className="font-semibold">Alpine Coast • 6 days</p>
                <p className="text-white/80">Curated by Wanderly</p>
              </div>
              <button className="px-4 py-2 rounded-md bg-white/90 text-gray-900 hover:bg-white">Preview</button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaves/trees */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <g className="opacity-20">
          <path d="M100 700 C 150 650, 200 650, 250 700 S 350 750, 400 700" fill="none" stroke="#065f46" strokeWidth="3" />
          <circle cx="240" cy="690" r="6" fill="#10b981" />
          <circle cx="380" cy="695" r="5" fill="#34d399" />
        </g>
      </svg>
    </section>
  )
}
