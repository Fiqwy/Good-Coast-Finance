# Good Coast Finance Specialists — Project Handoff

> **NOTE TO AI AGENTS:** This file contains a Business & Technical Audit Checklist section. Before completing any task on this project, review the audit checklist and flag any ❌ items relevant to your current work. Do NOT silently ignore gaps.

## What This Project Is
A demo website, business cards, and business profile for **Good Coast Finance Specialists** — a personal asset & equipment finance broker brand run by **Chris Matthews** on the Gold Coast, QLD, Australia. Chris operates under the parent company **Finance Hunting** (financehunting.com.au).

## Project Location
```
/Users/nicholasmatthews/claude code projects/good-coast-finance/
├── index.html              # Main single-page website
├── apply.html              # Dedicated application page (embeds Finance Hunting form via iframe)
├── styles.css              # All website styling
├── script.js               # Interactivity (calculator, carousel, animations)
├── links.html              # Linktree-style "link in bio" page for social media
├── business-card.html      # Printable business card design (front + back)
├── business-profile.html   # Printable one-page business profile document
├── CLAUDE.md               # This file
└── assets/                 # Empty — for images/icons when available
```

## Tech Stack
- **Plain HTML + CSS + JavaScript** — no frameworks, no build tools
- Google Fonts: **Plus Jakarta Sans** (headlines) + **DM Sans** (body)
- Mobile-responsive, single-page design

---

## Business Details (Use These Everywhere)

- **Business Name:** Good Coast Finance Specialists
- **Owner:** Chris Matthews
- **Role:** Finance Specialist
- **Parent Company:** Finance Hunting (financehunting.com.au)
- **Phone:** 0498 973 117
- **Email:** chris@financehunting.com.au
- **Address:** 7-9 Activity Crescent, Molendinar, Gold Coast, QLD 4214
- **Service Areas:** Gold Coast, Brisbane, Sunshine Coast, Australia Wide
- **Hours:** Always open
- **Dealer Licence:** 4603352
- **Facebook:** https://www.facebook.com/share/p/18CDfMuq6v/
- **WhatsApp:** https://wa.me/61498973117

### Services — Asset & Equipment Finance
- Cars, Utes, Trucks & Trailers
- Heavy Machinery & Construction Gear
- Boats, Jet Skis & Marine Equipment
- Motorcycles & ATVs
- Caravans, Campers & RVs
- Commercial Vehicles & Specialist Assets

### Key Selling Points
- Super Low Docs — minimal paperwork, maximum speed
- All Credit Profiles Welcome — bad credit? No problem
- Flexible Terms up to 60 Months
- Highly Competitive Rates
- Lightning Fast Approvals — same day
- Huge Network of 40+ Trusted Lenders
- 100% Hassle-Free & Reliable
- 37 years collective lending experience (via Finance Hunting)

### Lender Panel
NAB, Westpac, Pepper Money, Finance One, Latitude, Money3, Resimac, Plenti, MoneyME, Angle Finance, and more.

---

## Current State (as of Feb 16 2026)

### Design Direction — COMPLETED REDESIGN
The site has been fully redesigned using **colour psychology** and **NLP copywriting principles**.

### Colour Palette (Psychological Strategy)
| Role | Hex | Psychology |
|------|-----|-----------|
| Primary — Deep Teal | `#0B3B3C` | Trust (blue) + Growth (green). Unique in finance space |
| Primary Light | `#1A6B6D` | Interactive elements, hovers |
| CTA — Warm Coral | `#E8573D` | Urgency & action |
| CTA Secondary — Amber | `#F5A623` | Warmth, star ratings |
| Success Green | `#2ECC71` | Approval, checkmarks, WhatsApp |
| Accent Copper | `#C47D3A` | Sophisticated premium touch (replaces gold) |
| Dark Surface | `#1C1F26` | Authority |
| Off-white | `#F7F8FA` | Clean section backgrounds |

