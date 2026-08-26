import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import type { FaqData } from '../lib/siteData.ts'

type FaqSectionProps = {
  data: FaqData
}

export function FaqSection({ data }: FaqSectionProps) {
  return (
    <FullBleedSection id="faq" className="py-12" background={data.sectionBackground}>
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">{data.description}</p>

          <div className="mt-6 space-y-3">
            {data.items.map((item) => (
              <details key={item.question} className="interactive-card group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-slate-900">
                  <span>{item.question}</span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[var(--theme-primary-700)]">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
