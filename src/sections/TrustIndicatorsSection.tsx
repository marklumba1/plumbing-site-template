import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import type { TrustIndicatorsData } from '../lib/siteData.ts'

type TrustIndicatorsSectionProps = {
  data: TrustIndicatorsData
}

export function TrustIndicatorsSection({ data }: TrustIndicatorsSectionProps) {
  return (
    <FullBleedSection className="py-10" ariaLabel={data.ariaLabel} background={data.sectionBackground}>
      <Container>
        <div className="rounded-3xl border border-[var(--theme-primary-100)] bg-white px-5 py-8 shadow-sm sm:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-center text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {data.title}
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.items.map((item) => (
              <article
                key={item.label}
                className="interactive-card rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
              >
                <p className="text-3xl font-black text-[var(--theme-primary-700)]">{item.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
