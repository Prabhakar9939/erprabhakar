import Image from 'next/image'
import Link from 'next/link'
import { ServiceCard } from 'app/components/service-card'
import { company, primaryServices, stats } from 'app/lib/site'

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-8 rounded-3xl border border-neutral-200 p-6 md:grid-cols-2 md:p-10 dark:border-neutral-800">
        <div>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Software Development Company
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Build faster with {company.name}
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            We design and deliver high-performing software products and growth
            systems for ambitious brands.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-lg bg-black px-5 py-3 text-sm text-white dark:bg-white dark:text-black"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-300 px-5 py-3 text-sm dark:border-neutral-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/logo.svg" alt="Quantonix logo" width={260} height={260} priority />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Core Services</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {primaryServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
