import { ChecklistContentSection } from '../components/ui/ChecklistContentSection.tsx'

const highlights = [
  'Best in plumbing with a proven local track record',
  'Top-rated service for both residential and commercial clients',
  'Affordable pricing without sacrificing quality',
  'Emergency support with same-day availability',
  'Service coverage throughout Washington, DC',
  'Repairs for pipes, fixtures, sewers, drains, and water heaters',
  'Installations for major and minor household plumbing systems',
]

const paragraphs = [
  'Finding a plumber in DC can be stressful, so our team focuses on honesty, transparent communication, and dependable workmanship from the first call to the final walkthrough.',
  'As a family-operated company, we prioritize your safety and comfort. Our licensed and insured technicians stay up to date on code requirements while delivering repairs, installs, and remodel support that keeps your home running smoothly.',
]

export function AboutSection() {
  return (
    <ChecklistContentSection
      id="about"
      title="Plumber - DC's Top Rated Plumbing Company"
      highlights={highlights}
      paragraphs={paragraphs}
    />
  )
}
