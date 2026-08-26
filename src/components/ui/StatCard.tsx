type StatCardProps = {
  value: string
  label: string
  description?: string
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <article className={joinClasses('interactive-card rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm', className)}>
      <p className="text-3xl font-black text-[var(--theme-primary-700)]">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">{label}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
    </article>
  )
}
