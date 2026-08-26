import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import type { ProcessData } from '../lib/siteData.ts'

type ProcessSectionProps = {
  data: ProcessData
}

export function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <FullBleedSection id="process" className="py-12" background={data.sectionBackground}>
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">{data.description}</p>

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
