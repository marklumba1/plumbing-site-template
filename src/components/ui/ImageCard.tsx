type ImageCardProps = {
  src: string
  alt: string
  caption: string
}

export function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <figure className="interactive-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]" />
      </div>
      <figcaption className="border-t border-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
        {caption}
      </figcaption>
    </figure>
  )
}
