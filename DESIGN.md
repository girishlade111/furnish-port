# Home eCommerce Bootstrap HTML Template — Design System

## Context and Goals

Token-driven UI guidance for the Furnish eCommerce template (https://themewagon.github.io/furnish/). This document governs all visual and interactive decisions: colors, typography, spacing, component behavior, responsive rules, and accessibility. Every rule exists to produce **consistent, accessible, performant** interfaces with zero ambiguity.

**Component density (per page):** links (42), buttons (19), lists (3), cards (2), inputs (1), navigation (1).

---

## Design Tokens and Foundations

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `color.text.primary` | `#211f1c` | Body copy, headings |
| `color.text.secondary` | `#837a6d` | Muted text, labels, footnotes |
| `color.text.inverse` | `#ffffff` | Text on dark surfaces |
| `color.brand.primary` | `#000000` | Primary buttons, active states, Swiper theme |
| `color.brand.secondary` | `#d47f31` | Accent, secondary buttons, decorative elements |
| `color.surface.base` | `#ffffff` | Page background, cards, navbar |
| `color.surface.dark` | `#211f1c` | Footer background |
| `color.border.light` | `#ecebe9` | Subtle dividers, card borders |
| `color.border.default` | `#dad7d2` | Default borders |
| `color.link.default` | `#211f1c` | Navigation links |
| `color.link.hover` | `#000000` | Navigation hover |
| `color.link.footer` | `#837a6d` | Footer links |
| `color.link.footerHover` | `#ffffff` | Footer link hover |

### Gray Scale (Warm Tones)

| Token | Value |
|---|---|
| `color.gray.100` | `#ecebe9` |
| `color.gray.200` | `#dad7d2` |
| `color.gray.300` | `#c5c0b9` |
| `color.gray.400` | `#b3aca3` |
| `color.gray.500` | `#a0988d` |
| `color.gray.600` | `#837a6d` |
| `color.gray.700` | `#615b51` |
| `color.gray.800` | `#433e38` |
| `color.gray.900` | `#211f1c` |

### Typography

| Token | Value | Usage |
|---|---|---|
| `font.family.primary` | `Poppins, sans-serif` | All text |
| `font.size.3xl` | `64px` | Hero display |
| `font.size.2xl` | `56px` | Section hero headings |
| `font.size.xl` | `40px` | Large section titles |
| `font.size.lg` | `32px` | Section headings |
| `font.size.md` | `20px` | Lead paragraphs, subtitle |
| `font.size.base` | `16px` | Body text |
| `font.size.sm` | `14px` | Small text, metadata |
| `font.size.xs` | `13px` | Nav links (0.875rem) |
| `font.size.2xs` | `12px` | Brand sub-label (0.75rem) |
| `font.weight.normal` | `400` | Body |
| `font.weight.medium` | `500` | Nav links |
| `font.weight.semibold` | `600` | Buttons, emphasized text |
| `font.weight.bold` | `700` | Headings |
| `font.lineHeight.base` | `24px` | Body line height |
| `font.lineHeight.tight` | `1` | Nav line height |

### Spacing Scale

| Token | Value |
|---|---|
| `space.1` | `4px` |
| `space.2` | `5px` |
| `space.3` | `8px` |
| `space.4` | `12px` |
| `space.5` | `13.6px` |
| `space.6` | `16px` |
| `space.7` | `24px` |
| `space.8` | `32px` |

### Radius, Shadow, Motion

| Token | Value |
|---|---|
| `radius.xs` | `50px` |
| `radius.none` | `0` |
| `shadow.1` | `rgba(0,0,0,0.075) 0px 2px 4px 0px` |
| `shadow.2` | `rgba(0,0,0,0.176) 0px 16px 48px 0px` |
| `motion.duration.instant` | `150ms` |
| `motion.duration.fast` | `300ms` |

### Spacing Presets (Bootstrap-derived, used in markup)

| Token | Value |
|---|---|
| `space.nav.link.padding` | `0.75rem 1rem` |
| `space.section.padding` | `py-lg-10` (`48px` top/bottom desktop) |
| `space.container.gap` | `gap-4` (`16px`) |

---

## Component-Level Rules

### 1. Navigation Bar (`.navbar-custom`)

**Intent:** Persistent top navigation with brand, centered page links, contact info, and mobile offcanvas trigger.

#### Anatomy

```
┌──────────────────────────────────────────────────────────────────┐
│ [Brand]    [Home] [About us] [Products] [Testimonials] [Contact]  │  [+901234576] [☰] │
└──────────────────────────────────────────────────────────────────┘
```

#### Variants

| Variant | Description |
|---|---|
| Desktop | Full layout with centered nav links |
| Mobile (<992px) | Offcanvas hamburger replaces inline nav; brand + phone + hamburger visible |

#### States

| State | Brand | Nav Link | Hamburger Icon |
|---|---|---|---|
| default | — | `color.gray.700`, `font.size.xs`, uppercase, weight 500 | `color.text.primary` |
| hover | — | `color.gray.900` | — |
| focus-visible | Must show `2px solid` outline | Same | Same |
| active | — | `color.brand.primary` (`.active` class) | — |
| disabled | N/A | N/A | N/A |

#### Interactions

- **Keyboard:** Tab moves through all nav links; Enter activates; Escape closes offcanvas.
- **Pointer:** Click nav link navigates; click hamburger toggles offcanvas.
- **Touch:** Same as pointer; offcanvas slides from right edge.

#### Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `>=992px` | Full inline nav. Hamburger hidden. |
| `<992px` | Inline nav hidden. Hamburger visible. Offcanvas panel replaces nav. |

#### Edge Cases

- **Long brand text:** Must not overflow; `letter-spacing: 0.12rem` on first line.
- **Active link:** `.active` class + `aria-current="page"` must be present on current page.
- **Offcanvas focus trap:** Focus must loop within offcanvas while open.

---

### 2. Hero Slider (Swiper)

**Intent:** Full-width promotional carousel showcasing featured products with discount badges, imagery, and CTAs.

#### Anatomy

```
┌───────────────────────────────────────────────────────────────┐
│  [Discount Badge]                                              │
│  [Heading]                                                     │
│  [Product Image (centered)]                                    │
│  [Description (desktop only)]  [Price]  [View Details btn]    │
│                                                               │
│  ◉ ◉ ◉ (pagination bullets)    ◀ ▶ (navigation arrows)        │
└───────────────────────────────────────────────────────────────┘
```

#### Variants

| Variant | Count | Content |
|---|---|---|
| Slide 1 | — | "20% Sell", "Comfy Sofa Home-Office", $50 |
| Slide 2 | — | "10% Sell", "Exchange your old furniture", $45 |
| Slide 3 | — | "25% Sell", "Crafted royal comfort sofa", $89 |

#### States

| Element | Default | Hover | Focus-visible |
|---|---|---|---|
| Discount badge | `color.brand.secondary`, italic | No change | Outline |
| Product image | `img-fluid` (100% width) | No change | N/A |
| View Details btn | `btn-primary` (black bg, white text) | Black bg | Outline |
| Arrow prev/next | Black chevron, 40px | Opacity transition | Outline |
| Pagination bullet | 10px circle, transparent fill, 2px black border | Opacity .3→.5 | Outline |
| Active bullet | Black fill, black border | — | — |

#### Interactions

- **Keyboard:** Arrow keys navigate slides; Tab reaches pagination bullets and arrows; Enter activates link.
- **Pointer:** Click/drag swipe; click arrows; click bullets; click "View Details" to navigate.
- **Touch:** Swipe gesture. Autoplay pauses on interaction.
- **Autoplay:** 3000ms delay, `slide` effect, 800ms speed. Must pause on hover/focus.

#### Responsive Behavior

| Breakpoint | SlidesPerView | Description visibility |
|---|---|---|
| `<480px` | 1 | Hidden |
| `480-767px` | 2 | Hidden |
| `>=768px` | 1 | Visible |

---

### 3. Product Card (Collection Swiper)

**Intent:** Display product thumbnails in a swipeable carousel with name and pricing.

#### Anatomy

```
┌───────────────────┐
│   [Product Image]  │  ← link wrapping image
│                   │
│   Product Name     │  ← h3 > a
│   $59.00  $29.00   │  ← strike-through original + sale price
└───────────────────┘
```

#### States

| Element | Default | Hover | Focus-visible |
|---|---|---|---|
| Product image | No transform | Subtle opacity shift (`.img-fluid`) | Outline on parent `<a>` |
| Product name link | `color.text.primary` | Darken | Outline |
| Original price | `text-decoration-line-through`, semibold | No change | — |
| Sale price | `fw-semibold`, default weight | No change | — |

#### Pricing Display Rules

- Original price must always precede sale price.
- Strike-through must use `text-decoration-line-through`.
- Prices must include 2 decimal places.

#### Responsive Behavior

| Breakpoint | SlidesPerView |
|---|---|
| `<480px` | 2 |
| `480-767px` | 2 |
| `768-1023px` | 3 |
| `>=1024px` | 3 |

---

### 4. Buttons

#### Variants

| Variant | CSS Class | Background | Text | Border | Usage |
|---|---|---|---|---|---|
| Primary | `.btn-primary` | `color.brand.primary` | `color.text.inverse` | `color.brand.primary` | CTAs, submit, primary actions |
| Secondary | `.btn-secondary` | `color.brand.secondary` | `color.text.primary` | `color.brand.secondary` | Alternative actions |
| Outline light | `.btn-outline-light` | Transparent | `color.text.inverse` | `color.text.inverse` | Social icons in footer |
| Icon | `.btn-icon` | Any button variant | — | — | Social icon wrappers (3rem × 3rem) |

#### States (all variants)

| State | Rule |
|---|---|
| default | Per variant table above |
| hover | Primary: same (no lighten). Secondary: lighten bg (`#da9250`). Outline-light: fill white |
| focus-visible | Must show visible `2px` outline ring |
| active | `inset 0 3px 5px rgba(0,0,0,.125)` shadow; bg darkens |
| disabled | Full opacity retained (`--bs-btn-disabled-*` per spec); pointer-events:none |
| loading | Must disable pointer events and show a spinner or text replacement |

#### Spacing

- **Icon button:** exactly `3rem × 3rem`, flex centered.
- **Standard button:** Bootstrap default padding. Must not override.

---

### 5. Testimonial Card

**Intent:** Overlaid quote card on a hero background image.

#### Anatomy

```
┌──────────────────────────────────────┐
│  "Lorem ipsum..." (italic quote)      │
│                                      │
│  John Deo (h4, fs-5)                  │
│  CEO, Company Name (small, text-sm)   │
└──────────────────────────────────────┘
```

#### States

| Element | Default |
|---|---|
| Card wrapper | `.card.border-0.shadow-lg.rounded-0` (no radius, large shadow) |
| Quote text | `fst-italic`, body size |
| Author name | `font.size.md` (20px), `mb-1` |
| Author title | `font.size.sm`, `color.text.secondary` |

---

### 6. Newsletter Form

**Intent:** Email capture with inline form.

#### Anatomy

```
┌─────────────────────────────────────────────┐
│           Subscribe to our Newsletter        │
│                                             │
│  [___________________________]  [Subscribe]  │
│         email input              button     │
└─────────────────────────────────────────────┘
```

#### States

| Element | Default | Focus | Error | Success |
|---|---|---|---|---|
| Input | `form-control`, Bootstrap default | Visible focus ring | Red border + error message | Green border + confirmation |
| Submit btn | `btn-primary` | Per button spec | Remains clickable | Changes to "Subscribed" text |

#### Responsive Behavior

| Breakpoint | Layout |
|---|---|
| `>=576px` | Row layout (flex-row) |
| `<576px` | Stacked layout (flex-column) |

#### Edge Cases

- **Empty email:** Must show validation error on submit. `required` attribute must be present.
- **Invalid email:** Must show `type=email` browser validation or custom inline message.

---

### 7. Footer

**Intent:** Full-width dark footer with brand, navigation, social links, contact info, copyright, and legal links.

#### Anatomy

```
┌─────────────────────────────────────────────────────────────┐
│  [Brand]                      [Home] [Services] [Products]  │
│                                [About Us] [Contact]          │
│                                                             │
│  We Design all over the world     [🔗][🔗][🔗][🔗]          │
│                                                             │
│  Email Id                                                    │
│  Info@example.com                   [Contact us]            │
│  ─────────────────────────────────────────────────────────  │
│  © 2025 Furnish...                    Privacy Policy  TOS   │
└─────────────────────────────────────────────────────────────┘
```

#### States

| Element | Default | Hover | Focus-visible |
|---|---|---|---|
| Footer links (`.ft-links`) | `color.link.footer` | `color.link.footerHover` | Outline |
| Social icon buttons | `.btn-outline-light` | Fill white bg | Outline |
| Contact us button | `.btn-outline-light` | Fill white bg | Outline |
| Copyright text | `color.link.footer` | — | — |
| Brand | `color.text.inverse` | No change | — |

#### Responsive Behavior

| Breakpoint | Layout change |
|---|---|
| `>=768px` | Row layouts active; links horizontal |
| `<768px` | Stacks vertically; links become column |

---

### 8. Offcanvas Navigation (Mobile)

**Intent:** Slide-in menu for mobile navigation containing brand and all page links.

#### Anatomy

```
┌──────────────────┐
│ [Brand]      [✕] │  ← close button (btn-close)
│──────────────────│
│ Home              │
│ About us          │
│ Products          │
│ Testimonials      │
│ Contact           │
└──────────────────┘
```

#### States

Same as desktop nav links. Close button must have `aria-label="Close"`.

#### Interactions

- **Keyboard:** Tab cycles through links; Escape closes; Close button dismisses.
- **Focus trap:** When open, focus must remain within offcanvas.
- **Backdrop:** Clicking backdrop closes offcanvas.
- **Swipe:** Right-to-left swipe closes offcanvas on touch devices.

---

## Accessibility Requirements and Testable Acceptance Criteria

### Color and Contrast

| Check | Criteria | How to test |
|---|---|---|
| Text contrast | Body text (`#211f1c` on `#fff`) must pass 4.5:1 ratio | Use contrast checker |
| Large text contrast | Headings (>24px bold) must pass 3:1 ratio | Use contrast checker |
| Footer text | `#837a6d` on `#211f1c` — must pass 4.5:1 for small text | Verify with WCAG contrast tool |
| Focus indicators | All interactive elements must show visible focus ring | Tab through page; visually verify |

### Keyboard

| Check | Criteria |
|---|---|
| Tab order | Must follow visual DOM order |
| Skip link | Should provide a "Skip to content" link as first focusable element |
| All interactive | Every link, button, and form control must be reachable via keyboard |
| No keyboard trap | Focus must not get stuck; offcanvas must trap then release on close |

### ARIA

| Element | Requirement |
|---|---|
| Current page link | `aria-current="page"` |
| Offcanvas | `role="dialog"`, `aria-labelledby` on the offcanvas |
| Close button | `aria-label="Close"` |
| Swiper | `role="region"`, `aria-roledescription="carousel"`, `aria-label` per slide |
| Form input | Associated `<label>` or `aria-label` |
| Navigation | `<nav>` element or `role="navigation"` |
| Social links | `aria-label="Facebook"`, `aria-label="Twitter"`, etc. |
| Icons used alone | `aria-hidden="true"` on `<i>` or `<svg>` elements |

### Testable Pass/Fail Checklist

| ID | Test | Pass | Fail |
|---|---|---|---|
| A01 | Tab through all interactive elements | All reachable, focus visible | Missing focus, unreachable elements |
| A02 | Check body text contrast | ≥4.5:1 | <4.5:1 |
| A03 | Check footer link contrast | ≥4.5:1 | <4.5:1 |
| A04 | Verify `aria-current` on active nav link | Present | Missing |
| A05 | Verify offcanvas close button label | `aria-label` present | Missing |
| A06 | Verify form input has associated label | Label or aria-label | Missing |
| A07 | Verify offcanvas focus trap | Focus loops within | Can tab outside |
| A08 | Skip link present | First focusable element | Not present |

---

## Content and Tone Standards

### Writing Voice

Concise, confident, implementation-focused.

### Pricing

- Prices must include 2 decimal places.
- Original price must use `text-decoration-line-through`.
- Discount percentage (e.g., "%20 Sell") must use italic, `color.brand.secondary`.
- Price format: `$XX.00`.

### Brand

- "Furnish" + "Template" on two lines, uppercase, `font.size.2xs` and `font.size.xs`.
- Letter spacing: `0.12rem` on first line.

### Placeholder Rules

- Product names: Sentence case. Max 3 words.
- Author quotes: Can be Lorem ipsum in template, but must be replaced with real content in production.
- Email placeholder: `Enter your email`.
- Phone number: `+901234576` (template placeholder).

### Social Link Labels

Must use platform name in `aria-label`: "Facebook", "Twitter", "Instagram", "LinkedIn".

---

## Anti-Patterns and Prohibited Implementations

### Prohibited

1. **Raw hex values in component code.** Use the semantic tokens defined above. Never inline `#211f1c` — use `var(--bs-dark)` or the semantic alias.
2. **Custom colors outside the palette.** No blue links, no colored shadows, no gradient backgrounds unless explicitly approved.
3. **Hidden focus outlines.** `:focus { outline: none }` without a replacement is strictly forbidden.
4. **Mixed border-radius families.** Cards must use `rounded-0` (no radius) or `radius.xs` (50px for pills/buttons). Nothing in between.
5. **Stretched or distorted product images.** All product images must use `img-fluid` or maintain aspect ratio. Never set fixed height on product thumbnails.
6. **Adding visual density without purpose.** Do not add extra borders, shadows, or decorative elements that don't serve a clear informational goal.
7. **Conflicting shadow layers.** `shadow.1` and `shadow.2` must not be stacked. One shadow per element.
8. **Inaccessible hover-only states.** Any hover effect (nav links, footer links) must also have a visible focus-visible counterpart.

### Edge Cases to Handle

| Scenario | Action |
|---|---|
| Empty collection (0 products) | Show "No products found" message; hide Swiper navigation |
| Single product | Disable Swiper arrows; hide pagination |
| Product name overflow | Truncate with ellipsis after 3 lines; tooltip on hover |
| Image load failure | Show placeholder box with product initial |
| Offcanvas open while resizing | Close offcanvas automatically when `>=992px` |
| Very long nav link text | Prevent breaking layout; allow text wrap within padding |
| No JavaScript | Ensure all navigation links work as regular `<a>` elements; form submits via standard POST |

### Migration Notes

- Template uses Bootstrap 5.3. If upgrading to 6.x, verify all CSS variable names still map correctly.
- Swiper: if upgrading from v8 to v11, the data attributes API may change. Test all sliders.
- Custom `.navbar-custom` overrides should be refactored into `_variables.scss` if moving to Sass.

---

## QA Checklist

### Visual and Layout

- [ ] Brand renders as two-line uppercase "Furnish / Template" at `font.size.2xs`/`font.size.xs`
- [ ] Nav links are uppercase, 0.875rem, weight 500
- [ ] Hero slider images are centered and full-width
- [ ] Product cards display image, name, original price (strikethrough), sale price
- [ ] Testimonial card has no border-radius (`rounded-0`) and `shadow.2`
- [ ] Newsletter form stacks vertically on mobile, row on `>=576px`
- [ ] Footer has dark background (`color.surface.dark`)
- [ ] Social icon buttons are 3rem × 3rem

### Interaction

- [ ] Hero slider autoplays and can be navigated via arrows, bullets, and swipe
- [ ] Product collection swiper shows correct slidesPerView per breakpoint
- [ ] Offcanvas opens/closes, focus traps, and dismisses on Escape
- [ ] All 42 links navigate correctly or point to `#` (template-only)
- [ ] Hover states work on nav links, footer links, buttons
- [ ] Focus-visible visible on all interactive elements
- [ ] Form validation fires on empty/invalid email

### Accessibility

- [ ] A01–A08 pass (see testable checklist above)
- [ ] All SVG icons have `aria-hidden="true"`
- [ ] All social links have descriptive `aria-label`
- [ ] Swiper carousel has `role="region"` and `aria-roledescription="carousel"`
- [ ] Offcanvas has `aria-labelledby` pointing to its heading

### Code Quality

- [ ] No inline hex color values outside of token definitions
- [ ] No `!important` in custom CSS (override Bootstrap via variable tokens only)
- [ ] Spacing uses the token scale, not arbitrary values
- [ ] All images use `alt` text (production) or empty `alt=""` (decorative)
- [ ] No `outline: none` without `:focus-visible` replacement
- [ ] No duplicate IDs in the DOM
