import { Container } from '../components/layout/Container.tsx'
import { ImageCard } from '../components/ui/ImageCard.tsx'
import type { WorkGalleryData } from '../lib/siteData.ts'

type WorkGallerySectionProps = {
  data: WorkGalleryData
}

export function WorkGallerySection({ data }: WorkGallerySectionProps) {
  return (
    <section id="gallery" className="py-12">
      <Container>
        <div className="rounded-3xl border border-[var(--theme-primary-100)] bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--theme-primary-700)]">{data.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">{data.description}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.images.map((image) => (
              <ImageCard key={`${image.src}-${image.caption}`} src={image.src} alt={image.alt} caption={image.caption} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
