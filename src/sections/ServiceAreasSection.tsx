import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { Badge } from '../components/ui/Badge.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import type { ServiceAreasData } from '../lib/siteData.ts'

type ServiceAreasSectionProps = {
  data: ServiceAreasData
}

export function ServiceAreasSection({ data }: ServiceAreasSectionProps) {
  const areaCount = data.areas.length

  return (
    <FullBleedSection id="service-areas" className="py-12" background={data.sectionBackground}>
      <Container>
        <div className="overflow-hidden rounded-3xl border border-[var(--theme-primary-100)] bg-white shadow-sm">
          <div className="bg-linear-to-r from-[var(--theme-primary-50)] via-white to-[var(--theme-primary-50)] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-8">
              <div className="rounded-2xl border border-[var(--theme-primary-100)] bg-white p-5">
                <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

                <Badge className="mt-5 gap-2 border-[var(--theme-primary-100)] bg-[var(--theme-primary-50)] text-[var(--theme-primary-700)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--theme-primary-600)]" aria-hidden="true" />
                  Serving {areaCount} areas
                </Badge>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {data.areas.map((area) => (
                  <li
                    key={area}
                    className="interactive-card flex items-center gap-3 rounded-xl border border-[var(--theme-primary-100)] bg-white px-4 py-3 text-sm font-semibold text-slate-800"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-50)] text-[var(--theme-primary-700)]" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M12 2.5a7.5 7.5 0 0 0-7.5 7.5c0 5.4 7.5 11.5 7.5 11.5s7.5-6.1 7.5-11.5A7.5 7.5 0 0 0 12 2.5Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
                      </svg>
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
