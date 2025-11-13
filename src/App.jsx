import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxForest from './components/ParallaxForest'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ParallaxForest />
        <section id="pricing" className="py-24 sm:py-28 bg-gradient-to-b from-white to-sky-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
              <p className="mt-3 text-gray-600">Start free, upgrade when you need more power.</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{t:'Free',p:'$0',f:['3 trips','Shared boards','Community templates']},{t:'Pro',p:'$12',f:['Unlimited trips','Price alerts','Offline maps']},{t:'Teams',p:'$29',f:['Team workspaces','Approvals','Priority support']}].map((pl)=> (
                <div key={pl.t} className="p-6 rounded-2xl bg-white/80 ring-1 ring-black/5 shadow-sm">
                  <h3 className="text-lg font-semibold">{pl.t}</h3>
                  <p className="mt-1 text-3xl font-bold">{pl.p}<span className="text-base font-normal text-gray-500">/mo</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {pl.f.map((x)=> (<li key={x} className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" /> {x}</li>))}
                  </ul>
                  <a href="#cta" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Choose {pl.t}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
