import { company } from 'app/lib/site'

export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Contact Quantonix</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Tell us what you want to build. We will respond with a tailored plan.
      </p>
      <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <p>
          <span className="font-semibold">Email:</span> {company.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {company.phone}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {company.location}
        </p>
      </div>
    </section>
  )
}
