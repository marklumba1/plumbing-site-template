import { Container } from '../components/layout/Container.tsx'
import { Button } from '../components/ui/Button.tsx'
import type { HeroData } from '../lib/siteData.ts'

type HeroSectionProps = {
  data: HeroData
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="home" className="pb-6 pt-7 sm:pb-8 sm:pt-8">
      <Container>
        <div className="interactive-card rounded-2xl border border-[var(--theme-primary-100)] bg-linear-to-r from-[var(--theme-primary-50)] via-white to-slate-50 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {data.title}
          </h1>

          <ul className="mt-5 space-y-2">
            {data.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-base leading-6 text-slate-800 sm:text-lg sm:leading-7">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-100)] text-[var(--theme-primary-700)]">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-slate-700">
            <p>{data.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button href={data.primaryCta.href} size="sm">
              {data.primaryCta.label}
            </Button>
            <Button href={data.secondaryCta.href} variant="secondary" size="sm">
              {data.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
