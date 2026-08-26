import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'link'
type Size = 'sm' | 'md'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonProps = AnchorProps | NativeButtonProps

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
  } = props

  const base =
    variant === 'link'
      ? 'interactive-btn inline-flex items-center gap-1.5 whitespace-nowrap font-semibold'
      : 'interactive-btn inline-flex items-center justify-center rounded-full font-semibold'

  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--theme-primary-600)] text-white hover:bg-[var(--theme-primary-500)]'
      : variant === 'link'
        ? 'text-[var(--theme-primary-700)] hover:text-[var(--theme-primary-500)]'
      : 'border border-slate-300 bg-white text-slate-700 hover:border-[var(--theme-primary-300)] hover:text-[var(--theme-primary-700)]'

  const sizeClass =
    variant === 'link'
      ? size === 'sm'
        ? 'text-sm'
        : 'text-sm'
      : size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-5 py-2.5 text-sm'

  const classes = joinClasses(base, variantClass, sizeClass, className)

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as NativeButtonProps
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
