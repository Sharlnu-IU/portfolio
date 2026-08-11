# Sharath — Software Engineer Portfolio

![Portfolio Preview](./public/preview.png)

A responsive personal portfolio built with React, Vite, and TypeScript. It presents my work as a full-stack / software engineer — IQVIA experience, teaching roles at Indiana University, and selected projects — with a light editorial design, strong typography, and smooth scroll-driven motion.

## Features

- **Editorial light theme**: Off-white paper background, deep navy accents, Fraunces for headings and IBM Plex Sans for body text
- **Bi-directional scroll animations**: Sections fade and blur into view as you scroll up or down
- **Responsive layout**: Optimized for mobile, tablet, and desktop (including a mobile nav drawer)
- **Resume-aligned content**: Experience, projects with GitHub/live links, skills, and contact CTAs
- **Vite-powered**: Fast local HMR and optimized production builds

## Tech Stack

- **Framework**: React 19
- **Build tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS variables, Flexbox/Grid)
- **Icons**: `react-icons`
- **Lint**: oxlint

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sharlnu-IU/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173).

### Resume PDF

Place your resume at `public/Sharath_Resume_2P.pdf` so the Hero and Contact download buttons work locally and in production.

## Build for Production

```bash
npm run build
```

This type-checks with TypeScript and outputs a production bundle to `/dist`. Preview with:

```bash
npm run preview
```

## Deployment (GitHub Pages)

`vite.config.ts` uses `base: './'` for relative asset paths. A GitHub Actions workflow (`.github/workflows/static.yml`) builds and deploys to GitHub Pages on pushes to `main`.

You can also deploy manually:

1. Run `npm run build`
2. Publish the contents of `/dist` (or rely on the Actions workflow)

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
