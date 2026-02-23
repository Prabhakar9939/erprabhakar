const processSteps = [
  'Discovery and planning',
  'UI/UX design and prototyping',
  'Agile development sprints',
  'Quality assurance and launch',
  'Post-launch support and growth',
]

export default function ProcessPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Our Process</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        A transparent, collaborative process designed to deliver outcomes
        quickly without compromising quality.
      </p>
      <ol className="mt-6 space-y-3">
        {processSteps.map((step, index) => (
          <li
            key={step}
            className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <span className="mr-2 font-semibold">{index + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  )
}
