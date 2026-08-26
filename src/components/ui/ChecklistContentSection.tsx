import { Container } from '../layout/Container.tsx'

type ChecklistContentSectionProps = {
  id?: string
  title: string
  highlights: string[]
  paragraphs: string[]
  className?: string
  variant?: 'light' | 'dark'
}

export function ChecklistContentSection({
  id,
  title,
  highlights,
  paragraphs,
  className = '',
  variant = 'light',
}: ChecklistContentSectionProps) {
  const isDark = variant === 'dark'

  const cardClass = isDark
    ? 'interactive-card rounded-2xl border border-cyan-500/70 bg-cyan-600 p-5 shadow-sm sm:p-6'
    : 'interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6'

  const headingClass = isDark
    ? 'text-2xl font-black leading-tight text-white sm:text-3xl'
    : 'text-2xl font-black leading-tight text-slate-900 sm:text-3xl'

  const itemClass = isDark
    ? 'flex items-start gap-2 text-base leading-6 text-white sm:text-lg sm:leading-7'
    : 'flex items-start gap-2 text-base leading-6 text-slate-800 sm:text-lg sm:leading-7'

  const iconClass = isDark
    ? 'mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-cyan-100 ring-1 ring-cyan-300/70'
    : 'mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700'

  const paragraphClass = isDark
    ? 'mt-6 space-y-4 text-[0.95rem] leading-7 text-white'
    : 'mt-6 space-y-4 text-[0.95rem] leading-7 text-slate-700'

  return (
    <section id={id} className={`py-7 sm:py-8 ${className}`}>
      <Container>
        <div className={cardClass}>
          <h2 className={headingClass}>
            {title}
          </h2>

          <ul className="mt-5 space-y-2">
            {highlights.map((item) => (
              <li key={item} className={itemClass}>
                <span className={iconClass}>
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={paragraphClass}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 50)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
