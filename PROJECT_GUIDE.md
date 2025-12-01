# Hexallo Project Guide

## Overview
Hexallo is a modern travel and event discovery web application built with Next.js 15, React 19, and Tailwind CSS. It features a dynamic homepage with various sections showcasing events, destinations, and deals.

## How to Run

### Prerequisites
- Node.js (v18 or higher recommended)
- Yarn (or npm/pnpm/bun)

### Installation
1. Clone the repository (if applicable).
2. Navigate to the project directory:
   ```bash
   cd hexallo
   ```
3. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Running the Development Server
Start the local development server:
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

The project follows the Next.js App Router structure.

```
hexallo/
├── app/                    # App Router pages and layouts
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── layout.tsx          # Root layout (HTML structure, fonts)
│   └── page.tsx            # Homepage entry point
├── components/             # Reusable UI components
│   ├── buzzing-destinations-section.tsx
│   ├── category-card.tsx
│   ├── deals-section.tsx
│   ├── destination-card.tsx
│   ├── event-card.tsx
│   ├── event-section.tsx
│   ├── exclusives-section.tsx
│   ├── explore-ghana-section.tsx
│   ├── featured-sections.tsx
│   ├── footer.tsx
│   ├── for-you-section.tsx
│   ├── global-highlights-section.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   └── hidden-gems-section.tsx
├── data/                   # Static data files (JSON)
│   ├── categories.json     # Data for Explore Ghana categories
│   └── events.json         # Data for featured events
├── public/                 # Static assets (images, icons)
├── package.json            # Project dependencies and scripts
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Component Overview

### Core Components
- **Header (`header.tsx`)**: The main navigation bar.
- **Footer (`footer.tsx`)**: The site footer.
- **Hero (`hero.tsx`)**: The main hero section with search functionality.

### Section Components
- **FeaturedSections (`featured-sections.tsx`)**: Displays lists of events like "Hot This Week", "Tonight's Spotlight", etc.
- **ExploreGhanaSection (`explore-ghana-section.tsx`)**: A grid of categories (Events, Activities, etc.) and top events in Ghana.
- **DealsSection (`deals-section.tsx`)**: A section showcasing special offers with a countdown timer and horizontal scrolling.
- **BuzzingDestinationsSection (`buzzing-destinations-section.tsx`)**: Highlights popular destinations.
- **GlobalHighlightsSection (`global-highlights-section.tsx`)**: Shows international destinations.
- **HiddenGemsSection (`hidden-gems-section.tsx`)**: Showcases unique, lesser-known spots.
- **ForYouSection (`for-you-section.tsx`)**: Personalized event recommendations.
- **ExclusivesSection (`exclusives-section.tsx`)**: Exclusive offers or content.

### Reusable UI Components
- **EventCard (`event-card.tsx`)**: A card component used to display event details (image, title, date, price). Supports conditional date display.
- **CategoryCard (`category-card.tsx`)**: A card component for categories in the Explore Ghana section.
- **EventSection (`event-section.tsx`)**: A wrapper component to display a titled section of `EventCard`s.
- **DestinationCard (`destination-card.tsx`)**: A card component for destinations.

## Data Management
Data for events and categories has been extracted into JSON files in the `data/` directory to keep components clean and maintainable.
- `data/events.json`: Contains arrays for `hotThisWeek`, `tonightsSpotlight`, `unmissable`, and `ghanasTop10s`.
- `data/categories.json`: Contains the category list for the Explore Ghana section.
