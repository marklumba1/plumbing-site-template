import type { CSSProperties, ReactNode } from 'react'

export type SectionBackgroundData = {
  color?: string
  imageSrc?: string
  imageAlt?: string
  overlay?: string
}

type FullBleedSectionProps = {
  id?: string
  className?: string
  ariaLabel?: string
  background?: SectionBackgroundData
  children: ReactNode
}

export function FullBleedSection({ id, className, ariaLabel, background, children }: FullBleedSectionProps) {
  const hasImage = Boolean(background?.imageSrc)
  const sectionStyle: CSSProperties = background?.color ? { backgroundColor: background.color } : {}
  const rootClassName = ['relative isolate', className].filter(Boolean).join(' ')

  return (
    <section id={id} className={rootClassName} aria-label={ariaLabel} style={sectionStyle}>
      {hasImage ? (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <img src={background?.imageSrc} alt={background?.imageAlt ?? ''} className="h-full w-full object-cover" />
          {background?.overlay ? <div className="absolute inset-0" style={{ background: background.overlay }} /> : null}
        </div>
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  )
}
