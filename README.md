# My Next.js App

A modern Next.js 14 application with TypeScript, Tailwind CSS, and App Router.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/          # API routes
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── loading.tsx   # Loading UI
│   ├── error.tsx     # Error UI
│   └── not-found.tsx # 404 page
├── components/
│   └── ui/           # Reusable UI components
├── lib/
│   └── utils.ts      # Utility functions
├── public/           # Static assets
├── middleware.ts     # Next.js middleware
└── .env.local        # Environment variables
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
