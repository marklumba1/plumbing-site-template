import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { Button } from '../components/ui/Button.tsx'
import { FeatureChecklist } from '../components/ui/FeatureChecklist.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
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
  const backgroundImageOverlay = data.overlay?.image ?? 'rgba(191,219,254,0.24)'
  const backgroundVideoOverlay = data.overlay?.video ?? 'linear-gradient(to right, rgba(15,23,42,0.70), rgba(15,23,42,0.55), rgba(15,23,42,0.45))'

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

        <div
          className="absolute inset-0"
          style={{ background: useBackgroundImage ? backgroundImageOverlay : backgroundVideoOverlay }}
          aria-hidden="true"
        />

        <Container>
          <div className={hasInsideImage ? 'relative grid gap-6 py-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:py-12' : 'relative py-8 sm:py-10 lg:py-12'}>
            <div className={hasInsideImage ? '' : 'max-w-4xl'}>
              <SectionHeader
                eyebrow={data.eyebrow}
                title={data.title}
                description={data.description}
                headingLevel={1}
                tone="inverse"
              />

              <FeatureChecklist items={data.highlights} tone="inverse" className="mt-5" />

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
    <FullBleedSection id="home" className="pb-6 pt-7 sm:pb-8 sm:pt-8" background={data.sectionBackground}>
      <Container>
        <div className="interactive-card rounded-2xl border border-[var(--theme-primary-100)] bg-linear-to-r from-[var(--theme-primary-50)] via-white to-slate-50 p-5 sm:p-6">
          <div className={hasMedia ? 'grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-stretch' : ''}>
            <div>
              <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} headingLevel={1} />

              <FeatureChecklist items={data.highlights} className="mt-5" />

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
    </FullBleedSection>
  )
}
