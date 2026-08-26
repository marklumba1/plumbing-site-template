import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import { ServiceCard } from '../components/ui/ServiceCard.tsx'
import type { ServicesData } from '../lib/siteData.ts'

type FeaturesSectionProps = {
  data: ServicesData
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <FullBleedSection id="services" className="py-10 sm:py-12" background={data.sectionBackground}>
      <Container>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} className="mb-6" titleClassName="text-2xl sm:text-3xl" />

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
