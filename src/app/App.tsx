import { Footer } from '../components/layout/Footer.tsx'
import { Header } from '../components/layout/Header.tsx'
import { AboutSection } from '../sections/AboutSection.tsx'
import { CtaSection } from '../sections/CtaSection.tsx'
import { EmergencyBannerSection } from '../sections/EmergencyBannerSection.tsx'
import { FaqSection } from '../sections/FaqSection.tsx'
import { FeaturesSection } from '../sections/FeaturesSection.tsx'
import { HeroSection } from '../sections/HeroSection.tsx'
import { LeadFormSection } from '../sections/LeadFormSection.tsx'
import { ProcessSection } from '../sections/ProcessSection.tsx'
import { ReviewsSection } from '../sections/ReviewsSection.tsx'
import { ServiceAreasSection } from '../sections/ServiceAreasSection.tsx'
import { TrustIndicatorsSection } from '../sections/TrustIndicatorsSection.tsx'
import { WorkGallerySection } from '../sections/WorkGallerySection.tsx'
import { siteData } from '../lib/siteData.ts'

function App() {
  return (
    <div className="min-h-screen bg-[var(--theme-page-bg)] text-slate-900">
      <Header business={siteData.business} navigation={siteData.navigation} />

      <main>
        <HeroSection data={siteData.hero} business={siteData.business} />
        <LeadFormSection data={siteData.leadForm} />
        <EmergencyBannerSection data={siteData.emergencyBanner} />
        <TrustIndicatorsSection data={siteData.trustIndicators} />
        <FeaturesSection data={siteData.services} />
        <WorkGallerySection data={siteData.workGallery} />
        <ProcessSection data={siteData.process} />
        <AboutSection data={siteData.about} />
        <ReviewsSection data={siteData.reviews} />
        <ServiceAreasSection data={siteData.serviceAreas} />
        <FaqSection data={siteData.faq} />
        <CtaSection data={siteData.cta} business={siteData.business} />
      </main>

      <Footer business={siteData.business} navigation={siteData.navigation} />
    </div>
  )
}

export default App
