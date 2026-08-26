import { Container } from '../components/layout/Container.tsx'

type TextBlock = {
  title: string
  paragraphs: string[]
}

const blocks: TextBlock[] = [
  {
    title: 'Emergency DC Plumbing Company',
    paragraphs: [
      'We have been asked many times to come out after hours. Our normal business hours are 7:00 am to 6:00 pm Monday through Friday. If you need service on weekends or after hours, we can provide it.',
      'Because we keep plumbers on call for emergency requests, there may be a small fee to cover added costs. If you call us during an emergency, we will come as quickly as possible to get things fixed and back to normal for your home or business.',
    ],
  },
  {
    title: 'More Than Just DC Plumbing Services',
    paragraphs: [
      'We currently offer a wide range of services in the DC area for both residential and commercial clients, including plumbing, sewer, camera inspection, reverse osmosis, water heater service, drain cleaning, leaky pipe fixes, gas pipe work, and more.',
      'Please do not hesitate to call. We hold a Masters license in plumbing and are fully insured.',
    ],
  },
  {
    title: 'Recent Plumbing Projects In DC',
    paragraphs: [
      'Our team has recently handled large replumbing projects for restaurant locations and urgent commercial backups that required fast and dependable support.',
      'We are known for quality work, punctual service, and professionalism, and we bring that same standard to every job in the DC area.',
    ],
  },
]

export function EmergencyProjectsSection() {
  return (
    <section id="projects" className="py-8 sm:py-10">
      <Container>
        <div className="space-y-6">
          {blocks.map((block) => (
            <article key={block.title} className="interactive-card rounded-2xl border border-cyan-500/70 bg-cyan-600 p-6 shadow-sm sm:p-7">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                {block.title}
              </h2>
              <div className="mt-3.5 space-y-4 text-[0.95rem] leading-7 text-white sm:text-lg">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 50)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
