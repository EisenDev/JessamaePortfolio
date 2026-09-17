# JessaMaePortfolio Redesign Guide: Minimalist & Powerful Editorial UI/UX

This document provides a comprehensive structural, architectural, and design analysis of **EisenPortfolio** (`projects/random-proj/EIsenPortfolio`), and outlines the blueprint for redesigning **JessaMaePortfolio** into the same minimal, editorial, and powerful standard.

> **Status:** Planning & Documentation Phase.  
> **Rule:** No production code or component implementations will be modified until the user provides the final sequence, content structure, and approved copy.

---

## 1. Executive Summary & Aesthetic Analysis

The UI/UX demonstrated in **EisenPortfolio** departs from heavy, ornament-laden traditional designs and adopts an **Editorial Minimalism** aesthetic:

| Design Dimension | Previous State (JessaMaePortfolio) | Target State (EisenPortfolio Pattern) |
| :--- | :--- | :--- |
| **Theme / Tone** | Floral decorative graphics, script fonts, complex borders | Refined Champagne `#F6F3ED` paper-clean minimalism, high typography discipline |
| **Typography** | Mixed decorative serif + script font accents | High-contrast sans-serif with tight tracking (`-0.01em`) and uppercase tracking (`0.15em`) |
| **Hero Section** | Heavy frame borders, floral clip-art overlays | Full-bleed hero, massive name typography, subtle accent hairlines, and softly faded portrait seamlessly blending into the background with directional gradient masks |
| **Header / Nav** | Full-width traditional banner with borders | Floating glassmorphism pill (`glass-panel editorial-shadow`, blur, rounded-full) |
| **Content Cards** | Dense border containers | Clean white surfaces (`#FBFAF7`), subtle hairlines (`#DDD7CE`), 1-4 numbered badges, italicized takeaways |
| **Experience** | Multi-nested card blocks | Symmetrical vertical timeline with center rule, circular node indicators, and date badges |
| **Call to Action** | Low-contrast footer section | High-contrast dark charcoal / obsidian block (`#111111`) with rounded pill action buttons and icon accents |
| **Resume Handling**| Complex in-page document renderer / canvas embeds | Dedicated direct PDF link (`/resume` redirecting to `/JessaMaeCondrillon-Resume.pdf`), opening in native browser PDF tab |

---

## 2. Deep Dive: EisenPortfolio Architectural Patterns

### 2.1 The Resume Mechanism (PDF View via Browser Native Viewer)
As observed in `EIsenPortfolio/src/app/resume/page.tsx` and screenshot `orca-paste-1789649271412-1df8b061-8a48-49a5-aea8-840532e944a8.png`:
- **Architecture**: Rather than rendering bulky canvas or HTML-rendered CV blocks directly inside the main UI flow, the resume is treated as a first-class PDF asset stored in `/public`.
- **Route Handling**:
  - `src/app/resume/page.tsx` contains a lightweight Next.js redirect:
    ```tsx
    import { redirect } from "next/navigation";
    export default function ResumePage() {
      redirect("/JessaMaeCondrillon-Resume.pdf");
    }
    ```
- **Navigation & Buttons**:
  - Main floating navbar item:
    ```tsx
    <Link
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground ..."
    >
      Resume
    </Link>
    ```
  - Contact section CTA button:
    ```tsx
    <a
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#A68A64] text-white flex items-center gap-3 h-14 px-8 rounded-full ..."
    >
      <FileText className="w-5 h-5" />
      Resume
      <ArrowUpRight className="w-4 h-4 opacity-70" />
    </a>
    ```
  - Hero CTA: "View Resume" opens `/resume` or `/JessaMaeCondrillon-Resume.pdf` in `_blank`.
- **User Experience**: When clicked, the browser natively opens the document in Chrome/Edge/Firefox's built-in PDF reader with full print, zoom, download, and bookmarking capabilities.

---

### 2.2 Color System & Visual Hierarchy

