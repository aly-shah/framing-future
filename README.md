# FramingFuture™ — Next.js

A recreation of [framingfuture.contechcorp.io](https://framingfuture.contechcorp.io/) built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

> _Less noise. More clarity._ — the premium coaching system with SEVDA™ and CortexCraft™.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## What's included

- **Hero** with looping video background, brand tagline, and Clarity-Call CTA
- **Mission band**, **3-pillar framework** (SELF / WORLD / FUTURE), **Why FramingFuture™**
- **Founder section** (Sevda Yücel) using the real photo asset
- **Audiences grid** (Families, Youth, Moms, Dads, Schools, Companies)
- **CTA**, **newsletter**, and full **footer** with socials & legal links
- **Sticky responsive navbar** with mobile menu and EN/DE/TR language toggle
- **Booking modal** ("Book Your Clarity Call") with a working form + success state

## Project structure

```
src/
  app/
    layout.tsx        # fonts (Space Grotesk + Inter), metadata, providers
    page.tsx          # all page sections
    globals.css       # design tokens + component classes (Tailwind v4 @theme)
  components/
    navbar.tsx        # sticky nav, mobile menu, language switch
    footer.tsx
    booking-context.tsx / booking-modal.tsx / book-button.tsx
    newsletter.tsx
    logo.tsx          # SVG wordmark
public/assets/
    hero.mp4          # hero background video  (from source site)
    founder.webp      # founder photo          (from source site)
    logo.png          # original brand icon
```

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme`:

| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#0e1417` | dark sections / text |
| `--color-teal` | `#12b3a6` | primary accent |
| `--color-teal-bright` | `#1ed6c6` | highlights on dark |
| `--color-paper` | `#f5f7f7` | light section backgrounds |

**Fonts:** Space Grotesk (display) + Inter (body).

## Notes

- Assets `hero.mp4` and `founder.webp` were pulled from the live source site. Swap in
  official brand assets when you receive them (`public/assets/`).
- The logo is recreated as an SVG wordmark (`components/logo.tsx`) because the source
  logo file is a low-resolution icon — replace `<Logo>` with the real mark if provided.
- Booking and newsletter forms are front-end only; wire them to your backend / CRM.
- Content is in English; the DE/TR toggle is UI-only and ready to connect to i18n.
