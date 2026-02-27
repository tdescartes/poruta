# Landing Page Redesign — Implementation Tracker

## Overview

Replacing the current landing page with the new paid design. The new design uses a **brutalist, editorial aesthetic** with sharp rectangles, monospace system labels, CSS-animated dashboard UIs, and a tinted-neutral + green color system.

## Design Principles (DO NOT CHANGE)

- **Zero border-radius**: All elements are sharp rectangles
- **Brutalist hovers**: translate(-4px, -4px) + solid black drop-shadow
- **Monospace system labels**: JetBrains Mono for all labels/tags, uppercase tracking-widest
- **Tinted neutrals**: "surface" palette (green-tinted grays) replaces generic slate/gray
- **Blueprint grid backgrounds**: Subtle 20px grid overlay on dark panels
- **Form functionality preserved**: Google Forms POST endpoints unchanged

## Tasks

### Infrastructure
- [x] Analyze current codebase & new design
- [x] Create this implementation plan
- [ ] Update `tailwind.config.ts` — Add `poruta` + `surface` color scales, `fontFamily` (JetBrains Mono), all animation keyframes
- [ ] Rewrite `globals.css` — New base styles, custom utilities (.hero-bg, .btn-strict, .no-scrollbar)
- [ ] Update `layout.tsx` — Add JetBrains Mono font, update metadata

### Components (rewrite to match new design)
- [ ] `Navbar.tsx` — Sharp nav, box icon + PORUTA wordmark, uppercase links, inline "Book Demo" link
- [ ] `Hero.tsx` — Full hero-bg section with animated Macro Command Center dashboard
- [ ] `MarketOpportunity.tsx` → Rename/repurpose to "Continental Scale" ribbon (overlapping card)
- [ ] `Challenges.tsx` → "The Cost of Fragmented Trade" — editorial 2-column layout with sticky header
- [ ] New `Capabilities.tsx` — "Platform Capabilities" with Black Box dashboard + Network Topology animations
- [ ] New `About.tsx` → "About" section — Mission/Vision + Approach timeline
- [ ] `Contact.tsx` — Redesigned contact form + contact info sidebar (KEEP form POST logic)
- [ ] `CTAFooter.tsx` — Minimal footer with logo + 3 links + copyright

### Composition
- [ ] Update `page.tsx` — New section order: Navbar → Hero → Scale → Problem → Capabilities → About → Contact → Footer
- [ ] Remove unused components (Solution.tsx, Features.tsx, Benefits.tsx, CompetitiveAdvantage.tsx)

### Verification
- [ ] Build succeeds (`npm run build`)
- [ ] Commit & push all changes

## Preserved Functionality

### Contact Form (Contact.tsx)
- Google Forms URL: `https://docs.google.com/forms/d/e/1FAIpQLSci4iYnLMagsWzDEsWcqaN5Pxp6vrXg4kBbAxuauauHrZqi7g/formResponse`
- Fields: entry.89711842 (name), entry.432833327 (email), entry.666677065 (company), entry.974077450 (phone), entry.65402589 (message)

### Book Demo Modal (BookDemoModal.tsx)
- Google Forms URL: `https://docs.google.com/forms/d/e/1FAIpQLSeoqix_OL9Jg5FZBoz_12B2NzxygVGcjODEcMjxL3nF64l7lw/formResponse`
- Fields: entry.2139731301 (name), entry.248402731 (email), entry.2032801250 (company), entry.465060579 (phone), entry.1912247739 (message)
- BookDemoModal.tsx component itself is NOT redesigned (it's a dialog overlay)
