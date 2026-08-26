import { Container } from '../components/layout/Container.tsx'

export function VideoSection() {
  return (
    <section id="video" className="py-7 sm:py-8">
      <Container>
        <div className="interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Watch</p>
          <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            See our plumbing work in action
          </h2>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              className="h-[240px] w-full sm:h-[340px] lg:h-[460px]"
              src="https://www.youtube-nocookie.com/embed/HLMFs_S3z-c"
              title="Plumber in DC Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
