# Aeroseeds

Marketing site for Aeroseeds — drone-based crop scanning and precision spraying for smallholder and commercial farms in Nigeria. Single scrolling landing page (problem → approach → benefits → savings calculator → get involved) plus standalone `/privacy` and `/terms` pages.

Live copy pitch: farms are scouted and treated blind today (manual walk-throughs, blanket chemical spraying); Aeroseeds replaces that with aerial scans and targeted spraying, cutting crop loss and input cost.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion for scroll/entry animations

## Running it

```bash
npm install
npm run dev
```

Opens on [http://localhost:3000](http://localhost:3000). Hot reload is on by default.

Other scripts:

```bash
npm run build   # production build + type check
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/app/
  page.tsx        # assembles the landing page from the sections below
  privacy/        # /privacy
  terms/          # /terms
  layout.tsx       # fonts, metadata, global background/text colors

src/components/
  navbar.tsx                # sticky nav, anchors to section ids on page.tsx
  hero.tsx
  problem-section.tsx       # #problem
  what-if-section.tsx       # #context
  our-approach.tsx          # #system — scan / analyze / decide
  benefit-one.tsx / benefit-two.tsx / benefit-three.tsx   # #impact
  understand-your-land.tsx  # farm-size + service savings calculator
  cta-section.tsx           # "Get involved" modal (submits via FormSubmit.co) + footer
```

Section anchors used by the navbar (`#problem`, `#context`, `#system`, `#impact`, `#understand-your-land`) are wrapper `<div id="...">`s in `page.tsx`, not inside the section components themselves — don't rename those ids without updating `navbar.tsx` and `page.tsx` together.

## Notes for whoever touches this next

- **Savings calculator** (`understand-your-land.tsx`): cost constants live in a `SHARED` / `SERVICES` block at the top of the component, sourced from 2025/26 Nigerian market rates (maize benchmark — see inline comments for the per-line assumptions). Update those constants rather than the JSX if pricing changes.
- **Get Involved form** (`cta-section.tsx`): posts directly to FormSubmit.co's AJAX endpoint client-side, no backend involved. If the recipient address ever changes, FormSubmit requires a one-time confirmation click on an activation email sent to the new address before submissions start arriving.
- Images and background art live in `public/`; most sections use responsive desktop/mobile image pairs (`*-desktop.png` / `*-mobile.png`).
- Custom local font (`TestTiemposHeadline`) is loaded in `layout.tsx` alongside Google fonts IBM Plex Mono and Libre Caslon Text — brand type pairing is mono for UI/labels, serif for display headings.

## Deploying

Any Next.js-compatible host works (Vercel is the obvious default — zero config). No environment variables are required; the form submission endpoint is a public client-side call.
