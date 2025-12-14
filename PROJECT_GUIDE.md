# Hexallo Project Guide

## Overview
Hexallo is a modern travel and event discovery web application built with React 19, Vite, and Tailwind CSS. It features a dynamic homepage with various sections showcasing events, destinations, and deals.

## How to Run

### Prerequisites
- Node.js (v20 or higher recommended)
- Yarn (or npm/pnpm/bun)

### Installation
1. Clone the repository (if applicable).
2. Navigate to the project directory:
   ```bash
   cd hexallo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the local development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Project Structure

The project follows a standard Vite + React structure.

```
hexallo/
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Generic UI elements (Buttons, etc.)
│   │   └── ...             # Feature components
│   ├── pages/              # Application pages
│   │   └── Home.tsx        # Homepage component
│   ├── lib/                # Utilities
│   │   └── utils.ts
│   ├── App.tsx             # Main App component (Routing)
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles and Tailwind directives
│   └── public/             # Static assets
├── index.html              # HTML entry point (Vite)
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
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
- **EventCard (`event-card.tsx`)**: A card component used to display event details.
- **CategoryCard (`category-card.tsx`)**: A card component for categories.
- **DestinationCard (`destination-card.tsx`)**: A card component for destinations.
- **Button (`ui/button.tsx`)**: Standard button component.

## Data Management
Data for events and categories is located in `src/data/` directory.
