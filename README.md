# sameersanjeevi.me

Personal portfolio for Sameer Sanjeevi, AI & Data Product Manager. A single static page: no framework, no build step.

## Content
- **Hero:** AI & Data Product Manager (Program Manager in scope), proof strip of headline metrics, H-1B transfer note.
- **About:** skills-led positioning across IoT, Fortune 20 healthcare, and pharma.
- **Experience:** BioNTech (via Element Technologies), Elevance Health, Thermelgy, with metric-backed bullets.
- **Projects:** jobfinder-v3 (live at https://jobfinder-v3.vercel.app/) and CloudPulze.
- **Skills, education, certifications**, an off-hours section (beatboxing, cooking, sustainability), and contact.

## Design system
- Dark ink background, amber/cyan accents, Space Grotesk + Inter. JetBrains Mono only for dates and tech stacks.
- The "pulse strip" motif nods to audio waveforms and data signal (beatboxer + builder).
- Section labels read like a menu, a nod to cooking: Today's special, The story, Mains, Sides, The spice rack,
  Off the menu, Reservations. Headings stay plain so recruiters can scan.
- Light theme via the nav toggle; dark is the default. Tokens for both live at the top of `css/style.css`.
- Sticky nav with a Résumé button. Bump the `?v=` on the CSS/JS links in `index.html` when you change them.

## File map
```
index.html                     single-page site, meta tags, JSON-LD
css/style.css                  design tokens and all styling
js/script.js                   minimal, respects prefers-reduced-motion
assets/Sameer_Sanjeevi_Resume.pdf
assets/img/portfolio/me.jpg    640x960 portrait (also the social preview image)
.github/workflows/deploy.yml   deploys to GitHub Pages on every push to main
CNAME                          custom domain
```

## Updating
- **Resume:** replace `assets/Sameer_Sanjeevi_Resume.pdf` and keep the filename so existing links keep working.
- **Local preview:** `python3 -m http.server` in this folder, then open http://localhost:8000.
- **Copy rules:** short, direct, metric-backed. No em dashes.
