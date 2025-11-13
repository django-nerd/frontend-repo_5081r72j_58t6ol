export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-8 sm:p-12 text-white shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-bold">Plan smarter trips today</h3>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Join thousands using Wanderly to discover, plan, and book adventures with less stress and more joy.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-white/90">Create free account</a>
            <a href="#pricing" className="px-6 py-3 rounded-lg bg-white/10 ring-1 ring-white/40 hover:bg-white/15">View pricing</a>
          </div>
        </div>
      </div>
    </section>
  )
}
