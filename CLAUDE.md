# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 15 application for the Network AI app with the following key components:

**Authentication & Authorization:**
- Uses Clerk for authentication with `@clerk/nextjs`
- Clerk middleware configured in `middleware.ts` with comprehensive route matching
- ClerkProvider wraps the entire app in `app/layout.tsx`

**UI Framework:**
- Built with React 19 and Next.js App Router
- Tailwind CSS 4 for styling with PostCSS configuration
- Shadcn/ui components configured with "new-york" style in `components.json`
- Custom UI components in `components/ui/` directory
- Lucide React for icons

**Project Structure:**
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components 
- `/components/ui` - Shadcn/ui component library
- `/lib` - Utility functions and shared logic
- `/reactbits` - Custom animation and component libraries organized by type:
  - `Animations/` - Animation components
  - `Backgrounds/` - Background components  
  - `Components/` - General UI components
  - `TextAnimations/` - Text animation components
- `/public` - Static assets

**Key Configuration:**
- TypeScript configured with strict mode and Next.js plugin
- Path aliases: `@/*` maps to project root
- Shadcn/ui aliases for components, utils, ui, lib, and hooks
- ESLint with Next.js configuration

**Dependencies:**
- Core: Next.js, React, TypeScript
- Auth: Clerk
- Styling: Tailwind CSS, class-variance-authority, clsx, tailwind-merge
- UI: Lucide React icons
- Fonts: Geist and Geist Mono from Google Fonts