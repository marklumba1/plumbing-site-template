import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import type { ProcessData } from '../lib/siteData.ts'

type ProcessSectionProps = {
  data: ProcessData
}

export function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <FullBleedSection id="process" className="py-12" background={data.sectionBackground}>
      <Container>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.steps.map((step) => (
            <article key={step.title} className="interactive-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </FullBleedSection>
  )
}
