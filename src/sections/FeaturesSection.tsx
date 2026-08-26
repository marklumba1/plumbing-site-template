import { Container } from '../components/layout/Container.tsx'
import { ServiceCard } from '../components/ui/ServiceCard.tsx'
import { services } from '../lib/services.ts'

export function FeaturesSection() {
  return (
    <section id="services" className="py-7 sm:py-8">
      <Container>
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
            Core Services
          </p>
          <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Built around speed and quality
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
