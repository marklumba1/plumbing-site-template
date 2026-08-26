import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { FormSuccessModal } from '../components/ui/FormSuccessModal.tsx'
import type { EmergencyBannerData } from '../lib/siteData.ts'
import { useNetlifyFormSubmission } from '../lib/useNetlifyFormSubmission.ts'

type EmergencyBannerSectionProps = {
  data: EmergencyBannerData
}

export function EmergencyBannerSection({ data }: EmergencyBannerSectionProps) {
  const { isSubmitting, isSuccessOpen, submitError, handleSubmit, closeSuccessModal } = useNetlifyFormSubmission()
  const hasSectionBackgroundImage = Boolean(data.sectionBackground?.imageSrc)

  return (
    <FullBleedSection className="py-7 sm:py-8" background={data.sectionBackground}>
      <Container>
        <div
          className={`interactive-card rounded-3xl border p-5 text-white sm:p-6 ${
            hasSectionBackgroundImage
              ? 'border-white/30 bg-[color:rgba(15,23,42,0.78)] backdrop-blur-sm'
              : 'border-slate-200 bg-[var(--theme-primary-900)]'
          }`}
        >
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-100)]">{data.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{data.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--theme-primary-50)] sm:text-base">{data.description}</p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={data.primaryCta.href}
                  className="interactive-btn inline-flex items-center justify-center rounded-full border border-white/50 bg-white px-4 py-2 text-sm font-semibold text-[var(--theme-primary-900)] hover:bg-[var(--theme-primary-50)]"
                >
                  {data.primaryCta.label}
                </a>
                <a
                  href={data.secondaryCta.href}
                  className="interactive-btn inline-flex items-center justify-center rounded-full border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {data.secondaryCta.label}
                </a>
              </div>

              <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
                {data.badges.map((badge) => (
                  <li key={badge} className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-center font-semibold">
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <form
              name={data.form.formName}
              method="POST"
              action="/"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur sm:p-5"
            >
              <input type="hidden" name="form-name" value={data.form.formName} />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-100)]">{data.form.title}</p>

              <div className="mt-3 space-y-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--theme-primary-100)]">{data.form.fields.name.label}</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={data.form.fields.name.placeholder}
                    className="w-full rounded-xl border border-white/40 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--theme-primary-100)]">{data.form.fields.phone.label}</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder={data.form.fields.phone.placeholder}
                    className="w-full rounded-xl border border-white/40 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--theme-primary-100)]">{data.form.fields.issue.label}</span>
                  <input
                    name="issue"
                    type="text"
                    required
                    placeholder={data.form.fields.issue.placeholder}
                    className="w-full rounded-xl border border-white/40 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--theme-primary-500)] focus:ring-2 focus:ring-[var(--theme-primary-100)]"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="interactive-btn mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-white px-4 py-2 text-sm font-semibold text-[var(--theme-primary-900)] hover:bg-[var(--theme-primary-50)]"
              >
                {isSubmitting ? 'Submitting...' : data.form.submitLabel}
              </button>

              {submitError ? (
                <p className="mt-3 text-sm font-semibold text-rose-100">{submitError}</p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>

      <FormSuccessModal
        isOpen={isSuccessOpen}
        title="Emergency callback request received."
        message="Our dispatch team will contact you as quickly as possible."
        onClose={closeSuccessModal}
      />
    </FullBleedSection>
  )
}
