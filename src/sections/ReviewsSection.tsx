import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import type { ReviewsData } from '../lib/siteData.ts'

type ReviewsSectionProps = {
  data: ReviewsData
}

function stars(count: number) {
  return '★'.repeat(Math.max(0, Math.min(5, count)))
}

export function ReviewsSection({ data }: ReviewsSectionProps) {
  return (
    <FullBleedSection id="reviews" className="py-12" background={data.sectionBackground}>
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">
          {data.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {data.items.map((item) => (
            <article key={`${item.name}-${item.location}`} className="interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-base text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                {stars(item.rating)}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.location}</p>
            </article>
          ))}
        </div>
      </Container>
    </FullBleedSection>
  )
}
