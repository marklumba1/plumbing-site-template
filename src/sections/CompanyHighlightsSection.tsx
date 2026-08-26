import { Container } from '../components/layout/Container.tsx'
import { Button } from '../components/ui/Button.tsx'
import aboutPlumberImg from '../assets/about-plumber.png'

const services = [
  'Water Line Repair & Replacement',
  'Sump Pump & Well Pump Repairs',
  'Water Pressure Issues',
  'Leaking Pipes',
  'Faucet Repair & Replacement',
  'Backflow Testing',
  'Gas Piping',
  'Drain Cleaning',
  'Local Plumber',
  'Plumber Near Me',
]

export function CompanyHighlightsSection() {
  return (
    <section className="py-7 sm:py-8">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="interactive-card overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm">
            <header className="bg-cyan-600 px-4 py-3">
              <h2 className="text-xl font-bold text-white">ABOUT Plumber In DC</h2>
            </header>
            <div className="p-4">
              <img
                src={aboutPlumberImg}
                alt="Plumber standing beside service van"
                className="h-32 w-full rounded-lg border border-cyan-100 object-cover"
              />
              <p className="mt-4 text-base leading-7 text-slate-700">
                We are a sister company of 4FastPlumber and have been offering services
                for over 25 years in the DC area. We have hundreds of five-star
                reviews and enjoy helping people by delivering quality work at fair
                prices.
              </p>
            </div>
          </article>

          <article className="interactive-card overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm">
            <header className="bg-cyan-600 px-4 py-3">
              <h2 className="text-xl font-bold text-white">OUR SERVICES</h2>
            </header>
            <div className="p-4">
              <ul className="space-y-1.5">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-[1.02rem] text-slate-700">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                        <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                      </svg>
                    </span>
                    <span className={service.includes('Plumber') ? 'text-orange-600' : ''}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="interactive-card overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm">
            <header className="bg-cyan-600 px-4 py-3">
              <h2 className="text-xl font-bold text-white">JOIN OUR NEWSLETTER</h2>
            </header>
            <div className="p-4">
              <p className="text-base leading-7 text-slate-700">
                Sign up for our newsletter to receive exclusive offers, seasonal
                maintenance reminders, and plumbing tips.
              </p>
              <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-lg border border-cyan-200 bg-cyan-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                />
                <Button type="submit">
                  SUBMIT
                </Button>
              </form>
            </div>
          </article>
        </div>

        <div className="interactive-card mt-5 max-w-xl rounded-2xl border border-cyan-300 bg-cyan-600 p-5 text-white shadow-sm">
          <p className="text-3xl font-black tracking-tight">DC Plumbing</p>
          <div className="mt-4 space-y-1 text-lg">
            <p>(202) 810-0624</p>
            <p className="font-semibold">5.0 stars - based on 5 reviews</p>
            <p>620 Park Rd NW #22</p>
            <p>Washington, DC 20010</p>
            <p>
              <span className="font-semibold">Hours:</span> Monday through Sunday, all
              day
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
