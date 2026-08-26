import { useEffect, useState } from 'react'
import { Container } from './Container.tsx'
import type { BusinessData, LinkItem } from '../../lib/siteData.ts'

type HeaderProps = {
  business: BusinessData
  navigation: LinkItem[]
}

export function Header({ business, navigation }: HeaderProps) {
  const [activeItem, setActiveItem] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const nameParts = business.name.split(' ').filter(Boolean)
  const brandMark = nameParts.slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'PL'
  const brandText = business.name

  const navItems = navigation.map((item) => ({
    ...item,
    key: item.href.replace('#', '') || 'home',
  }))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const resolveActive = () => {
      const hash = window.location.hash.replace('#', '')

      if (!hash) {
        setActiveItem(navItems[0]?.key ?? '')
        return
      }

      const matched = navItems.find((item) => item.key === hash)
      setActiveItem(matched?.key ?? hash)
    }

    resolveActive()
    window.addEventListener('hashchange', resolveActive)

    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnResize)

    return () => {
      window.removeEventListener('hashchange', resolveActive)
      window.removeEventListener('resize', closeMenuOnResize)
    }
  }, [])

  const navLinkClass = (key: string) =>
    `interactive-btn header-btn-soft inline-flex rounded-full px-4 py-2 transition ${
      activeItem === key
        ? 'bg-[var(--theme-primary-600)] text-white hover:bg-[var(--theme-primary-500)]'
        : 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[var(--theme-primary-700)]'
    }`

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--theme-primary-100)]/80 bg-white/70 backdrop-blur-xl">
      <Container className="py-3">
        <div className="rounded-2xl border border-[var(--theme-primary-100)] bg-white/90 p-3 shadow-sm shadow-slate-200/70">
          <div className="flex items-center justify-between gap-3">
            <a href="#home" className="inline-flex min-w-0 items-center gap-3" aria-label={`${business.name} home`}>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--theme-primary-50)] text-lg font-black tracking-tight text-[var(--theme-primary-700)]">
                {brandMark}
              </span>
              <span className="truncate text-sm font-extrabold uppercase tracking-[0.08em] text-slate-900 sm:text-base">
                {brandText}
              </span>
            </a>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={business.phoneHref}
                className="interactive-btn inline-flex items-center justify-center rounded-full border border-[var(--theme-primary-100)] px-4 py-2 text-sm font-bold text-slate-700 hover:border-[var(--theme-primary-300)] hover:text-[var(--theme-primary-700)]"
              >
                {business.phone}
              </a>
              <a
                href="#lead-form"
                className="interactive-btn inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-600)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--theme-primary-500)]"
              >
                Get Estimate
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="interactive-btn header-btn-soft inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          <nav className="mt-3 hidden border-t border-slate-100 pt-3 lg:block">
            <ul className="flex flex-wrap justify-start gap-1.5 text-sm font-semibold text-slate-700">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={navLinkClass(item.key)}
                    onClick={() => {
                      setActiveItem(item.key)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {isMobileMenuOpen ? (
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:hidden">
              <ul className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={`${navLinkClass(item.key)} w-full justify-start`}
                      onClick={() => {
                        setActiveItem(item.key)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 grid gap-2">
                <a
                  href={business.phoneHref}
                  className="interactive-btn inline-flex items-center justify-center rounded-full border border-[var(--theme-primary-100)] px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-[var(--theme-primary-300)] hover:text-[var(--theme-primary-700)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {business.phone}
                </a>
                <a
                  href="#lead-form"
                  className="interactive-btn inline-flex items-center justify-center rounded-full bg-[var(--theme-primary-600)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--theme-primary-500)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Estimate
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
