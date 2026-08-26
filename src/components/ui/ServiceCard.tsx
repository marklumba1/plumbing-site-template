import { ServiceIcon } from './ServiceIcon.tsx'
import { Button } from './Button.tsx'

type ServiceCardProps = {
  title: string
  description: string
  icon: 'heater' | 'drain' | 'commercial' | 'remodel'
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="interactive-card group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <ServiceIcon icon={icon} />
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-cyan-700">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <Button
        href="#contact"
        variant="link"
        className="group mt-5 flex items-center justify-center gap-1.5 text-xs tracking-wide"
        size="sm"
      >
        <span className="leading-none text-cyan-700 transition-all duration-200 group-hover:text-cyan-500 group-hover:underline group-hover:underline-offset-4">
          Read more
        </span>
        <svg
          viewBox="0 0 20 20"
          className="h-3 w-3 text-cyan-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-cyan-500"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 4.5 8.4 3 15.4 10l-7 7L7 15.5l4.4-4.5z" />
        </svg>
      </Button>
    </article>
  )
}
