import { Container } from '../components/layout/Container.tsx'

export function CtaSection() {
  return (
    <section id="contact" className="pb-10 pt-6 sm:pb-12 sm:pt-8">
      <Container>
        <div className="interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Contact & Location</p>
          <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Visit or call Plumber in DC
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Quick ways to reach us for emergency calls, estimates, and directions.
          </p>

          <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Plumber in DC map"
              className="h-[280px] w-full sm:h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=loc:38.9326792,-77.0222984&z=17&output=embed"
            ></iframe>

            <div className="pointer-events-none absolute left-3 top-3 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Plumber in DC</p>
              <p className="text-xs text-slate-600">620 Park Rd NW #22, Washington, DC</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            <a
              href="tel:+12028100624"
              className="interactive-card group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 text-slate-700 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8a15.7 15.7 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3a12 12 0 003.8.6c.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.8 22.2 1.8 13.2 1.8 2.2 1.8 1.5 2.3 1 3 1h4.4c.7 0 1.2.5 1.2 1.2 0 1.3.2 2.6.6 3.8.1.4 0 .9-.3 1.2l-2.3 2.6z" />
                </svg>
              </div>
              <p className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-cyan-700">Call 24/7</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">(202) 810-0624</p>
              <p className="mt-1 text-sm text-slate-600">Tap to call our dispatch line</p>
            </a>

            <a
              href="mailto:service@dlplumbingdc.com"
              className="interactive-card group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 text-slate-700 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <p className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-cyan-700">Email Us</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">service@dlplumbingdc.com</p>
              <p className="mt-1 text-sm text-slate-600">Get estimates and appointments fast</p>
            </a>

            <a
              href="https://www.google.com/maps?cid=15489505116031154061&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-PH&source=embed"
              target="_blank"
              rel="noreferrer"
              className="interactive-card group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 text-slate-700 shadow-sm lg:col-span-1"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c-4 0-7.2 3.2-7.2 7.2 0 5.3 7.2 12.2 7.2 12.2s7.2-6.9 7.2-12.2c0-4-3.2-7.2-7.2-7.2zm0 9.8a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z" />
                </svg>
              </div>
              <p className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-cyan-700">Office Address</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">620 Park Rd NW #22</p>
              <p className="mt-1 text-sm text-slate-600">Washington, DC 20010</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
