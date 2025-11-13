export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-emerald-900/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 rounded-md bg-gradient-to-tr from-emerald-400 to-sky-500" />
          <span className="font-semibold text-gray-800">Wanderly</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Wanderly, Inc. All rights reserved.</p>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="/test" className="hover:text-gray-700">System status</a>
        </div>
      </div>
    </footer>
  )
}
