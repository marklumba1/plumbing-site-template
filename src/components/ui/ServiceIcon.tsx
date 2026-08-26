type ServiceIconProps = {
  icon: 'heater' | 'drain' | 'commercial' | 'remodel'
}

export function ServiceIcon({ icon }: ServiceIconProps) {
  if (icon === 'heater') {
    return (
      <svg viewBox="0 0 48 48" className="h-14 w-14 text-cyan-600" aria-hidden="true">
        <path
          d="M20 43c5-4 6-9 4-14-2-5-8-8-9-14-1-5 2-10 8-13-4 5-4 9-1 13 3 4 8 6 10 12 2 6-2 12-12 16z"
          fill="currentColor"
        />
        <path
          d="M33 40c2-2 3-5 2-8-1-3-4-5-5-8-1-3 0-5 2-7-1 3 0 5 2 7 2 2 5 4 6 7 1 4-1 7-7 9z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    )
  }

  if (icon === 'drain') {
    return (
      <svg viewBox="0 0 48 48" className="h-14 w-14 text-cyan-600" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="currentColor" fill="none" strokeWidth="2.5" />
        <path d="M24 12v24M12 24h24M16 16l16 16M16 32l16-16" stroke="currentColor" strokeWidth="2" opacity="0.65" />
      </svg>
    )
  }

  if (icon === 'commercial') {
    return (
      <svg viewBox="0 0 48 48" className="h-14 w-14 text-cyan-600" aria-hidden="true">
        <path d="M7 40V20l9-8v28H7zm12 0V12h10v28H19zm13 0V16l9 8v16h-9z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14 text-cyan-600" aria-hidden="true">
      <path d="M24 6c4 0 7 2 7 5s-3 5-7 5-7-2-7-5 3-5 7-5z" fill="currentColor" />
      <path d="M14 18h20a7 7 0 017 7v9h-8v8H15v-8H7v-9a7 7 0 017-7z" fill="currentColor" opacity="0.8" />
      <rect x="12" y="21" width="4" height="15" rx="2" fill="currentColor" />
    </svg>
  )
}
