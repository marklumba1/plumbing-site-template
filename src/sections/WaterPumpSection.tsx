import { ChecklistContentSection } from '../components/ui/ChecklistContentSection.tsx'

const highlights = [
  'Inventory and variety - We can help you choose from a variety of top-name water pumps.',
  'Tailored to you - We can help you find the water pump that best meets your specific needs.',
  'Installation - We provide expert installation of your water pump.',
  'Repair - We specialize in water pump repair.',
]

const paragraphs = [
  'The water pump is one of the most important appliances in your home or business, especially in rainy areas like DC. At Plumber in DC, we can help you select the water pump that is right for you, taking your needs and the layout of your home or business into account.',
  'We also specialize in water pump installation and repair, offered at an affordable price with dependable local service.',
]

export function WaterPumpSection() {
  return (
    <ChecklistContentSection
      id="water-pump"
      title="Water Pump Supplier"
      highlights={highlights}
      paragraphs={paragraphs}
    />
  )
}
