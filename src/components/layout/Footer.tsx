import { Container } from './Container.tsx'
import type { BusinessData, LinkItem } from '../../lib/siteData.ts'

type FooterProps = {
  business: BusinessData
  navigation: LinkItem[]
}

export function Footer({ business, navigation }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-[var(--theme-primary-500)] bg-[var(--theme-primary-600)] text-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h2 className="text-xl font-black">{business.name}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--theme-primary-50)]">
              {business.tagline}
            </p>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--theme-primary-100)]">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-primary-50)]">
              <li>
                <a className="interactive-btn hover:text-white" href={business.phoneHref}>
                  {business.phone}
                </a>
              </li>
              <li>
                <a className="interactive-btn hover:text-white" href={business.emailHref}>
                  {business.email}
                </a>
              </li>
              <li>{business.address}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--theme-primary-100)]">
              Hours
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-primary-50)]">
              <li>Monday to Sunday</li>
              <li>{business.hours}</li>
              <li>{business.license}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--theme-primary-100)]">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--theme-primary-50)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="interactive-btn hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-[var(--theme-primary-500)] pt-4 text-xs text-[var(--theme-primary-100)]">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
