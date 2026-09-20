# HeatScape — Urban Heat Reduction Planner

HeatScape is a real geospatial environmental intelligence application for understanding urban heat conditions, detecting localized hotspots, and generating budget-aware, AI-driven heat reduction plans. It combines interactive mapping, live environmental telemetry, geospatial calculations, hotspot analysis, and intervention planning in a workflow designed for municipal planners, researchers, and project teams.

## Key Features

- **Interactive polygon area selection:** Draw a study boundary directly on the map and calculate its real-world area in hectares, acres, and square meters.
- **Satellite and environmental analysis:** Use thermal and environmental signals to model land-surface temperature, apparent heat, humidity-adjusted urban heat, and related urban conditions.
- **Hotspot detection:** Review categorized heat zones such as extreme heat, moderate heat, low vegetation, and high built-up areas.
- **Spatial intervention planning:** Compare cooling measures including urban forestry, cool roofs, green roofs, shade structures, water features, and bioswales.
- **Budget-aware optimization:** Adjust a planning budget and intervention selections to support practical municipal cooling strategies.
- **Ground-truth verification:** Upload a street-level image for a frontend-assisted verification workflow alongside satellite-derived insights.
- **Executive export:** Generate a branded PDF strategy summary containing study metrics, insights, selected interventions, budget information, and a map snapshot.
- **Responsive planner interface:** Explore the Planner, Hotspots, and Interventions workspaces across desktop and mobile-sized screens.

## Technology Stack

- **Vite** — development server and production build tooling
- **React** — component-based user interface
- **TypeScript** — typed application development
- **Leaflet and React Leaflet** — interactive maps and geospatial visualization
- **Turf.js** — geospatial calculations, including polygon area measurement
- **Tailwind CSS and shadcn/ui** — interface styling and reusable UI primitives
- **Framer Motion** — interface transitions and progressive loading states
- **Open-Meteo** — live weather and environmental telemetry
- **jsPDF and html2canvas** — executive strategy PDF generation

## Project Structure

```text
client/
  src/
    components/       Reusable UI and map components
    contexts/         Shared application state and providers
    pages/            Planner, Hotspots, and Interventions views
    App.tsx           Application routes and providers
    index.css         Global styles and design tokens
server/
  index.ts            Production static server
shared/
  const.ts            Shared constants
```

## Prerequisites

- Node.js 18 or newer
- pnpm 9 or newer
- Git

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mohitsaitummalapalli-tech/-HeatSpace.git
cd -HeatSpace
pnpm install
```

## Local Development

Start the Vite development server:

```bash
pnpm dev
```

The application will be available at the local URL shown by Vite, normally `http://localhost:5173`.

## Production Build

Create and validate a production build:

```bash
pnpm run build
pnpm run check
```

Run the compiled application:

```bash
pnpm start
```

## Core Workflow

1. Open the **Planner** workspace and choose a city or search for a location.
2. Navigate to **Hotspots** and activate the area-drawing workflow.
3. Place at least three vertices to create a polygon study boundary.
4. Review the calculated geospatial area and run hotspot analysis.
5. Inspect live telemetry, hotspot categories, and AI-assisted insights.
6. Adjust the planning budget and select suitable cooling interventions.
7. Use the **Interventions** catalog to add specific measures to the custom plan.
8. Review the optimized strategy and export an executive PDF when needed.

## Data and Usage Notes

HeatScape is an environmental planning and decision-support interface. Its modeled temperatures, hotspot classifications, and projected intervention effects should be treated as planning estimates rather than certified engineering, medical, or regulatory measurements. Validate decisions with current local surveys, authoritative datasets, engineering review, and applicable municipal standards before implementation.

Live environmental data depends on the availability of the configured public data services. If a service is unavailable, the interface displays the latest available state or an appropriate unavailable-data message.

## Accessibility and UX

The interface uses semantic controls, visible states, readable labels, responsive layouts, keyboard-accessible actions, and high-contrast visual treatments for core planning workflows. Map instructions and action controls are designed to remain legible over the application’s light interface.

## License

HeatScape is released under the MIT License. See [`LICENSE`](./LICENSE) for the full license text.

## User Guide

For a concise end-user workflow, see [`USER_GUIDE.md`](./USER_GUIDE.md).

## Project Status

HeatScape is an actively developed planning prototype. Features and data integrations may evolve as the project moves toward broader validation and deployment.

## Contributing

Contributions should focus on reliable geospatial behavior, accessible interaction design, transparent data assumptions, and maintainable TypeScript patterns. Before opening a pull request, run the production build and TypeScript check locally.

```bash
pnpm run build
pnpm run check
```

When reporting an issue, include the affected workspace, reproducible steps, browser information, and any relevant console or data-service error details.

## Contact and Repository

Repository: <https://github.com/mohitsaitummalapalli-tech/-HeatSpace>

Please use the repository’s issue tracker for project-specific bug reports, feature requests, and technical discussion.

## License

Copyright (c) 2026 HeatScape contributors

This project is licensed under the MIT License.

See [`LICENSE`](./LICENSE) for details.
