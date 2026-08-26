# Plumber in DC Landing Page

A modern, component-based plumbing service landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4

## Features

- Sticky header navigation with active section states
- Smooth anchor scrolling with header-safe section offsets
- Reusable UI components for buttons, cards, and checklist sections
- Embedded YouTube video section
- Contact section with map embed and modern contact cards
- Mobile-friendly responsive layout

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
  assets/
    about-plumber.png
  components/
    layout/
      Container.tsx
      Footer.tsx
      Header.tsx
    ui/
      Button.tsx
      ChecklistContentSection.tsx
      ServiceCard.tsx
      ServiceIcon.tsx
  lib/
    services.ts
  sections/
    AboutSection.tsx
    CompanyHighlightsSection.tsx
    CtaSection.tsx
    DrainageSection.tsx
    EmergencyProjectsSection.tsx
    FeaturesSection.tsx
    HeroSection.tsx
    VideoSection.tsx
    WaterPumpSection.tsx
    WaterTankCleaningSection.tsx
  styles/
    globals.css
  main.tsx
```

## Deployment

This app can be deployed to any static hosting provider that supports Vite build output.

Typical flow:

1. Run npm run build
2. Deploy the dist folder

## Repository

GitHub: https://github.com/marklumba1/dc-plumbing
