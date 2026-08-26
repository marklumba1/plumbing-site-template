import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
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
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">
                  {data.eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                  {data.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--theme-primary-100)] bg-[var(--theme-primary-50)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--theme-primary-700)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--theme-primary-600)]" aria-hidden="true"></span>
                  {highlightCount} trust signals
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {data.highlights.map((item) => (
                  <li
                    key={item}
                    className="interactive-card flex items-start gap-3 rounded-xl border border-[var(--theme-primary-100)] bg-white px-4 py-3"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-100)] text-[var(--theme-primary-700)]" aria-hidden="true">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                        <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold leading-6 text-slate-800">{item}</span>
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
