export type ServiceItem = {
  title: string
  description: string
  icon: 'heater' | 'drain' | 'commercial' | 'remodel'
}

export const services: ServiceItem[] = [
  {
    title: 'Water Heater',
    description:
      'Energy-efficient water heater installs, repairs, and same-day upgrades for homes across DC.',
    icon: 'heater',
  },
  {
    title: 'Sewer and Drain',
    description:
      'Fast drain cleaning, sewer diagnostics, and code-compliant fixes with transparent pricing.',
    icon: 'drain',
  },
  {
    title: 'Commercial',
    description:
      'Licensed commercial plumbing for offices, restaurants, and mixed-use properties.',
    icon: 'commercial',
  },
  {
    title: 'Remodeling',
    description:
      'Bathroom and kitchen plumbing layouts done right from rough-in to final fixture install.',
    icon: 'remodel',
  },
]
