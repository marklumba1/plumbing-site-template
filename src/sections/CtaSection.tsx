import { Container } from '../components/layout/Container.tsx'
import type { BusinessData, CtaData } from '../lib/siteData.ts'

type CtaSectionProps = {
  data: CtaData
  business: BusinessData
}

export function CtaSection({ data, business }: CtaSectionProps) {
  return (
    <section id="contact" className="pb-10 pt-6 sm:pb-12 sm:pt-8">
      <Container>
        <div className="interactive-card rounded-2xl border border-slate-200 bg-linear-to-r from-[var(--theme-primary-700)] to-[var(--theme-primary-600)] p-6 text-white shadow-lg sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-100)]">{data.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--theme-primary-50)]">{data.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={data.buttonHref}
              className="interactive-btn inline-flex items-center justify-center rounded-full border border-white/50 bg-white px-4 py-2 text-sm font-semibold text-[var(--theme-primary-900)] hover:bg-[var(--theme-primary-50)]"
            >
              {data.buttonLabel}
            </a>
            <a
              href={business.phoneHref}
              className="interactive-btn inline-flex items-center justify-center rounded-full border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {business.phone}
            </a>
          </div>

          <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--theme-primary-100)]">{data.contactCards.addressLabel}</p>
              <p className="mt-1">{business.address}</p>
            </div>
            <div className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--theme-primary-100)]">{data.contactCards.emailLabel}</p>
              <p className="mt-1">{business.email}</p>
            </div>
            <div className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--theme-primary-100)]">{data.contactCards.hoursLabel}</p>
              <p className="mt-1">{business.hours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
