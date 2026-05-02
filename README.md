# JessaMaePortfolio

Professional portfolio website for Jessa Mae R. Condrillon, built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Install Dependencies

```bash
npm install
```

## Run The Development Server

```bash
npm run dev
```

If port `3000` is busy, run:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3002
```

Then open the local URL shown in the terminal.

## Build For Production

```bash
npm run build
```

## Resume And CV

- Embedded resume preview is shown on the homepage.
- Full resume page is available at `/resume`.
- Full CV page is available at `/cv`.
- Downloadable resume PDF is available at `public/resume.pdf`.

To regenerate the downloadable resume PDF from the actual styled `/resume` page:

```bash
npm run build
node ./scripts/generate-resume-pdf.mjs
```

If you prefer to export manually from the browser:

1. Open `/resume` in the browser.
2. Use the browser print dialog.
3. Choose `Save as PDF`.

## Replace The Resume PDF

Replace this file if you have an updated version:

- `public/resume.pdf`

Keep the same filename if you want the current download button to continue working.

## Add An Optional Profile Photo

Add a file at:

- `public/profile.jpg`

If no photo is present, the site automatically shows an initials card instead.

## Update Confirmed Profile Link

The current confirmed external profile link is:

- `https://www.onlinejobs.ph/jobseekers/info/4691529`

You can update it in [data/portfolio.ts](/home/eisen/JessaMaePortfolio/data/portfolio.ts) if a new confirmed link is provided later.

## Project Notes

- The website uses first-person, HR-friendly wording.
- No email or LinkedIn is included because they have not been confirmed.
- Shared content is centralized in [data/portfolio.ts](/home/eisen/JessaMaePortfolio/data/portfolio.ts).
- Project rules and content constraints are documented in `AGENTS.md`, `PROJECT_CONTEXT.md`, and `CONTENT_GUIDE.md`.
