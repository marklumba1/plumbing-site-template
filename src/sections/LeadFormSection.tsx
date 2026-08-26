import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { FormSuccessModal } from '../components/ui/FormSuccessModal.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import type { LeadFormData } from '../lib/siteData.ts'
import { useNetlifyFormSubmission } from '../lib/useNetlifyFormSubmission.ts'

type LeadFormSectionProps = {
  data: LeadFormData
}

export function LeadFormSection({ data }: LeadFormSectionProps) {
  const { isSubmitting, isSuccessOpen, submitError, handleSubmit, closeSuccessModal } = useNetlifyFormSubmission()

  return (
    <FullBleedSection id="lead-form" className="py-8 sm:py-10" background={data.sectionBackground}>
      <Container>
        <div className="interactive-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1.2fr] lg:items-start">
            <div>
              <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
            </div>

            <form
              name={data.formName}
              method="POST"
              action="/"
              onSubmit={handleSubmit}
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
                disabled={isSubmitting}
                className="interactive-btn mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--theme-primary-600)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--theme-primary-500)]"
              >
                {isSubmitting ? 'Submitting...' : data.submitLabel}
              </button>

              {submitError ? (
                <p className="mt-3 text-sm font-semibold text-red-600">{submitError}</p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>

      <FormSuccessModal
        isOpen={isSuccessOpen}
        title="Thank you, we got your request."
        message="Our team will review your details and contact you shortly."
        onClose={closeSuccessModal}
      />
    </FullBleedSection>
  )
}
