import rawSiteData from '../data/siteData.json'
import type { SectionBackgroundData } from '../components/layout/FullBleedSection.tsx'

export type LinkItem = {
  label: string
  href: string
}

export type BusinessData = {
  name: string
  tagline: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  address: string
  hours: string
  license: string
}

export type HeroData = {
  mode?: 'split' | 'background-image' | 'background-video'
  sectionBackground?: SectionBackgroundData
  overlay?: {
    image?: string
    video?: string
  }
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  primaryCta: LinkItem
  secondaryCta: LinkItem
  media?: HeroMediaData
  insideMedia?: {
    src: string
    alt: string
  }
}

export type HeroMediaData =
  | {
      type: 'image'
      src: string
      alt: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
      autoPlay?: boolean
      loop?: boolean
      muted?: boolean
      controls?: boolean
    }

export type LeadFormData = {
  sectionBackground?: SectionBackgroundData
  formName: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  fields: {
    name: {
      label: string
      placeholder: string
    }
    phone: {
      label: string
      placeholder: string
    }
    service: {
      label: string
      placeholder: string
    }
    details: {
      label: string
      placeholder: string
    }
  }
}

export type EmergencyBannerData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  primaryCta: LinkItem
  secondaryCta: LinkItem
  badges: string[]
  form: {
    formName: string
    title: string
    submitLabel: string
    fields: {
      name: {
        label: string
        placeholder: string
      }
      phone: {
        label: string
        placeholder: string
      }
      issue: {
        label: string
        placeholder: string
      }
    }
  }
}

export type TrustIndicatorItem = {
  label: string
  value: string
}

export type TrustIndicatorsData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  ariaLabel: string
  title: string
  items: TrustIndicatorItem[]
}

export type ServiceItem = {
  title: string
  description: string
  icon: string
}

export type ServicesData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  items: ServiceItem[]
}

export type GalleryImageItem = {
  src: string
  alt: string
  caption: string
}

export type WorkGalleryData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  images: GalleryImageItem[]
}

export type AboutData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  paragraphs: string[]
  highlights: string[]
}

export type ReviewItem = {
  name: string
  location: string
  rating: number
  quote: string
}

export type ReviewsData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  items: ReviewItem[]
}

export type ServiceAreasData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  areas: string[]
}

export type CtaData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  contactCards: {
    addressLabel: string
    emailLabel: string
    hoursLabel: string
  }
}

export type ProcessStepItem = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type ProcessData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  steps: ProcessStepItem[]
}

export type FaqItem = {
  question: string
  answer: string
}

export type FaqData = {
  sectionBackground?: SectionBackgroundData
  eyebrow: string
  title: string
  description: string
  items: FaqItem[]
}

export type SiteData = {
  business: BusinessData
  navigation: LinkItem[]
  hero: HeroData
  leadForm: LeadFormData
  emergencyBanner: EmergencyBannerData
  trustIndicators: TrustIndicatorsData
  services: ServicesData
  workGallery: WorkGalleryData
  process: ProcessData
  about: AboutData
  reviews: ReviewsData
  serviceAreas: ServiceAreasData
  faq: FaqData
  cta: CtaData
}

export const siteData = rawSiteData as SiteData
