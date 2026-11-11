# AI/ML Engineer & Frontend Developer — Personal Portfolio

A modern, responsive personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Designed with a dark-first navy and electric-cyan aesthetic, a functional dark/light theme toggle, centralized editable data modules, and production-ready Vercel configuration.

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4
- **Animations & Icons:** Framer Motion, Lucide React
- **Build Tooling:** Vite 6
- **Deployment Target:** Vercel (via GitHub repository integration)

---

## Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg          # Custom vector brand favicon
│   ├── og-image.svg         # Social sharing preview card
│   └── Auwal_Salele_Iro_CV.pdf  # Downloadable Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── projects/        # ProjectCard, ProjectModal, ProjectVisual
│   │   ├── skills/          # SkillCategoryCard
│   │   └── ui/              # Reusable Button, Badge, Card, Modal, SectionHeading, Toast
│   ├── config/
│   │   └── site.ts          # Environment-driven URLs and navigation items
│   ├── data/
│   │   ├── profile.ts       # Name, bio, availability status, photo, contact details
│   │   ├── skills.ts        # Editable skill categories
│   │   ├── projects.ts      # Centralized projects showcase data
│   │   ├── education.ts     # Academic details and coursework
│   │   └── interests.ts     # Professional interest areas
│   ├── hooks/               # useTheme, useActiveSection
│   ├── sections/            # Hero, About, Skills, Projects, Education, Interests, Contact, 404
│   ├── styles/              # Global CSS & Tailwind v4 configuration
│   ├── types/               # Strict TypeScript domain interfaces
│   ├── utils/               # Classname helper & contact form validation
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── vercel.json
└── vite.config.ts
```

---

## Local Development Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables (optional for initial preview)**

   Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

   Populate the variables you want active:

   | Variable | Purpose |
   | --- | --- |
   | `VITE_SITE_URL` | Canonical production URL (`https://myportfolio-nine-fawn-32.vercel.app/`) |
   | `VITE_CONTACT_EMAIL` | Public contact email displayed in the Contact section |
   | `VITE_GITHUB_URL` | Your GitHub profile URL |
   | `VITE_CV_URL` | Path or URL to your CV document (defaults to `/Auwal_Salele_Iro_CV.pdf`) |
   | `VITE_CONTACT_FORM_ENDPOINT` | Optional override endpoint for contact submissions (defaults to FormSubmit for your contact email) |
   | `VITE_WEB3FORMS_ACCESS_KEY` | Public Web3Forms access key (only required if using Web3Forms) |

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Type-check & build for production**

   ```bash
   npm run typecheck
   npm run build
   npm run preview
   ```

---

## Customizing Your Content

All personal information, placeholders, and portfolio entries live in `src/data/` and `index.html`:

1. **Identity, Bio & Portrait (`src/data/profile.ts` & `index.html`)**
   - Configured for **Auwal Salele Iro** with portrait image at `public/images/auwal-salele-iro.jpg`.
   - Optionally set `availabilityStatus` (kept `null` by default).

2. **Technical Skills (`src/data/skills.ts`)**
   - Edit each category (`Machine Learning`, `Deep Learning`, `Programming Languages`, `Frontend Development`, `Tools & Development Environment`) to reflect only technologies you can genuinely demonstrate.

3. **Featured Projects (`src/data/projects.ts`)**
   - Populate the placeholder fields for datasets, architectures, verified evaluation results, screenshots (`public/images/projects/...`), `githubUrl`, and `liveDemoUrl`.
   - Update `status` (e.g., `'Completed'`, `'In Development'`, `'Proposed / Concept'`) as milestones evolve.
   - Append new `ProjectItem` objects to add more projects without modifying UI components.

4. **Education (`src/data/education.ts`)**
   - Update degree, institution, academic interests, and coursework entries.

5. **Your CV (`public/Auwal_Salele_Iro_CV.pdf`)**
   - Replace `public/Auwal_Salele_Iro_CV.pdf` when updating your CV, or point `VITE_CV_URL` to an external hosted CV document.

---

## Contact Form Delivery

The contact form performs client-side validation and routes validated messages directly to `saleleiroauwal@gmail.com` via FormSubmit (`https://formsubmit.co/ajax/saleleiroauwal@gmail.com`) by default (first-time submissions trigger a one-time email verification link to your Gmail inbox).

To override the default endpoint with Formspree or Web3Forms instead:

- **Option A — Formspree:** Create a free form at Formspree and set `VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/<your_form_id>`.
- **Option B — Web3Forms:** Set `VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit` and `VITE_WEB3FORMS_ACCESS_KEY=<your_public_key>`.

One-click copy and `mailto:` email-app launch remain available if delivery fails or is blocked offline.

---

## Deploying to Vercel via GitHub

1. Push this repository to GitHub (`.env.local` is gitignored).
2. Import the repository in **Vercel**.
3. Vercel automatically detects `vercel.json` and Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add your `VITE_*` variables in **Vercel Project Settings -> Environment Variables**.
5. Deploy. Static assets under `/assets/` are served with long-term immutable caching headers, and unknown routes gracefully render the custom 404 page via SPA fallback.

