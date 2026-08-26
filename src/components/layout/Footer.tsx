import { Container } from './Container.tsx'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Projects', href: '#projects' },
]

export function Footer() {
  return (
    <footer className="mt-10 border-t border-cyan-500/40 bg-cyan-600 text-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h2 className="text-xl font-black">Plumber in DC</h2>
            <p className="mt-3 text-sm leading-6 text-cyan-50/95">
              Trusted plumbing support across Washington, DC with same-day scheduling,
              transparent pricing, and licensed technicians.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-cyan-50/95">
              <li>
                <a className="interactive-btn hover:text-white" href="tel:+12028100624">
                  (202) 810-0624
                </a>
              </li>
              <li>
                <a className="interactive-btn hover:text-white" href="mailto:service@dlplumbingdc.com">
                  service@dlplumbingdc.com
                </a>
              </li>
              <li>620 Park Rd NW #22, Washington, DC 20010</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
              Hours
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-cyan-50/95">
              <li>Monday to Sunday</li>
              <li>Open 24 Hours</li>
              <li>Emergency Dispatch Available</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-cyan-50/95">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a className="interactive-btn hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-cyan-400/40 pt-4 text-xs text-cyan-100/90">
          <p>© {new Date().getFullYear()} Plumber in DC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
