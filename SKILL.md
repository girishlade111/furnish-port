\---

name: design-system-home-ecommerce-bootstrap-html-template

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Home eCommerce Bootstrap HTML Template



\## Mission

Deliver implementation-ready design-system guidance for Home eCommerce Bootstrap HTML Template that can be applied consistently across content site interfaces.



\## Brand

\- Product/brand: Home eCommerce Bootstrap HTML Template

\- URL: https://themewagon.github.io/furnish/

\- Audience: readers and knowledge seekers

\- Product surface: content site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=Poppins`, `font.family.stack=Poppins, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`

\- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=20px`, `font.size.lg=32px`, `font.size.xl=40px`, `font.size.2xl=56px`, `font.size.3xl=64px`

\- Color palette: `color.text.primary=#211f1c`, `color.text.secondary=#837a6d`, `color.surface.base=#000000`, `color.text.inverse=#ffffff`

\- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=8px`, `space.4=12px`, `space.5=13.6px`, `space.6=16px`, `space.7=24px`, `space.8=32px`

\- Radius/shadow/motion tokens: `radius.xs=50px` | `shadow.1=rgba(0, 0, 0, 0.075) 0px 2px 4px 0px`, `shadow.2=rgba(0, 0, 0, 0.176) 0px 16px 48px 0px` | `motion.duration.instant=150ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



