import { Container } from '../components/layout/Container.tsx'
import { Button } from '../components/ui/Button.tsx'
import type { HeroData } from '../lib/siteData.ts'

type HeroSectionProps = {
  data: HeroData
}

export function HeroSection({ data }: HeroSectionProps) {
  const mode = data.mode ?? 'split'
  const hasMedia = Boolean(data.media?.src)
  const imageMedia = data.media?.type === 'image' ? data.media : undefined
  const videoMedia = data.media?.type === 'video' ? data.media : undefined
  const useBackgroundImage = mode === 'background-image' && Boolean(imageMedia?.src)
  const useBackgroundVideo = mode === 'background-video' && Boolean(videoMedia?.src)
  const useBackgroundMedia = useBackgroundImage || useBackgroundVideo
  const hasInsideImage = Boolean(data.insideMedia?.src)

  if (useBackgroundMedia) {
    return (
      <section id="home" className="relative overflow-hidden pb-6 pt-7 sm:pb-8 sm:pt-8">
        {useBackgroundVideo ? (
          <video
            src={videoMedia?.src}
            poster={videoMedia?.poster}
            autoPlay={videoMedia?.autoPlay ?? true}
            loop={videoMedia?.loop ?? true}
            muted={videoMedia?.muted ?? true}
            controls={videoMedia?.controls ?? false}
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <img src={imageMedia?.src} alt={imageMedia?.alt ?? 'Plumbing service'} className="absolute inset-0 h-full w-full object-cover" />
        )}

        <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/55 to-slate-900/45" aria-hidden="true" />

        <Container>
          <div className={hasInsideImage ? 'relative grid gap-6 py-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:py-12' : 'relative py-8 sm:py-10 lg:py-12'}>
            <div className={hasInsideImage ? '' : 'max-w-4xl'}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">{data.eyebrow}</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{data.title}</h1>

              <ul className="mt-5 space-y-2">
                {data.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base leading-6 text-white/95 sm:text-lg sm:leading-7">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                        <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-white/90">
                <p>{data.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button href={data.primaryCta.href} size="sm">
                  {data.primaryCta.label}
                </Button>
                <Button href={data.secondaryCta.href} variant="secondary" size="sm">
                  {data.secondaryCta.label}
                </Button>
              </div>
            </div>

            {hasInsideImage ? (
              <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-sm">
                <img src={data.insideMedia?.src} alt={data.insideMedia?.alt ?? 'Plumbing service'} className="h-full w-full object-cover" />
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="home" className="pb-6 pt-7 sm:pb-8 sm:pt-8">
      <Container>
        <div className="interactive-card rounded-2xl border border-[var(--theme-primary-100)] bg-linear-to-r from-[var(--theme-primary-50)] via-white to-slate-50 p-5 sm:p-6">
          <div className={hasMedia ? 'grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-stretch' : ''}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
              <h1 className="mt-2 max-w-4xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h1>

              <ul className="mt-5 space-y-2">
                {data.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base leading-6 text-slate-800 sm:text-lg sm:leading-7">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary-100)] text-[var(--theme-primary-700)]">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                        <path d="M7.7 13.2 4.5 10l-1.4 1.4 4.6 4.6L17 6.7l-1.4-1.4z" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-slate-700">
                <p>{data.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button href={data.primaryCta.href} size="sm">
                  {data.primaryCta.label}
                </Button>
                <Button href={data.secondaryCta.href} variant="secondary" size="sm">
                  {data.secondaryCta.label}
                </Button>
              </div>
            </div>

            {hasMedia ? (
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {videoMedia ? (
                  <video
                    src={videoMedia.src}
                    poster={videoMedia.poster}
                    autoPlay={videoMedia.autoPlay ?? false}
                    loop={videoMedia.loop ?? false}
                    muted={videoMedia.muted ?? true}
                    controls={videoMedia.controls ?? true}
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img src={imageMedia?.src} alt={imageMedia?.alt ?? 'Plumbing service'} className="h-full w-full object-cover" />
                )}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
