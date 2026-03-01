# Poruta

**Intelligent Trade & Procurement Control Tower**

Poruta is an AI-powered procurement automation platform designed for African cross-border trade. It connects importers, customs agents, and government institutions through intelligent document processing, real-time compliance tracking, and multi-party data sharing.

## Overview

- **AI Document Classification** — Automated HS code classification, tariff lookup, and customs documentation.
- **Human-in-the-Loop** — AI-assisted workflows with human oversight for accuracy and compliance.
- **Real-Time Dashboards** — Live tracking of shipments, clearance status, and demurrage risk.
- **AfCFTA Ready** — Built to support the African Continental Free Trade Area.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

Prerequisites: [Node.js](https://nodejs.org/) v18+ and npm.

```bash
# Clone the repository
git clone <repo-url>
cd poruta

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/          # Next.js App Router pages & layouts
├── components/   # UI and feature components
│   └── ui/       # shadcn/ui primitives
├── hooks/        # Custom React hooks
├── integrations/ # Third-party service clients
└── lib/          # Shared utilities
public/           # Static assets
```

## License

Proprietary. All rights reserved.
