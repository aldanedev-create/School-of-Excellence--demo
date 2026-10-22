
# School of Excellence — Demo Website

A static multi-page demo website for **School of Excellence**, Kingston, Jamaica — built by **Codeplex Services** to pitch a production website to the principal.

## What This Is

- **Demo concept only** — not the school's official website.
- All fees, schedules, phone numbers and programme listings are drawn from **public directory listings** and **must be confirmed with the school** before production.
- Logo provided by the school. Colour scheme is a **provisional demo proposal**, not verified branding.
- Forms **do not submit data** — they show a demo-only notice.

## Stack

Plain HTML5, CSS3 and vanilla JavaScript. No build step, no backend, no dependencies.

## Structure

```
school-of-excellence-demo/
├── index.html              Homepage
├── pages/
│   ├── programmes.html     Programme cards + category filter
│   ├── admissions.html     Enrolment steps, fee table, enquiry form
│   ├── schedules.html      Day / evening / Saturday times
│   └── contact.html        Contact details + demo form
├── css/
│   ├── tokens.css          Colours, fonts, spacing (change here for rebrand)
│   ├── main.css            Layout, header, footer, components
│   └── pages.css           Page-specific styles
├── js/
│   └── main.js             Mobile nav, filters, demo form handling
├── data/
│   └── school.js           School info + programme data
└── assets/images/
    ├── branding/school-logo.png
    ├── hero/students-learning.webp
    ├── programmes/*.webp
    └── features/flexible-learning.webp
```

## Run Locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

Do **not** open `index.html` via `file://` — the JS module and relative paths need an HTTP server.

## Before Showing the Principal

1. Add the school logo to `assets/images/branding/school-logo.png`.
2. Add the 7 image files listed under `assets/images/` (free-licensed stock or school photos).
3. Test every link and the mobile menu on a phone.
4. Confirm the phone numbers and email the school wants published.

## Key Public-Listing Data Used (Confirm Before Launch)

| Item | Value |
|------|-------|
| Address | 3 Balmoral Avenue, Kingston 10 |
| Slogan | Achieve Academic Success |
| CSEC fee | from $7,000 JMD / subject / term |
| Registration | $2,500 JMD (one-time) |
| Promo | 3 subjects → 1 free · 5 → 2 free |
| Evening classes | 5:30 – 8:30 PM |
| Saturday classes | 8:30 AM – 7:00 PM |

## Disclaimer

> Demo concept by Codeplex Services. Not affiliated with School of Excellence. Fees and schedules are based on public listings and must be confirmed with the school before enrolment.
```

