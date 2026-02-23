import Link from 'next/link'

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/services', name: 'Services' },
  { href: '/website-development', name: 'Web Dev' },
  { href: '/mobile-application-development', name: 'Mobile Apps' },
  { href: '/seo', name: 'SEO' },
  { href: '/digital-marketing', name: 'Marketing' },
  { href: '/portfolio', name: 'Portfolio' },
  { href: '/process', name: 'Process' },
  { href: '/contact', name: 'Contact' },
]

export function Navbar() {
  return (
    <header className="mb-8 md:mb-12">
      <nav id="nav" className="rounded-2xl border border-neutral-200 p-3 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
