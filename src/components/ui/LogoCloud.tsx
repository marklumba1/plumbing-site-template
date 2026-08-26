type LogoCloudItem = {
  name: string
  imageSrc?: string
}

type LogoCloudProps = {
  title?: string
  items: LogoCloudItem[]
  className?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function LogoCloud({ title, items, className }: LogoCloudProps) {
  return (
    <section className={joinClasses('rounded-2xl border border-slate-200 bg-white px-5 py-4', className)}>
      {title ? <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{title}</p> : null}
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.name} className="flex min-h-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.name} loading="lazy" className="max-h-8 w-auto object-contain" />
            ) : (
              <span className="text-sm font-semibold text-slate-600">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
