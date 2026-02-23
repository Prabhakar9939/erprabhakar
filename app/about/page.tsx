export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">About Quantonix</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Quantonix is a full-service software development company focused on
        building practical digital products that create measurable business
        impact.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          'Product Engineering Excellence',
          'Data-Driven Delivery',
          'Transparent Client Collaboration',
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <h2 className="font-semibold">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
