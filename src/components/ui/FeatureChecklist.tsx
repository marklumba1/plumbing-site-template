type FeatureChecklistProps = {
  items: string[]
  columns?: 1 | 2
  tone?: 'default' | 'inverse'
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function FeatureChecklist({ items, columns = 1, tone = 'default', className }: FeatureChecklistProps) {
  const itemClass =
    tone === 'inverse'
      ? 'interactive-card flex items-start gap-3 rounded-xl border border-white/25 bg-white/10 px-4 py-3'
      : 'interactive-card flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3'

  const bulletClass =
    tone === 'inverse'
      ? 'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white'
      : 'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-100)] text-[var(--theme-primary-700)]'

  const textClass = tone === 'inverse' ? 'text-sm font-semibold leading-6 text-white' : 'text-sm font-semibold leading-6 text-slate-800'

  return (
    <ul className={joinClasses('grid gap-3', columns === 2 ? 'sm:grid-cols-2' : '', className)}>
      {items.map((item) => (
        <li key={item} className={itemClass}>
          <span className={bulletClass} aria-hidden="true">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
            </svg>
          </span>
          <span className={textClass}>{item}</span>
        </li>
      ))}
    </ul>
  )
}
