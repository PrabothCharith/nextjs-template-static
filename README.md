# Next.js Static Template

A powerful, production-ready starter template for building static websites and web applications with Next.js 15, Tailwind CSS 4, and HeroUI.

This template is designed to give you a modern foundation with essential tools pre-configured, while remaining lightweight and easy to customize. It is perfect for landing pages, blogs, portfolios, and dashboards that don't require complex backend integration out of the box.

## Table of Contents

- [Features](#-features)
- [Project Structure & Examples](#-project-structure--examples)
- [Getting Started](#-getting-started)
- [Cleanup Guide](#-cleanup-guide)
- [Adding Components](#-adding-components)
- [Scripts](#-scripts)
- [License](#-license)

## Features

- **Next.js 15 (App Router)**: The latest features from Next.js for server-side rendering and static generation.
- **Tailwind CSS 4**: The newest version of the utility-first CSS framework.
- **HeroUI**: A beautiful, accessible component library based on React Aria.
- **Shadcn/ui Integration**: Includes setup for using Shadcn components (example Drawer included).
- **Dark Mode Support**: Built-in light/dark mode switching with `next-themes`.
- **Framer Motion**: For complex animations and gestures.
- **TypeScript**: Fully typed for better developer experience.
- **Turbopack**: Fast local development.

## Project Structure & Examples

The project is structured to help you get started quickly. Here are the key files and examples included:

### Core Files

- `src/app/page.tsx`: The main landing page. **[EXAMPLE]** functionality included:
  - Theme switching dropdown.
  - Counter state example.
  - Drawer component usage.
- `src/app/layout.tsx`: Root layout containing the `Providers` wrapper.
- `src/providers/initial.tsx`: Wraps your app with HeroUI, Theme, and other context providers.

### Component Examples

- `src/components/ui/drawer.tsx`: An example of a Shadcn/ui component manually added to the project. You can edit this file to customize the drawer or remove it if unused.

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd nextjs-template-static
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Cleanup Guide

This template comes with example code to show off the features (Theme toggle, Drawer, State). You probably want to start fresh for your own project.

### Automatic Cleanup (Recommended)

We've included a script to automatically reset the project to a clean "Hello World" state.

**Run the cleanup command:**

```bash
npm run cleanup
```

This will:

- Replace `src/app/page.tsx` with a minimal, clean starter page.
- Keep all configuration and UI libraries intact (HeroUI, Tailwind, etc.).
- **Note:** It does *not* delete `src/components/ui/drawer.tsx` in case you want to keep the Shadcn setup, but you can manually delete it if unneeded.

### Manual Cleanup

If you prefer to do it manually:

1. Open `src/app/page.tsx`.
2. Delete everything inside the `Home` component.
3. Remove unused imports (Drawer, Framer Motion examples, etc.).
4. Delete `src/components/ui/drawer.tsx` if you don't plan to use it.

## Adding Components

### HeroUI

Import components directly from `@heroui/react`:

```tsx
import { Button } from "@heroui/react";

<Button color="primary">Click Me</Button>
```

### Shadcn/ui

This template is configured for Shadcn. To add new components:

1. Go to [ui.shadcn.com](https://ui.shadcn.com/).
2. Copy the component code.
3. Create a new file in `src/components/ui/`.
4. Import it into your app.

## Scripts

| Script | Description |

|path|to|
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run cleanup` | **Reset project to clean slate** |

## License

This project is open source and available under the [MIT License](LICENSE).
