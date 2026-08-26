import { ChecklistContentSection } from '../components/ui/ChecklistContentSection.tsx'

const highlights = [
  'Skilled and versatile - We are equipped to deal with any type of drain clog, including sewer systems.',
  'Diagnostics - We provide camera inspections for accurate diagnosis.',
  'Flexible - We provide drainage service no matter the time of day.',
  'Trusted - We have provided drainage service to homes and businesses all over the DC area.',
]

const paragraphs = [
  'When you have a drainage problem, it can disrupt the daily routine at your home or business and can also pose a serious health hazard. At Plumber in DC, we provide drainage service around the clock so that you can take care of the problem and get on with your life.',
  'Our drainage service includes camera inspections so we can quickly and accurately locate the clog and recommend the most effective solution.',
]

export function DrainageSection() {
  return (
    <ChecklistContentSection
      id="drainage"
      title="Drainage Service"
      highlights={highlights}
      paragraphs={paragraphs}
    />
  )
}
