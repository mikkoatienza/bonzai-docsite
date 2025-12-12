# Bonzai 2 Documentation Site

Modern documentation site for Bonzai 2 - a SharePoint Framework (SPFx) intranet solution.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Documentation:** Fumadocs
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Project Structure

```
docs-site/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Landing page
│   └── docs/                 # Documentation pages
│       ├── page.tsx          # Introduction
│       ├── getting-started/  # Getting started guides
│       ├── migration/        # Migration guides
│       ├── web-parts/        # Web part documentation
│       └── administration/   # Admin guides
├── components/               # React components
│   └── landing/              # Landing page components
├── lib/                      # Utilities and configuration
│   ├── source.ts             # Page tree navigation
│   └── metadata.ts           # Site metadata
├── public/                   # Static assets
└── styles/                   # Global styles
```

## Content

### Documentation Sections

1. **Getting Started**
   - Introduction
   - What is Bonzai 2?
   - Installation Guide

2. **Migration**
   - Classic vs Modern comparison

3. **Web Parts** (21+ documented)
   - Communication: Important Messages, News Rollup, Events Rollup
   - Documents: Document Portal
   - Content: Spotlight Rollup
   - Navigation: Advanced Links, Site Directory
   - People: Employee Directory
   - Search: Advanced Search
   - Utility: Theme Manager

4. **Administration**
   - Theming Guide

## Brand Identity

- **Primary Color:** `#0F766E` (Teal-700)
- **Secondary Color:** `#14B8A6` (Teal-500)
- **Fonts:** Plus Jakarta Sans (headings), Inter (body)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Manual

```bash
pnpm build
pnpm start
```

## Contributing

1. Create documentation pages in `app/docs/`
2. Update `lib/source.ts` for navigation
3. Follow existing page structure

## License

Proprietary - Bonzai Development Team