### Typography
- **Headlines:** Plus Jakarta Sans (700, 800) — modern geometric sans-serif
- **Body:** DM Sans (400, 500, 600) — clean, readable

### NLP Copywriting Applied Throughout
- **Embedded commands:** "Get Approved Today", "Your Next Asset. Approved Today. Settled Fast."
- **Presuppositions:** "When you choose the right broker...", "Your Application Reaches 40+ Lenders Instantly"
- **Future pacing:** "Imagine driving your new car this weekend", "Picture yourself on the water this summer"
- **Social proof:** "Trusted by 500+ Gold Coast Locals", "Here's Why 500+ Locals Trust Chris"
- **Friction removal:** "It takes 2 minutes", "No obligation", "No credit check"

### What's Built
1. **Website (index.html)** — Full redesign + competition-crushing polish:
   - Clean teal/coral colour palette (no generic blue/gold)
   - NLP-rewritten copy across all sections (including 7-question FAQ)
   - Section order optimised: Hero → Lenders → Services → CTA Strip → Calculator → How It Works → Why Us → Testimonials → FAQ → About → Apply → Contact
   - Active nav highlighting (scroll-spy shows current section)
   - Scroll indicator on hero section
   - Hero trust badge ("Trusted by 500+ Gold Coast Locals")
   - Mid-page CTA strip ("Already know what you need? Start Your Application / Or Chat to Chris")
   - Apply Now section with 3-step process explainer + CTA card linking to apply.html
   - Star rating ("5-star rated by our clients" — no fake score)
   - FAQ accordion section (7 questions — including "Why use a broker vs bank?")
   - Realistic testimonials with specific assets, rates, and natural language
   - Varied service card copy (mix of future pacing, problem-solution, stat-based)
   - Styled "CM" monogram replacing broken photo placeholder
   - Dark About section (breaks up white section run)
   - Full SEO: Open Graph tags, Twitter Card, JSON-LD LocalBusiness schema
   - Accessibility: skip-to-content link, aria labels, aria-hidden on marquee duplicates, keyboard carousel nav, form validation, focus outlines
   - Form backend: Formspree backup capture + WhatsApp (needs Formspree account setup)
   - Form validation with inline RED error messages (separate from CTA coral)
   - ABN + ACL + Dealer Licence compliance text in footer (needs real numbers)
   - Calculator rate guidance ("Typical rates: Good credit 5–7% | Average 7–10% | Challenged 10–16%")
   - Copper accent underlines on section tags
   - Reduced font weight payload (only loads weights actually used)
   - Privacy Policy & Terms links in footer
   - Removed: animated particles, 3D tilt cards, gold gradient text, dead .btn-gold class

