import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'theme' | 'neutral' | 'success' | 'inverted'
  size?: 'sm' | 'md'
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function Badge({ children, tone = 'theme', size = 'sm', className }: BadgeProps) {
  const toneClass =
    tone === 'theme'
      ? 'border-[var(--theme-primary-200)] bg-[var(--theme-primary-50)] text-[var(--theme-primary-700)]'
      : tone === 'inverted'
        ? 'border-white/40 bg-white/10 text-white'
      : tone === 'success'
        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
        : 'border-slate-200 bg-slate-100 text-slate-700'

  const sizeClass = size === 'sm' ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'

  return (
    <span className={joinClasses('inline-flex items-center rounded-full border font-semibold uppercase tracking-[0.12em]', toneClass, sizeClass, className)}>
      {children}
    </span>
  )
}
