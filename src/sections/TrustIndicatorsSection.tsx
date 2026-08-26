import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import { StatCard } from '../components/ui/StatCard.tsx'
import type { TrustIndicatorsData } from '../lib/siteData.ts'

type TrustIndicatorsSectionProps = {
  data: TrustIndicatorsData
}

export function TrustIndicatorsSection({ data }: TrustIndicatorsSectionProps) {
  return (
    <FullBleedSection className="py-10" ariaLabel={data.ariaLabel} background={data.sectionBackground}>
      <Container>
        <div className="rounded-3xl border border-[var(--theme-primary-100)] bg-white px-5 py-8 shadow-sm sm:px-8">
          <SectionHeader eyebrow={data.eyebrow} title={data.title} align="center" titleClassName="text-2xl sm:text-3xl" />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.items.map((item) => (
              <StatCard
                key={item.label}
                value={item.value}
                label={item.label}
                className="bg-slate-50"
              />
            ))}
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
