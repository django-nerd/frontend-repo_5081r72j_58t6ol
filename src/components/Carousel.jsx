import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ items = [] }) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)

  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  useEffect(() => {
    if (!trackRef.current) return
    const track = trackRef.current
    track.style.transform = `translateX(-${index * 100}%)`
  }, [index])

  useEffect(() => {
    if (items.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [items.length])

  if (!items.length) return null

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex transition-transform duration-500 ease-out" ref={trackRef} style={{ width: `${items.length * 100}%` }}>
        {items.map((it, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-900 to-slate-800 grid place-items-center text-white">
              {typeof it === 'string' ? (
                <span className="text-2xl font-semibold opacity-90">{it}</span>
              ) : (
                it
              )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:shadow-md">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:shadow-md">
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-slate-900' : 'w-2 bg-slate-300'}`} />)
        )}
      </div>
    </div>
  )
}
