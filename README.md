# AIRIV Infotech LLC — Official Website

Corporate website for **AIRIV Infotech LLC**, built with Next.js 16 and React 19. Statically exported for deployment on any CDN or static host.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, delivering value, powering business, what's new |
| `/about` | Company overview, mission & vision, what drives us |
| `/services` | Service offerings with carousel and delivery model |
| `/industries` | Industries served with slider and transformation details |
| `/contact` | Contact form, info strip, hero |
| `/careers` | Open positions |

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.0 | Framework (static export) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Animations |
| [Lenis](https://lenis.darkroom.engineering/) | ^1.3 | Smooth scrolling |
| [Lucide React](https://lucide.dev/) | ^0.577 | Icons |

---

## Project Structure

```
airiv-nextjs/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── contact/page.tsx
│   ├── robots.ts           # SEO — robots.txt
│   ├── sitemap.ts          # SEO — sitemap.xml
│   ├── globals.css
│   └── layout.tsx          # Root layout (Header, Footer, fonts)
├── components/
│   ├── About/              # About page sections
│   ├── Contact/            # Contact page sections
│   ├── Home/               # Home page sections
│   ├── industries/         # Industries page sections
│   ├── service/            # Services page sections
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── GlobalBackground.tsx
│   └── HeroBackground.tsx
├── public/
│   └── assets/             # Images, SVGs, logos
├── next.config.ts          # Static export config
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/VishalSalemJayavel/AIRIV_Infotech_LLC.git
cd AIRIV_Infotech_LLC
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build and export static site to `/out` |
| `npm start` | Start Next.js production server |
| `npm run lint` | Run ESLint |

---

## Building for Production

This project uses Next.js **static export** (`output: "export"`). The build generates a fully static site in the `/out` directory — no Node.js server required at runtime.

```bash
npm run build
```

The `/out` folder can be deployed to:
- **Vercel** (zero config)
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**
- Any static file server / CDN

---

## Fonts

- **Plus Jakarta Sans** — headings and UI (weights: 400, 500, 600, 700)
- **Inter** — body text (weights: 300, 400, 500)

Both loaded via `next/font/google` for optimal performance.

---

## SEO

- `app/sitemap.ts` — auto-generates `sitemap.xml` at build time
- `app/robots.ts` — auto-generates `robots.txt` at build time
- Metadata configured per page using Next.js `Metadata` API
- Base URL: `https://airivinfotech.com`
