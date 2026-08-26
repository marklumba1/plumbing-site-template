import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { ServiceCard } from '../components/ui/ServiceCard.tsx'
import type { ServicesData } from '../lib/siteData.ts'

type FeaturesSectionProps = {
  data: ServicesData
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <FullBleedSection id="services" className="py-10 sm:py-12" background={data.sectionBackground}>
      <Container>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-slate-700">{data.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </FullBleedSection>
  )
}
