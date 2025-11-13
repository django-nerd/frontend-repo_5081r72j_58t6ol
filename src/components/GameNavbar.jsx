import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#playfield', label: 'Playfield' },
  { href: '#pricing', label: 'Pricing' },
]

export default function GameNavbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur px-4 py-2 text-white">
          <a href="#" className="font-semibold tracking-tight">NebulaPlay</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            {links.map(l => (<a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>))}
            <a href="#get-started" className="rounded-lg bg-white text-slate-900 px-3 py-1.5 font-medium hover:shadow">
              Get started
            </a>
          </nav>
          <button className="sm:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden mx-auto max-w-6xl px-4">
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 text-white">
            {links.map(l => (<a key={l.href} href={l.href} className="block py-2 text-white/80 hover:text-white">{l.label}</a>))}
            <a href="#get-started" className="mt-2 inline-block rounded-lg bg-white text-slate-900 px-3 py-1.5 font-medium">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
