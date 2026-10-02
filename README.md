<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Furnish-Furniture%20Template-000?style=for-the-badge">
    <img alt="Furnish" src="https://img.shields.io/badge/Furnish-Furniture%20Template-000?style=for-the-badge">
  </picture>
</p>

<p align="center">
  A premium, accessible HTML/CSS furniture eCommerce template built with Bootstrap 5.3, Swiper 11, and Poppins. <br/>
  Features a hero carousel, product collection slider, testimonials grid, newsletter signup, and fully responsive layouts — with a Next.js version also included.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-712cf9?logo=bootstrap" alt="Bootstrap 5.3.3"/>
  <img src="https://img.shields.io/badge/Swiper-11-6332F6?logo=swiper" alt="Swiper 11"/>
  <img src="https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs" alt="Next.js 15"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License"/>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Next.js Version](#nextjs-version)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

**Furnish** is a multi-page furniture eCommerce HTML template designed for modern home and office furniture stores. It combines a clean, minimal aesthetic with practical eCommerce components — hero promotions, product cards, testimonials, contact forms, and newsletter capture.

The project ships in two flavors:

| Version | Stack | Directory |
|---------|-------|-----------|
| **HTML** | Bootstrap 5.3 + Swiper 11 | `./` (root) |
| **Next.js** | Next.js 15 + TypeScript | `./furnish-next/` |

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero carousel (3 slides), collection product slider, testimonial banner, newsletter form, footer |
| **About** | `about.html` | Brand story, stats (200+ products, 5K+ customers, 12 years), values cards |
| **Products** | `products.html` | Product grid with 6 items, hover effects, add-to-cart buttons |
| **Testimonials** | `testimonials.html` | 6 customer review cards with star ratings |
| **Contact** | `contact.html` | Contact info sidebar + full contact form |

---

## Features

- **Responsive Layout** — Mobile-first design adapts across phones, tablets, and desktops
- **Hero Carousel** — 3-slide Swiper carousel with autoplay, navigation arrows, and pagination bullets
- **Product Collection Slider** — Swipeable product grid with responsive slides-per-view
- **Product Grid** — 6 items with original/sale pricing and hover card effects
- **Testimonials Grid** — Customer review cards with star ratings
- **Newsletter Signup** — Inline email capture form with validation
- **Contact Form** — 4-field form (name, email, subject, message) with labels and required indicators
- **Offcanvas Mobile Nav** — Slide-in navigation panel with focus trap and auto-close on resize
- **Accessible** — Skip links, ARIA labels, focus-visible outlines, semantic landmarks
- **Social Links** — Facebook, Twitter/X, Instagram, LinkedIn icon buttons in footer
- **Floating Download Button** — Fixed CTA for template download
- **Dark Footer** — High-contrast footer section with nav links and legal pages
- **Edge Case Handling** — Empty states, image load failures, resize behavior, no-JS fallback

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Bootstrap](https://getbootstrap.com/) | 5.3.3 | Layout grid, components, utilities |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.11.3 | Icon set (social, UI, contact) |
| [Swiper](https://swiperjs.com/) | 11 | Touch-enabled sliders (hero + collection) |
| [Poppins](https://fonts.google.com/specimen/Poppins) | — | Primary typeface (9 weights, italic) |
| [Next.js](https://nextjs.org/) | 15 | React-based framework (furnish-next) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety (furnish-next) |

---

## Project Structure

```
furnish/
├── index.html              # Home page — hero, collection, testimonial, newsletter
├── about.html              # About page — story, stats, values
├── products.html           # Products page — grid layout
├── testimonials.html       # Testimonials page — customer reviews
├── contact.html            # Contact page — info + form
├── DESIGN.md               # Full design system documentation
├── SKILL.md                # AI agent skill configuration
│
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles (340 lines)
│   ├── js/
│   │   └── main.js         # Custom JavaScript (98 lines)
│   └── images/
│       ├── product-img-1.jpg
│       ├── product-img-2.jpg
│       ├── product-img-3.jpg
│       ├── product-img-5.jpg
│       ├── product-img-6.jpg
│       ├── slider-img-1.png
│       ├── slider-img-2.png
│       ├── slider-img-3.png
│       └── couch-with-cushions-glass-table.jpg
│
├── furnish-next/           # Next.js 15 + TypeScript version
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
└── referance image.png     # Design reference asset
```

---

## Getting Started

### HTML Version (Root)

No build step required. Open any `.html` file directly in a browser or serve with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### Next.js Version

```bash
cd furnish-next
npm install
npm run dev
# Opens at http://localhost:3000
```

```bash
npm run build   # Production build
npm start       # Start production server
```

---

## Usage

This is an **HTML template** — you can customize it for your own furniture store:

1. **Branding** — Replace the logo text in the navbar and footer
2. **Images** — Swap `assets/images/` with your own product photography
3. **Products** — Edit product names, prices, and images in `index.html` and `products.html`
4. **Content** — Update about story, testimonials, and contact details
5. **Colors** — Modify CSS custom properties in `:root` in `assets/css/style.css`
6. **Phone/Email** — Update `+901234576` and `Info@example.com` across all pages

---

## Design System

A complete design system is documented in [`DESIGN.md`](./DESIGN.md) covering:

- **Color Palette** — Primary (#000), Secondary (#d47f31), text, surface, border, and link colors
- **Warm Gray Scale** — 9-step scale from `#ecebe9` to `#211f1c`
- **Typography** — Poppins at 7 scale steps (12px–64px), 5 weight variants
- **Spacing Scale** — 8-step token system (4px–32px)
- **Shadows & Radius** — 2 shadow levels, pill (50px) and none (0) radius
- **Component Specs** — Navbar, hero slider, product card, buttons, testimonial, newsletter, footer, offcanvas
- **Anti-Patterns** — Prohibited patterns with edge-case handling guide

---

## Accessibility

Furnish targets **WCAG 2.2 AA** compliance:

- **Skip Link** — First focusable element on every page
- **ARIA** — `aria-current="page"` on active nav, `aria-label` on social links and controls, `aria-roledescription="carousel"` on sliders
- **Focus** — Visible `2px solid` focus-visible outlines on all interactive elements
- **Keyboard** — Tab through all links, buttons, and form controls; Escape closes offcanvas
- **Contrast** — Body text (#211f1c on #fff) meets 4.5:1 ratio
- **Semantic HTML** — `<nav>`, `<main>`, `<footer>`, `<h1>`–`<h3>` landmarks
- **Offcanvas** — Focus trap when open, auto-closes on window resize to ≥992px
- **Form Labels** — All inputs have associated `<label>` elements
- **Decorative Icons** — All `<i>` icons use `aria-hidden="true"`

---

## Next.js Version

The [`furnish-next/`](./furnish-next/) directory contains a Next.js 15 port with TypeScript, App Router, ESLint, and PostCSS configuration.

```bash
cd furnish-next
npm install
npm run dev        # Development
npm run build      # Production build
npm run lint       # ESLint check
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Opera | Last 2 versions |
| IE / Legacy | Not supported |

---

## License

MIT License. This template is free for both personal and commercial use.

Originally distributed by [ThemeWagon](https://themewagon.com/) and developed by [CodesCandy](https://codescandy.com/).

---

<p align="center">
  <sub>Built with Bootstrap 5.3, Swiper 11, and Poppins.</sub>
  <br/>
  <sub>Next.js version powered by Next.js 15 + TypeScript.</sub>
</p>

---

*Built by Girish Lade — https://ladestack.in*
