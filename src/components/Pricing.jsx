export default function Pricing() {
  const plans = [
    { t: 'Starter', p: '$0', f: ['10k MAU', 'Community support', '1 project'] },
    { t: 'Pro', p: '$49', f: ['100k MAU', 'Email support', '5 projects'] },
    { t: 'Scale', p: '$199', f: ['1M MAU', 'Priority support', 'Unlimited projects'] },
  ]

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you scale.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(pl => (
            <div key={pl.t} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{pl.t}</h3>
              <p className="mt-1 text-3xl font-bold text-slate-900">{pl.p}<span className="text-base font-normal text-slate-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pl.f.map(x => (<li key={x} className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" /> {x}</li>))}
              </ul>
              <a href="#get-started" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Choose {pl.t}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
