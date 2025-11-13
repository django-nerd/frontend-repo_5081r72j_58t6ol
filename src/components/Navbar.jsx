import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-tr from-emerald-400 to-sky-500 shadow-inner"></span>
          <span className="font-semibold text-gray-800">Wanderly</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#destinations" className="hover:text-gray-900">Destinations</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-900">Stories</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-block px-4 py-2 rounded-md text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#cta" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/70 border border-gray-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
