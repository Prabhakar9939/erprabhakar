import Link from 'next/link'
import { company } from 'app/lib/site'

export default function Footer() {
  return (
    <footer className="mb-12 mt-10 rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">{company.name}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Building high-impact software and growth engines for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            {company.email}
            <br />
            {company.phone}
            <br />
            {company.location}
          </p>
        </div>
      </div>
      <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  )
}