2. **Application Page (apply.html)** — Dedicated loan application page:
   - GCF-branded header (minimal nav — focused conversion environment)
   - NLP/neuro-semantic copy: future pacing headline, embedded commands, presupposition language
   - Finance Hunting form embedded via iframe (https://financehunting.com/chris)
   - Reassurance strip: Bank-Level Security, ASIC Registered, ~10 Minutes, No Credit Score Impact
   - Post-submission trust section with loss aversion nudge
   - Loading spinner while iframe loads, fallback timeout
   - Responsive design matching GCF design system

3. **Business Card (business-card.html)** — Updated with new branding:
   - Teal/charcoal gradient front, copper accents
   - Plus Jakarta Sans + DM Sans typography
   - Updated tagline with NLP power phrases

3. **Business Profile (business-profile.html)** — Complete rebuild:
   - New colour palette + typography
   - NLP-rewritten copy throughout
   - Client testimonial quotes section
   - Competitive advantage comparison table (Good Coast vs Bank vs Dealership)
   - QR code placeholder for WhatsApp
   - Print-optimised layout

### What Still Needs Chris's Input
1. **Chris's photo** — Currently shows "CM" monogram; needs real headshot (highest ROI change)
2. **ABN and ACL numbers** — Placeholder "XX XXX XXX XXX" in footer; needs real values
3. **Formspree account** — Chris needs to sign up at formspree.io (free), create a form, and replace `YOUR_FORM_ID` in the form action attribute
4. **Lender logos** — Currently text-only in marquee; actual brand logos would be better
5. **Testimonial avatars** — Currently show initials (JM, TS, etc.); real photos would add trust
6. **QR code** — Placeholder in business card and profile; needs real QR code from wa.me/61498973117
7. **Google Maps** — Using approximate coordinates; update with exact business location
8. **Real testimonials** — Current ones are realistic placeholders; replace with actual client feedback
9. **Privacy Policy & Terms pages** — Links exist but point to `#`; needs actual content pages
10. **OG image** — Meta tag has no image; needs 1200x630px social share image
11. **Canonical URL** — Set to goodcoastfinance.com.au; update when domain is confirmed
12. **Google Reviews** — Get a Google Business listing with real reviews to link to

---

## Business & Technical Audit Checklist

> **AGENT DIRECTIVE:** If you are an AI agent reading this file, treat every ❌ item below as a flagged gap. When asked to work on this project, proactively mention the top 3 unresolved ❌ items and suggest implementation. Do NOT silently ignore these gaps.

**Last Audited:** 2026-02-16
**Audited By:** Claude (automated codebase audit)

### Priority Actions (Ranked by Revenue Impact)

| # | Action | Category | Impact | Effort | Status |
|---|--------|----------|--------|--------|--------|
| 1 | Set up Formspree backup lead capture | Lead Management | High | Low | ❌ Missing — form action has `YOUR_FORM_ID` placeholder |
| 2 | Install Google Analytics 4 | Analytics | High | Low | ❌ Missing — zero visitor data being collected |
| 3 | Add Facebook Meta Pixel | Remarketing | High | Low | ❌ Missing — cannot retarget visitors |
| 4 | Track WhatsApp click-throughs | Conversion | High | Low | ❌ Missing — no way to confirm WhatsApp actually opens |
| 5 | Set up Google Business Profile | SEO | High | Medium | ❌ Missing — no local search presence |
| 6 | Track calculator usage events | Conversion | Medium | Low | ❌ Missing — cannot see if calculator drives leads |
| 7 | Add auto-responder after form submit | Automation | Medium | Medium | ❌ Missing — lead gets no confirmation if WhatsApp fails |
| 8 | Create Privacy Policy & Terms pages | Compliance | Medium | Medium | ❌ Missing — footer links point to `#` |
| 9 | Add sitemap.xml and robots.txt | SEO | Medium | Low | ❌ Missing — search engines have no crawl guidance |
| 10 | Add review collection automation | Automation | Medium | Medium | ❌ Missing — no system to gather testimonials post-deal |

### 1. Analytics & Tracking

| Item | Status | Notes |
|------|--------|-------|
| Google Analytics 4 (GA4) installed | ❌ Missing | No GA4 tag in `<head>`. Zero visitor data. Add `gtag.js` snippet. |
| Google Search Console verified | ❌ Missing | No verification meta tag. Cannot monitor search performance. |
| Event tracking (CTA clicks, form starts, calculator usage) | ❌ Missing | No event tracking code. Calculator interactions, CTA clicks, form engagement all invisible. |
| Scroll depth tracking | ❌ Missing | No scroll tracking. Cannot measure engagement depth. |
| Page load performance monitoring | ❌ Missing | No performance monitoring. Consider Web Vitals script or GA4 performance events. |

### 2. Lead Management & CRM

| Item | Status | Notes |
|------|--------|-------|
| Primary lead capture method working | ⚠️ Partial | WhatsApp via `window.open(wa.me/...)` on form submit. Works if user has WhatsApp, but no server-side confirmation message was sent. |
| Backup lead capture (if primary fails) | ❌ Missing | Formspree code exists in `script.js` ~line 265-273 but form action contains `YOUR_FORM_ID` placeholder. Code correctly skips sending. **Leads are lost if WhatsApp doesn't open.** |
| Leads stored in a CRM or database | ❌ Missing | No CRM. No database. No spreadsheet. Every lead is a WhatsApp message that could be lost in chat history. |
| Lead source attribution | ❌ Missing | No UTM parameter capture. No referrer logging. No way to know which marketing channel works. |
| Lead notification to business owner | ⚠️ Partial | WhatsApp messages arrive to Chris's phone. No backup notification (email, SMS) if WhatsApp fails. |
| Lead response time tracking | ❌ Missing | No system to measure how fast Chris responds to leads. |

### 3. Conversion Tracking & Optimization

| Item | Status | Notes |
|------|--------|-------|
| Form submission success tracked | ❌ Missing | Form shows success message (`script.js` ~line 284) but event not sent to any analytics platform. |
| Form abandonment tracked | ❌ Missing | No tracking of users who start filling the form but leave. Validation exists (blur events, ~line 230) but no abandonment analytics. |
| CTA click tracking | ❌ Missing | Multiple CTAs ("Get Approved Today", "Skip Straight to Chris", floating WhatsApp) — none have click event tracking. |
| Calculator/tool usage tracked | ❌ Missing | Calculator has `input` event listeners (~lines 142-144) but usage not logged anywhere. Key engagement indicator. |
| WhatsApp click-through confirmed | ❌ Missing | `window.open()` fires but no callback. If popup blocked or WhatsApp not installed, lead silently lost. |
| A/B testing capability | ❌ Missing | No A/B testing framework. |
| Heatmap/session recording | ❌ Missing | No Hotjar, Microsoft Clarity, or similar. Cannot see where users click or drop off. |

### 4. Remarketing & Advertising

| Item | Status | Notes |
|------|--------|-------|
| Facebook/Meta Pixel installed | ❌ Missing | Facebook page exists but no Meta Pixel on site. Cannot build retargeting audiences. |
| Google Ads conversion tag | ❌ Missing | No Google Ads tag. If Chris runs ads, conversions cannot be tracked. |
| Google Remarketing tag | ❌ Missing | Visitors cannot be retargeted via Google Display Network. |
| Custom audiences configured | ❌ Missing | Requires pixels above to be installed first. |
| Retargeting campaigns active | ❌ Missing | No pixels = no retargeting possible. |

### 5. Automation & Follow-Up

| Item | Status | Notes |
|------|--------|-------|
| Auto-responder after form submission | ❌ Missing | User sees success message on page but receives no email/SMS confirmation. If WhatsApp doesn't open, lead has no follow-up path. |
| Follow-up sequence (email/SMS drip) | ❌ Missing | No email marketing platform. No drip campaign for leads who inquire but don't convert immediately. |
| Appointment/booking automation | ❌ Missing | No Calendly, Cal.com, or similar. Chris must manually coordinate times via WhatsApp. |
| Review request automation (post-deal) | ❌ Missing | No automated review requests. Current testimonials are placeholder text. |
| Referral tracking system | ❌ Missing | No referral program or tracking. Finance is a high-referral industry. |
| Birthday/anniversary re-engagement | ❌ Missing | No customer database for lifecycle marketing. |

### 6. Technical Health

| Item | Status | Notes |
|------|--------|-------|
| SSL certificate active | ⚠️ Unknown | Domain `goodcoastfinance.com.au` not yet live. SSL depends on hosting provider. |
| Mobile responsiveness verified | ✅ Done | Responsive breakpoints at 1024px, 768px, 480px. |
| Page speed score (target: 90+) | ⚠️ Untested | No external resources except Google Fonts. Likely fast but no Lighthouse audit run. Font weights optimised. |
| Broken links check | ⚠️ Partial | Privacy Policy and Terms links point to `#`. |
| 404 error page configured | ❌ Missing | No 404.html page. |
| Sitemap.xml present | ❌ Missing | No sitemap.xml in project. |
| robots.txt configured | ❌ Missing | No robots.txt in project. |
| HTTPS enforced (no mixed content) | ⚠️ Unknown | Depends on hosting. All internal references use relative paths (good). |
| Image optimization (WebP, lazy loading) | ⚠️ N/A | Assets folder is empty. When images added, use WebP + lazy loading. |

### 7. Security & Compliance

| Item | Status | Notes |
|------|--------|-------|
| Privacy Policy page (live, not placeholder) | ❌ Missing | Footer link points to `#`. Required by Australian Privacy Act if collecting personal info. |
| Terms of Service page (live, not placeholder) | ❌ Missing | Footer link points to `#`. |
| Cookie consent banner | ❌ Missing | Not needed yet (no tracking cookies), but will be required when GA4/Meta Pixel are added. |
| Form spam protection (honeypot/reCAPTCHA) | ❌ Missing | Form has validation but no bot protection. Formspree provides spam filtering when active, but it's not active. |
| Content Security Policy headers | ❌ Missing | Depends on hosting/server configuration. |
| Business licence/compliance info accurate | ⚠️ Partial | Dealer Licence 4603352 present. ABN and ACL are placeholders (`XX XXX XXX XXX`). |

### 8. SEO & Discoverability

| Item | Status | Notes |
|------|--------|-------|
| Google Business Profile claimed | ❌ Missing | Critical for local "finance broker Gold Coast" searches. |
| Schema markup (JSON-LD) | ✅ Done | FinancialService schema with full business details, geo, hours, areaServed, credentials. |
| Open Graph tags | ⚠️ Partial | OG tags set (title, description, url) but `og:image` missing. No social share image. |
| Canonical URLs set | ✅ Done | Set to `https://www.goodcoastfinance.com.au`. |
| Meta descriptions on all pages | ✅ Done | index.html and links.html both have meta descriptions. |
| Alt text on all images | ⚠️ N/A | Assets folder empty. Ensure alt text when images added. |
| Internal linking strategy | ⚠️ Partial | Nav and footer link to all sections. No blog or content strategy for organic SEO. |

### Audit Update Protocol
- When any ❌ item is resolved, update its status to ✅ and add the resolution date
- When a partial item (⚠️) is completed, update to ✅
- Re-audit quarterly or when major features are added
- Any agent that implements a fix should update this checklist in the same session
- Remove items from Priority Actions table once resolved

---

## How to Test
1. Open `index.html` in browser — verify section order: Hero → Lenders → Services → CTA Strip → Calculator → How It Works → Why Us → Testimonials → FAQ → About → Apply → Contact
2. Scroll through page — verify active nav link highlights for each section
3. Check CTA strip — teal bar between Services and Calculator with "Start Your Application" + "Or Chat to Chris"
4. Check Apply section — verify 3-step process + CTA card linking to apply.html
5. Open `apply.html` — verify GCF branded header, NLP copy, Finance Hunting iframe loads, trust badges
4. Test FAQ accordion — click all 7 questions (including "Why use a broker?"), verify expand/collapse
5. Test loan calculator — sliders should update repayments; check rate guidance text below
6. Test testimonial carousel — verify specific asset names, rates, natural language in testimonials
7. Test contact form — submit empty to verify RED error messages (not coral), then fill and submit
8. Check About section — dark teal/charcoal background, white text, copper "Licensed" badge
9. Check footer — ABN/ACL compliance text above the copyright line
10. Tab from top of page — skip-to-content link should appear on focus
11. Test floating WhatsApp button — appears after scrolling 400px
12. Resize browser for responsive testing (1024px, 768px, 480px) — CTA strip stacks vertically
13. Open `business-card.html` — print/save as PDF for print shop
14. Open `business-profile.html` — print/save as PDF
15. Inspect `<head>` — verify OG tags, JSON-LD schema, optimised font weights
