import { Container } from '../components/layout/Container.tsx'
import { FullBleedSection } from '../components/layout/FullBleedSection.tsx'
import { ImageCard } from '../components/ui/ImageCard.tsx'
import { SectionHeader } from '../components/ui/SectionHeader.tsx'
import type { WorkGalleryData } from '../lib/siteData.ts'

type WorkGallerySectionProps = {
  data: WorkGalleryData
}

export function WorkGallerySection({ data }: WorkGallerySectionProps) {
  return (
    <FullBleedSection id="gallery" className="py-12" background={data.sectionBackground}>
      <Container>
        <div className="rounded-3xl border border-[var(--theme-primary-100)] bg-white p-6 sm:p-8">
          <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.images.map((image) => (
              <ImageCard key={`${image.src}-${image.caption}`} src={image.src} alt={image.alt} caption={image.caption} />
            ))}
          </div>
        </div>
      </Container>
    </FullBleedSection>
  )
}
