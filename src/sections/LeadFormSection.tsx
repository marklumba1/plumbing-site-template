import { Container } from '../components/layout/Container.tsx'
import type { LeadFormData } from '../lib/siteData.ts'

type LeadFormSectionProps = {
  data: LeadFormData
}

export function LeadFormSection({ data }: LeadFormSectionProps) {
  return (
    <section id="lead-form" className="py-8 sm:py-10">
      <Container>
        <div className="interactive-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">{data.description}</p>
            </div>

            <form
              name={data.formName}
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="rounded-2xl border border-[var(--theme-primary-100)] bg-[var(--theme-primary-50)] p-4 sm:p-5"
            >
              <input type="hidden" name="form-name" value={data.formName} />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{data.fields.name.label}</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={data.fields.name.placeholder}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{data.fields.phone.label}</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder={data.fields.phone.placeholder}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{data.fields.service.label}</span>
                  <input
                    name="service"
                    type="text"
                    required
                    placeholder={data.fields.service.placeholder}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{data.fields.details.label}</span>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder={data.fields.details.placeholder}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="interactive-btn mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--theme-primary-600)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--theme-primary-500)]"
              >
                {data.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
