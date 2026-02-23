const projects = [
  {
    name: 'HealthNova Platform',
    summary: 'Patient engagement platform with appointment automation.',
  },
  {
    name: 'FinEdge Mobile',
    summary: 'Mobile-first fintech app that increased retention by 32%.',
  },
  {
    name: 'RetailPulse Analytics',
    summary: 'Business intelligence suite for omnichannel commerce teams.',
  },
]

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        Selected work that demonstrates our software and growth capabilities.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <h2 className="font-semibold">{project.name}</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {project.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
