type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  headingLevel?: 1 | 2 | 3
  tone?: 'default' | 'inverse'
  eyebrowClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  headingLevel = 2,
  tone = 'default',
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  className,
}: SectionHeaderProps) {
  const isCentered = align === 'center'
  const HeadingTag = headingLevel === 1 ? 'h1' : headingLevel === 2 ? 'h2' : 'h3'

  const defaultEyebrowClass = tone === 'inverse' ? 'text-[var(--theme-primary-100)]' : 'text-[var(--theme-primary-700)]'
  const defaultTitleClass = tone === 'inverse' ? 'text-white' : 'text-slate-900'
  const defaultDescriptionClass = tone === 'inverse' ? 'text-[var(--theme-primary-50)]' : 'text-slate-700'

  return (
    <header className={joinClasses(isCentered ? 'text-center' : '', className)}>
      {eyebrow ? (
        <p className={joinClasses('text-xs font-bold uppercase tracking-[0.2em]', defaultEyebrowClass, eyebrowClassName)}>{eyebrow}</p>
      ) : null}
      <HeadingTag className={joinClasses('mt-2 text-3xl font-black tracking-tight sm:text-4xl', defaultTitleClass, titleClassName)}>
        {title}
      </HeadingTag>
      {description ? (
        <p className={joinClasses('mt-3 text-base leading-7', defaultDescriptionClass, isCentered ? 'mx-auto max-w-3xl' : 'max-w-2xl', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </header>
  )
}
