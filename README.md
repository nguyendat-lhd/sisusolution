# Sisu Solution Outsourcing Website

## Overview
A modern, responsive website built with Next.js and TypeScript for Sisu Solution's outsourcing services. The site features dynamic content loading, smooth animations, and optimized performance.

## Tech Stack
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component, Unsplash API
- **State Management**: React Context
- **Data Fetching**: Server Actions

## Project Structure
```
/app - Next.js app router pages and layouts
/components - Reusable UI components
  /motion - Animation components
  /ui - Shadcn UI components
/context - React context providers
/hooks - Custom React hooks
/lib - Utility functions and API handlers
/public - Static assets
/styles - Global styles
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up environment variables:
   ```env
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   ```

### Development
Run the development server:
```bash
yarn dev
```

### Building for Production
```bash
yarn build
yarn start
```

## Key Features

### Component System
- **Motion Components**: Reusable animation components in `/components/motion`
- **UI Components**: Customizable Shadcn UI components in `/components/ui`
- **Layout Components**: Page sections and layouts in `/components`

### Image Assets

This project uses optimized images for better performance and visual appeal. All images are stored in the `/public/images/` directory, organized by section:

#### Directory Structure
- `/public/images/hero/` - Hero section images
- `/public/images/services/` - Service icons and related images
- `/public/images/projects/` - Project showcase images
- `/public/images/team/` - Team member profile photos
- `/public/images/testimonials/` - Client testimonial avatars
- `/public/images/blog/` - Blog post cover images
- `/public/images/contact/` - Contact page images
- `/public/images/why-choose-us/` - Images for the "Why Choose Us" section

#### Image Optimization
All images have been optimized for web use:

1. **Format Selection**:
   - JPEG (.jpg) for photographs and complex images
   - PNG (.png) for graphics with transparency
   - WebP for modern browsers (with fallbacks)

2. **Size Optimization**:
   - Hero images: 1920×1080px (16:9 ratio)
   - Project thumbnails: 600×400px
   - Team member photos: 400×600px
   - Blog covers: 1200×630px
   - Service icons: 48×48px
   - Testimonial avatars: 100×100px

### Dynamic Content
- Server-side data fetching with caching
- Unsplash API integration for dynamic images
- Responsive image loading with Next.js Image component

### Performance Optimization
- Image optimization and lazy loading
- Component-level code splitting
- Server-side rendering and caching
- Optimized fonts and assets loading

### Development Guidelines

1. **Component Creation**
   - Place new components in appropriate directories
   - Follow existing naming conventions
   - Include TypeScript types and props interface

2. **Styling**
   - Use Tailwind CSS classes
   - Follow the existing color scheme and design system
   - Maintain responsive design patterns

3. **State Management**
   - Use React Context for global state
   - Implement custom hooks for reusable logic
   - Follow the existing patterns in `/context` and `/hooks`

4. **Performance**
   - Optimize images before adding to the project
   - Use appropriate loading strategies
   - Implement proper caching mechanisms

## Contributing
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License
Private - All rights reserved

