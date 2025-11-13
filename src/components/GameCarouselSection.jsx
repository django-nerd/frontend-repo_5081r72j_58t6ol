import Carousel from './Carousel'

export default function GameCarouselSection() {
  const slides = [
    'Seamless cross-platform leaderboards',
    'Smart matchmaking with fair queues',
    'Live event orchestration and offers',
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for scale</h2>
            <p className="mt-3 text-slate-600">Streaming ingestion, low-latency edges, and resilient queues keep your game running smooth at any concurrency.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />99.99% uptime and autoscaling</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />SDKs for Unity, Unreal, JS, and Go</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Secure, GDPR-compliant, SSO ready</li>
            </ul>
          </div>
          <Carousel items={slides} />
        </div>
      </div>
    </section>
  )
}
