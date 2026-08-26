import { Button } from './Button.tsx'

type PricingCardProps = {
  plan: string
  price: string
  description?: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function PricingCard({
  plan,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
  className,
}: PricingCardProps) {
  return (
    <article
      className={joinClasses(
        'interactive-card rounded-2xl border bg-white p-5 shadow-sm',
        featured ? 'border-[var(--theme-primary-300)] ring-2 ring-[var(--theme-primary-100)]' : 'border-slate-200',
        className,
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--theme-primary-700)]">{plan}</p>
      <p className="mt-2 text-3xl font-black text-slate-900">{price}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}

      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-100)] text-[10px] text-[var(--theme-primary-700)]">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href={ctaHref} size="sm" className="mt-5 w-full">
        {ctaLabel}
      </Button>
    </article>
  )
}
