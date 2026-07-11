# sameersanjeevi.me

Personal portfolio — rebuilt from the old Bootstrap template into a single, fast, static page.

## What changed
- Replaced lorem-ipsum project modals and dead contact form with real content: BioNTech, Elevance Health,
  Thermelgy, jobfinder-v3, CloudPulze, and a personality section (beatboxing, cooking, sustainability).
- Repositioned copy around **Product Manager and Program Manager** roles, with an explicit H-1B transfer note.
- New design system: dark ink background, amber/cyan accents, Space Grotesk + Inter + JetBrains Mono, and a
  signature "pulse strip" motif (nods to both audio waveforms and data signal — beatboxer + builder).
- Dropped the non-functional SB Forms contact form for direct mailto/LinkedIn/GitHub links.
- No framework, no build step — plain HTML/CSS/JS, so it stays fast and trivially deployable.

## File map
```
index.html              single-page site
css/style.css           design tokens + all styling
js/script.js            minimal — respects prefers-reduced-motion
.github/workflows/deploy.yml   auto-deploys to GitHub Pages on every push to main
```

## Before you push
1. Copy your existing `assets/` folder (avatar photo, resume PDF, favicon) into this folder — image paths
   referenced in `index.html` assume `assets/img/portfolio/...` and `assets/Sameer_Sanjeevi_Resume.pdf`.
2. Update the `mailto:` address in `index.html` to your real email.
3. In your repo settings: **Settings → Pages → Source → GitHub Actions**. That's the only manual step —
   after that, every push to `main` redeploys automatically.

## Using this as GitHub Copilot context
Keep this README and the design-token comment block at the top of `css/style.css` — they document intent
(why amber/cyan, why the pulse motif) so Copilot's suggestions stay on-brand instead of drifting toward
generic defaults.
