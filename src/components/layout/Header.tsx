import { useEffect, useState } from 'react'
import { Container } from './Container.tsx'

export function Header() {
  const [activeItem, setActiveItem] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { key: 'home', href: '#home', label: 'Home' },
    { key: 'services', href: '#services', label: 'Services' },
    { key: 'video', href: '#video', label: 'Video' },
    { key: 'about', href: '#about', label: 'About Us' },
    { key: 'contact', href: '#contact', label: 'Contact Us' },
  ] as const

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const resolveActive = () => {
      const hash = window.location.hash.replace('#', '')

      if (!hash || hash === 'home') {
        setActiveItem('home')
        return
      }

      if (hash.startsWith('services') || hash.startsWith('drainage') || hash.startsWith('water-')) {
        setActiveItem('services')
        return
      }

      if (hash === 'video') {
        setActiveItem('video')
        return
      }

      if (hash === 'about') {
        setActiveItem('about')
        return
      }

      if (hash === 'contact') {
        setActiveItem('contact')
      }
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
    `interactive-btn header-btn-soft inline-flex rounded-xl px-3.5 py-2 transition ${
      activeItem === key
        ? 'bg-cyan-600 text-white hover:bg-cyan-500'
        : 'hover:bg-slate-100 hover:text-cyan-700'
    }`

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-100/70 bg-white/85 backdrop-blur-lg">
      <Container className="py-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#home" className="inline-flex items-center gap-3" aria-label="Plumber in DC home">
                <span className="inline-flex items-center gap-2 px-1 py-0.5">
                  <span className="text-[1.95rem] font-black uppercase leading-none tracking-[-0.08em] text-cyan-500 sm:text-[2.1rem]">
                    DC
                  </span>
                  <span className="px-1.5 py-0.5 text-base font-extrabold uppercase leading-none tracking-[0.05em] text-slate-900 sm:text-lg">
                    Plumbing
                  </span>
                </span>
              </a>

              <div className="hidden items-center gap-1.5 md:flex">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="interactive-btn header-btn-soft inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                    <path d="M13.5 8H16V5h-2.5C10.5 5 9 6.8 9 9.5V12H7v3h2v6h3v-6h3l.5-3H12V9.8c0-1.1.3-1.8 1.5-1.8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="interactive-btn header-btn-soft inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                    <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.3-8.3L1 3h6.2l4.3 5.7L18.9 3zm-1.1 16h1.7L6.2 5H4.4l13.4 14z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="interactive-btn header-btn-soft inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                    <path d="M12 7.1A4.9 4.9 0 1012 17a4.9 4.9 0 000-9.8zm0 8.1A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm6.2-8.3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                    <path d="M12 2.8h4.3c2.9 0 4.9 2 4.9 4.9V16c0 2.9-2 4.9-4.9 4.9H7.7c-2.9 0-4.9-2-4.9-4.9V7.7c0-2.9 2-4.9 4.9-4.9H12zm0-1.8H7.7C3.8 1 1 3.8 1 7.7V16c0 3.9 2.8 6.7 6.7 6.7H16c3.9 0 6.7-2.8 6.7-6.7V7.7C22.7 3.8 19.9 1 16 1H12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
                Same-day repairs available
              </p>
              <a
                href="tel:+12028100624"
                className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-[1.7rem] font-black tracking-tight text-transparent sm:text-[2rem]"
              >
                (202) 810-0624
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

          <div className="flex flex-col gap-2 md:hidden">
            <div className="text-left md:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
                Same-day repairs available
              </p>
              <a
                href="tel:+12028100624"
                className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-[1.7rem] font-black tracking-tight text-transparent sm:text-[2rem]"
              >
                (202) 810-0624
              </a>
            </div>

          </div>

          {isMobileMenuOpen ? (
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm shadow-slate-200/70 md:hidden">
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
                <li>
                  <a
                    href="tel:+12028100624"
                    className="interactive-btn mt-1 inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-3.5 py-2.5 text-white hover:bg-cyan-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Call Now: (202) 810-0624
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <nav className="mt-4 hidden rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-sm shadow-slate-200/70 md:block">
          <ul className="flex flex-wrap gap-1 text-sm font-semibold text-slate-700">
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
      </Container>
    </header>
  )
}
