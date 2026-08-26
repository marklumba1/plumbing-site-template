import { ChecklistContentSection } from '../components/ui/ChecklistContentSection.tsx'

const highlights = [
  '24/7 - We offer water tank cleaning twenty-four hours a day, seven days a week.',
  'Clean water tank - We understand that having a clean water tank is crucial to your home or business.',
  'Certified - Our technicians are fully licensed, bonded, and insured.',
  'Customer service - We offer quick and friendly water tank cleaning service.',
]

const paragraphs = [
  'At Plumber in DC, we understand how important it is to make sure that your water tank is clean. That is why we specialize in water tank cleaning service.',
  'Our expert technicians are fully licensed, bonded, and insured, and they provide water tank cleaning service in a friendly and efficient manner.',
]

export function WaterTankCleaningSection() {
  return (
    <ChecklistContentSection
      id="water-tank-cleaning"
      title="Water Tank Cleaning Service"
      highlights={highlights}
      paragraphs={paragraphs}
    />
  )
}
