import Link from 'next/link'

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <article className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        Learn more →
      </Link>
    </article>
  )
}
