import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { Badge } from '../components/ui/Badge.tsx'
import { FeatureChecklist } from '../components/ui/FeatureChecklist.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import type { AboutData } from '../lib/siteData.ts'

type AboutSectionProps = {
  data: AboutData
}

export function AboutSection({ data }: AboutSectionProps) {
  const highlightCount = data.highlights.length

  return (
    <FullBleedSection id="about" className="py-12" background={data.sectionBackground}>
      <Container>
        <div className="overflow-hidden rounded-3xl border border-[var(--theme-primary-100)] bg-white shadow-sm">
          <div className="bg-linear-to-r from-[var(--theme-primary-50)] via-white to-[var(--theme-primary-50)] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
              <div className="rounded-2xl border border-[var(--theme-primary-100)] bg-white p-5 sm:p-6">
                <SectionHeader eyebrow={data.eyebrow} title={data.title} />
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                  {data.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <Badge className="mt-5 gap-2 border-[var(--theme-primary-100)] bg-[var(--theme-primary-50)] text-[var(--theme-primary-700)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--theme-primary-600)]" aria-hidden="true" />
                  {highlightCount} trust signals
                </Badge>
              </div>

              <FeatureChecklist items={data.highlights} columns={2} className="lg:grid-cols-1" />
            </div>
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