#### Palette Variables (`globals.css`):
```css
:root {
  /* Premium Champagne Palette */
  --background: #F6F3ED;        /* Warm Ivory Neutral */
  --surface: #FBFAF7;           /* Paper White */
  --surface-elevated: #EEEAE2;  /* Muted Sand */
  --foreground: #111111;        /* Deep Editorial Black */
  --muted: #6F6A62;             /* Warm Muted Gray */
  --border: #DDD7CE;            /* Hairline Border */
  --accent: #A68A64;            /* Muted Warm Gold / Bronze */
  --ring: #A68A64;
}
```

#### Depth & Surface Utilities:
- **Glassmorphism Pill Navigation**:
  ```css
  .glass-panel {
    background-color: rgb(251 250 247 / 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgb(221 215 206 / 0.5);
  }
  ```
- **Editorial Shadow**:
  ```css
  .editorial-shadow {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  }
  ```

---

### 2.3 Hero Section Portrait Masking Pattern
In `EIsenPortfolio/src/components/sections/hero-section.tsx`:
- The portrait does not sit inside an artificial border, circle, or oval frame.
- Instead, it occupies the right `65%–75%` of the hero container with `grayscale` and gentle opacity (`0.35`).
- Four soft gradients bleed into the background from all edges to make the cutout seamless:
  1. **Top**: `bg-gradient-to-b from-background from-10% via-background/70 to-transparent` (dissolves hair/top)
  2. **Bottom**: `bg-gradient-to-t from-background from-10% via-background/70 to-transparent` (dissolves lower body)
  3. **Left**: `bg-gradient-to-r from-background via-background/60 to-transparent` (dissolves into text area)
  4. **Right**: `bg-gradient-to-l from-background via-background/60 to-transparent` (dissolves right edge)

---

### 2.4 Section Breakdown & Structural Pattern

1. **Floating Navigation (`components/layout/navigation.tsx`)**:
   - Floating pill with dynamic scroll detection (`scrollY > 20`).
   - Logo: Clean monospace/sans initials with accent dot: `JC.` or `JMC.`.
   - Centered desktop nav links with smooth scroll targets (`#about`, `#skills`, `#experience`, etc.).
   - Target `_blank` for `Resume`.
   - Clean mobile hamburger drawer with full-screen blur.

2. **Hero Section (`components/sections/hero-section.tsx`)**:
   - Monolithic uppercase title: `JESSA MAE CONDRILON` (or condensed title-case).
   - Minimal accent line: `h-[1px] w-16 bg-accent`.
   - Two-line high-impact subtitle emphasizing Financial Management & Administrative Operations.
   - Subtle action link: "View Experience &rarr;" or "View Projects &rarr;".

3. **About Section (`components/sections/about-section.tsx`)**:
   - Eyebrow: `Introduction`.
   - Main headline: `About Me`.
   - Left Column: Narrative summary focusing on grounded capabilities and career drive.
   - Right Column: 2x2 grid of 4 numbered cards (`1`, `2`, `3`, `4`) with square rounded index badges, bold focus titles, and italicized philosophy statements.
   - Footer: Full-width hairline divider with a centered closing statement.

4. **Capabilities / Expertise Section (`components/sections/skills-section.tsx`)**:
   - Eyebrow: `Capabilities`.
   - Main headline: `Expertise`.
   - Multi-column grid of categories (e.g., Financial Management, Office Administration, Record Handling, Digital Tools).
   - Categorized lists with accent hairline title bars and interactive hover rows featuring trailing accent dots (`w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent`).

5. **Experience Section (`components/sections/experience-section.tsx`)**:
   - Eyebrow: `Professional path`.
   - Main headline: `Experience`.
   - Central vertical timeline line (`w-0.5 bg-border/60`).
   - Left/right alternating cards for desktop with:
     - Period pill badge (`2021 — 2025`).
     - Role title & workplace (`Student Assistant — Cor Jesu College Assessment Office`).
     - Grounded scope summary.
     - Bullet points with accent dot markers.
     - Center timeline dot (`w-4 h-4 rounded-full bg-background border-4 border-accent`).

