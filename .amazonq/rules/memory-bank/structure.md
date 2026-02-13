# Project Structure

## Directory Organization

### Root Level
- **package.json**: Project dependencies and scripts configuration
- **vite.config.js**: Vite build tool configuration with React plugin
- **eslint.config.js**: Code quality and linting rules
- **index.html**: Main HTML entry point for the application
- **.gitignore**: Version control exclusion patterns

### Source Directory (`src/`)
- **main.jsx**: Application entry point and React DOM rendering
- **App.jsx**: Root component orchestrating the entire application
- **index.css**: Global styles and CSS reset
- **main.css**: Primary stylesheet for component styling

### Components Directory (`src/components/`)
- **Navbar.jsx**: Navigation header with section links
- **Hero.jsx**: Landing section with introduction and call-to-action
- **Projects.jsx**: Portfolio projects showcase container
- **ProjectCard.jsx**: Individual project display component
- **Skills.jsx**: Technical skills and competencies section
- **Experience.jsx**: Professional background and timeline
- **Contact.jsx**: Contact information and communication channels

### Assets Directory (`src/assets/`)
- **react.svg**: React framework logo
- Static resources and images for the portfolio

### Public Directory (`public/`)
- **vite.svg**: Vite build tool logo
- Static assets served directly by the web server

## Architectural Patterns

### Component-Based Architecture
- Modular React components for each portfolio section
- Single responsibility principle with focused component functionality
- Reusable ProjectCard component for consistent project display

### Single Page Application (SPA)
- Client-side navigation using anchor links
- Smooth scrolling between sections without page reloads
- Centralized state management through App.jsx

### Modern Build Pipeline
- Vite for fast development and optimized production builds
- ES6 modules with tree-shaking for minimal bundle size
- Hot module replacement for efficient development workflow