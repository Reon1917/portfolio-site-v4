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

### Version 7 (reon-site-v7)
```bash
cd reon-site-v7
npm install
npm run dev --turbopack    # Start development server with Turbopack
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint
```

## Architecture

### Project Structure
The repository follows a multi-version approach with each version (v5, v6, v7) being a separate Next.js application:

- `reon-site-v5/` - Most feature-complete version with email functionality
- `reon-site-v6/` - Refactored version with centralized personal info
- `reon-site-v7/` - Latest version (currently basic Next.js setup)

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Animations**: Framer Motion (v5)
- **Forms**: React Hook Form (v5)
- **Email**: Resend API (v5)
- **Theme**: next-themes for dark/light mode
- **Development**: ESLint, Turbopack support

### Component Architecture
All versions follow a similar component-based structure:

#### Core Components (v5, v6):
- `Navbar` - Navigation with theme toggle
- `Hero` - Main landing section
- `Skills` - Technical skills display
- `Projects` - Project showcase
- `Contact` - Contact form with email integration
- `Footer` - Site footer

#### Data Management:
- **v5**: Uses `data/data.json` for centralized data
- **v6**: Uses `app/personal-info/myinfo.json` for personal information
- **v7**: Data structure not yet implemented

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
- v7 is currently a fresh Next.js installation

## Common File Patterns

- UI components use shadcn/ui patterns with custom styling
- Form validation uses react-hook-form with comprehensive error handling
- Responsive design implemented with Tailwind CSS
- Dark/light theme support throughout
- API routes follow Next.js App Router conventions