6. **Tools & Systems Section (`components/sections/tools-section.tsx`)**:
   - Eyebrow: `Tooling`.
   - Main headline: `Tools I work with`.
   - Vertical category indicator bars (`w-1.5 h-6 bg-accent rounded-full`).
   - Pill badges for software: Microsoft Excel, Google Sheets, Xero / QuickBooks (if confirmed), Google Workspace, etc.

7. **Dedicated Domain / Workflow Highlights Section**:
   - Parallel to Eisen's *AI Application Development* section, customized for Jessa Mae:
   - Spotlight on:
     - **Assessment & Records Flow**: Student record verification, assessment office transactions, and grade/clearance workflows.
     - **Financial & Cashiering Support**: Cash drawer balance, receipt logging, and daily reconciliations.
     - **Payroll & Timesheet Verification**: Verification of hours, attendance logs, and administrative tracking.
     - **Confidential Information Management**: Handling sensitive records with high data integrity.

8. **Contact / CTA Banner (`components/sections/contact-section.tsx`)**:
   - High-contrast obsidian block (`#111111`) creating visual punch.
   - Eyebrow in accent gold: `Get in touch`.
   - Headline: e.g. `Looking for a dependable financial and administrative professional? Let's connect.`
   - Large rounded pill action buttons:
     - **OnlineJobs.ph** (verified profile link)
     - **Resume** (accent gold pill with external arrow, opening PDF)
     - Any future user-approved links (LinkedIn, Email).
   - Clean copyright footer.

9. **Footer (`components/layout/footer.tsx`)**:
   - Logo `JC.`, brief role statement, navigation links, and live availability badge: `• Available for employment opportunities`.

---

## 3. Implementation Roadmap (Awaiting User Content & Sequence)

```
[Phase 1: Architecture & Guide] <--- CURRENT STEP (COMPLETED)
    ├── Analyze EisenPortfolio codebase & screenshots
    ├── Create docs/GUIDE.md
    └── Hold code changes until user confirms sequence & data

[Phase 2: Data Model & Profile Schema]
    ├── User supplies exact sequence, images, and content
    ├── Establish clean src/data/profile.ts (single source of truth)
    └── Strictly enforce zero-hallucination AGENTS.md rules

[Phase 3: Component Architecture Refactor]
    ├── Create modular component tree matching EisenPortfolio:
    │   ├── src/components/ui/ (Button, Badge, Card, SectionHeader)
    │   ├── src/components/layout/ (Navigation, Container, Footer)
    │   ├── src/components/sections/ (Hero, About, Skills, Experience, Workflow, Tools, Contact)
    │   └── src/components/motion/ (MotionWrapper)
    ├── Implement Tailwind v4 Champagne theme in globals.css
    └── Setup /resume redirect route to /JessaMaeCondrillon-Resume.pdf

[Phase 4: Assembly & Quality Verification]
    ├── Assemble in src/app/page.tsx
    ├── Verify responsive layouts (Mobile, Tablet, Desktop)
    ├── Validate PDF direct link in separate tab
    └── Run build & lint verification
```

---

## 4. Sequence & Information Checklist for the User

When ready, please provide:
1. **Hero Headline & Wording**: Preferred headline phrasing (e.g. `JESSA MAE CONDRILON` or specific sub-headline).
2. **Preferred Section Ordering / Sequence**:
   - Example order: `Hero -> About -> Capabilities/Skills -> Experience -> Workflows/Highlights -> Tools -> Contact`
3. **Hero Portrait Asset**: Specify which image file to use for the faded hero cutout (`/profile.jpg`, `/profile_new.jpg`, or other).
4. **4 About Highlights**: The four specific bullet takeaways for the `1`, `2`, `3`, `4` cards.
5. **Exact Roles & Dates**: Confirmation of dates, duties, and workplace details.
6. **External Links**: Confirm whether OnlineJobs.ph is the sole external link, or if LinkedIn/email should be included.
