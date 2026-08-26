import { Footer } from '../components/layout/Footer.tsx'
import { Header } from '../components/layout/Header.tsx'
import { AboutSection } from '../sections/AboutSection.tsx'
import { CtaSection } from '../sections/CtaSection.tsx'
import { CompanyHighlightsSection } from '../sections/CompanyHighlightsSection.tsx'
import { DrainageSection } from '../sections/DrainageSection.tsx'
import { EmergencyProjectsSection } from '../sections/EmergencyProjectsSection.tsx'
import { FeaturesSection } from '../sections/FeaturesSection.tsx'
import { HeroSection } from '../sections/HeroSection.tsx'
import { WaterPumpSection } from '../sections/WaterPumpSection.tsx'
import { WaterTankCleaningSection } from '../sections/WaterTankCleaningSection.tsx'
import { VideoSection } from '../sections/VideoSection.tsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <VideoSection />
        <DrainageSection />
        <WaterPumpSection />
        <WaterTankCleaningSection />
        <AboutSection />
        <EmergencyProjectsSection />
        <section id="blog" className="sr-only" aria-hidden="true"></section>
        <CtaSection />
        <CompanyHighlightsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
