import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import { TestimonialCard } from '../components/ui/TestimonialCard.tsx'
import type { ReviewsData } from '../lib/siteData.ts'

type ReviewsSectionProps = {
  data: ReviewsData
}

export function ReviewsSection({ data }: ReviewsSectionProps) {
  return (
    <FullBleedSection id="reviews" className="py-12" background={data.sectionBackground}>
      <Container>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} />

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {data.items.map((item) => (
            <TestimonialCard
              key={`${item.name}-${item.location}`}
              quote={item.quote}
              name={item.name}
              role={item.location}
              rating={item.rating}
            />
          ))}
        </div>
      </Container>
    </FullBleedSection>
  )
}
