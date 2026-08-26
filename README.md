# Plumber Site Template

A reusable, component-based template for plumbing landing pages built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4

## Features

- Multi-section conversion-focused layout with common plumbing sections:
  - Hero
  - Lead form
  - Emergency banner (with callback form)
  - Trust indicators
  - Services
  - Work gallery
  - Process (How it works)
  - About
  - Reviews
  - Service areas
  - FAQ
  - CTA
- Fully data-driven content from `src/data/siteData.json`
- Reusable image components and stock-photo-ready gallery support
- Netlify form integration (lead form + emergency callback form)
- Sticky header navigation with active section states
- Smooth anchor scrolling with header-safe section offsets
- Mobile-friendly responsive layout

## Edit Site Content

All business details, section copy, navigation, forms, gallery images, FAQs, and CTAs are centralized in:

`src/data/siteData.json`

Duplicate this project for a new plumbing site and only update that file to swap content.

## Edit Theme

To change colors and fonts for the whole template, edit only:

`src/styles/globals.css`

Update the `:root` theme tokens at the top of the file.

## Netlify Forms

This template includes two Netlify-ready forms:

- Lead capture form (`lead-capture-form`)
- Emergency callback form (`emergency-callback-form`)

Form UI lives in:

- `src/sections/LeadFormSection.tsx`
- `src/sections/EmergencyBannerSection.tsx`

Hidden static form declarations for Netlify detection are in:

- `index.html`

If you change a form name in `src/data/siteData.json`, update the matching hidden form `name` in `index.html`.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- npm run dev: start Vite dev server
- npm run build: type-check and produce production bundle
- npm run preview: preview built app locally
- npm run lint: run ESLint

## Project Structure

```text
src/
  app/
    App.tsx
  data/
    siteData.json
  components/
    layout/
      Container.tsx
      Footer.tsx
      Header.tsx
    ui/
      Button.tsx
      ImageCard.tsx
      ServiceCard.tsx
  lib/
    siteData.ts
  sections/
    AboutSection.tsx
    CtaSection.tsx
    EmergencyBannerSection.tsx
    FaqSection.tsx
    FeaturesSection.tsx
    HeroSection.tsx
    LeadFormSection.tsx
    ProcessSection.tsx
    ReviewsSection.tsx
    ServiceAreasSection.tsx
    TrustIndicatorsSection.tsx
    WorkGallerySection.tsx
  styles/
    globals.css
  main.tsx

public/
  images/
```

## Deployment

This app can be deployed to any static hosting provider that supports Vite build output.

Typical flow:

1. Run npm run build
2. Deploy the dist folder

