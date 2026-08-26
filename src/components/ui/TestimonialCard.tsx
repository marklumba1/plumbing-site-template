type TestimonialCardProps = {
  quote: string
  name: string
  role?: string
  rating?: number
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

function stars(count: number) {
  const safeCount = Math.max(0, Math.min(5, count))
  return '★'.repeat(safeCount)
}

export function TestimonialCard({ quote, name, role, rating = 5, className }: TestimonialCardProps) {
  return (
    <article className={joinClasses('interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm', className)}>
      <p className="text-base text-amber-500" aria-label={`${rating} out of 5 stars`}>
        {stars(rating)}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-700">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm font-bold text-slate-900">{name}</p>
      {role ? <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{role}</p> : null}
    </article>
  )
}
