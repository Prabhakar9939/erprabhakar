import { ServiceCard } from 'app/components/service-card'
import { primaryServices } from 'app/lib/site'

export default function ServicesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        End-to-end solutions from strategy and design to development,
        optimization, and growth.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {primaryServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
