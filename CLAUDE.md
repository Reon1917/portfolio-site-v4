# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains multiple iterations of a portfolio website for Lin Myat Phyo, a Full-Stack Web Developer. The repository has multiple versions (v4, v5, v6, v7) with v5 and v6 being the most feature-complete implementations.

## Development Commands

### Version 5 (reon-site-v5)
```bash
cd reon-site-v5
npm install
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Version 6 (reon-site-v6)
```bash
cd reon-site-v6
npm install
npm run dev --turbopack    # Start development server with Turbopack
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint
```

### Version 7 (reon-site-v7) - Current Working Directory
```bash
# Current directory is reon-site-v7, no need to cd
npm install
npm run dev                # Start development server with Turbopack (default)
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint
```

## Architecture

### Project Structure
The repository follows a multi-version approach with each version (v5, v6, v7) being a separate Next.js application:

- `reon-site-v5/` - Most feature-complete version with email functionality
- `reon-site-v6/` - Refactored version with centralized personal info
- `reon-site-v7/` - Latest version with modern UI components and theming

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui patterns using Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion (v5, v6)
- **Forms**: React Hook Form (v5, v6)
- **Email**: Resend API (v5)
- **Theme**: next-themes for dark/light mode (v5, v6, v7)
- **Development**: ESLint, Turbopack support
- **Utilities**: class-variance-authority, clsx, tailwind-merge

### Component Architecture
All versions follow a similar component-based structure:

#### Core Components:
- `Navigation/Navbar` - Navigation with theme toggle (all versions)
- `Hero` - Main landing section (all versions)
- `Skills` - Technical skills display (all versions)
- `Projects` - Project showcase (all versions)
- `Contact` - Contact form with email integration (v5, v6, v7)
- `About` - About section (v7)
- `Footer` - Site footer (v5, v6)
- `ThemeProvider` - Theme context provider (v7)

#### Data Management:
- **v5**: Uses `data/data.json` for centralized data
- **v6**: Uses `app/personal-info/myinfo.json` for personal information
- **v7**: Uses `data/myinfo.json` for personal information (similar to v6 structure)

### Email Integration (v5)
- Uses Resend API for contact form submissions
- Environment variables required: `RESEND_API_KEY`, `CONTACT_EMAIL`
- API endpoint: `/api/send-email`

### Personal Information Structure
Personal data is stored in JSON files containing:
- Personal info (name, location, education, role)
- Skills (frontend, backend, tools, methodologies)
- Projects with technologies and status
- Contact information
- Soft skills and professional qualities

## Environment Variables

### Required for v5 (Email functionality):
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## Development Notes

- The repository is currently on the `claude-code` branch
- Main branch for PRs is `main`
- Each version is self-contained with its own dependencies
- v5 has the most complete feature set including working contact form
- v6 focuses on UI improvements and centralized data management
- v7 features modern UI components, theming, and portfolio sections with enhanced styling

## Common File Patterns

- UI components use shadcn/ui patterns with custom styling
- Components follow CVA (Class Variance Authority) pattern for consistent styling variants
- Form validation uses react-hook-form with comprehensive error handling (v5, v6)
- Responsive design implemented with Tailwind CSS
- Dark/light theme support throughout (v5, v6, v7)
- API routes follow Next.js App Router conventions
- Data structure is centralized in JSON files for easy content management

## Version 7 Current State

Version 7 is the current working directory and contains:
- Next.js 15 setup with App Router and Turbopack
- Tailwind CSS v4 configuration with custom animations
- Complete portfolio component suite (Hero, About, Skills, Projects, Contact, Navigation)
- shadcn/ui components (button, card, badge) with CVA styling
- next-themes integration for dark/light mode switching
- Personal information data structure in `data/myinfo.json`
- Design system configuration in `design-system/design.json`
- Modern UI with glassmorphism effects and animations
- Responsive design implementation