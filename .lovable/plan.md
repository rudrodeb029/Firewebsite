# Free Fire Tournaments — Landing Page Plan

A single, polished, modern landing page for a Free Fire esports tournament platform with a clear "Download App" call-to-action that triggers a download.

## Sections (top → bottom)

1. **Sticky Navbar** — Logo, nav links (Tournaments, Prizes, How it Works, Download), primary "Download App" button.
2. **Hero** — Bold headline ("Compete. Conquer. Cash Out."), subheadline, two CTAs ("Download App" + "View Tournaments"), Free Fire-styled hero image, animated stats strip (players, prize pool, tournaments live).
3. **Live / Upcoming Tournaments** — 3–4 tournament cards: title, mode (Solo/Duo/Squad), entry fee, prize pool, slots filled, start time, "Join Now" button.
4. **Why Choose Us / Features** — 4 feature cards: Daily Tournaments, Instant Payouts, Anti-Cheat, 24/7 Support.
5. **How It Works** — 3 steps: Download → Register → Compete & Win.
6. **Prize Pool / Stats band** — Big numbers (total paid out, active players, tournaments hosted).
7. **Download App CTA section** — Big card with phone mockup, QR code, and a prominent "Download APK" button that triggers an actual file download.
8. **FAQ** — 5–6 collapsible items.
9. **Footer** — Links, socials, disclaimer ("Not affiliated with Garena").

## Download behavior

The "Download App" buttons (navbar, hero, dedicated section) use an `<a href="/freefire-tournaments.apk" download>` so clicking immediately downloads the file. A placeholder APK file will be added to `public/` so the link works; you can replace it with your real APK by overwriting that file.

## Design direction

- Dark, gamer-esports aesthetic: deep charcoal/near-black background, vibrant orange + electric blue accents, subtle gradient glows, glassmorphism cards, sharp geometric shapes.
- Typography: bold display font for headings (e.g. Bebas Neue / Sora) + clean sans (Inter/Manrope) for body.
- Smooth fade-in / scale-in animations on scroll, hover-scale on cards and buttons, subtle animated grid/particles in hero background.
- Fully responsive (mobile-first), semantic HTML, proper SEO meta (title, description, OG tags).

## Technical notes

- Built as `src/routes/index.tsx` replacing the current placeholder.
- Reusable components in `src/components/landing/` (Navbar, Hero, TournamentCard, FeatureCard, Step, DownloadCTA, FAQ, Footer).
- All colors via semantic tokens added to `src/styles.css` (`--color-accent-orange`, `--color-accent-blue`, gradient + shadow tokens) — no hardcoded color classes.
- Tournament/feature/FAQ data as local arrays (no backend needed).
- Placeholder APK file at `public/freefire-tournaments.apk` so the download link is functional out of the box.

## Out of scope (ask if you want these later)

- Real user accounts / login
- Live tournament backend, payments, leaderboards
- Real APK build — only a placeholder download is wired up
