# Development Guidelines

## Code Quality Standards

### Function Component Pattern (5/5 files)
- Use function declarations over arrow functions for components
- Pattern: `function ComponentName() { return (...); }`
- Always export default at the end of the file
- Example:
```jsx
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* component content */}
    </div>
  );
}

export default ProjectCard;
```

### Import Organization (5/5 files)
- React imports first, then external libraries, then local components
- Use relative imports for local components (`./ComponentName`)
- CSS imports after React but before App component
- Example:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
```

### JSX Structure Standards (4/5 files)
- Use semantic HTML elements (`<section>`, `<nav>`, `<div>`)
- Consistent className naming with kebab-case
- Container pattern: `<div className="container">` for layout
- Section pattern: `<section id="sectionName" className="sectionName">`

## Structural Conventions

### Component Props Pattern (3/5 files)
- Use destructured props in function parameters
- Pass objects as props for complex data structures
- Example: `function ProjectCard({ project })` instead of `function ProjectCard(props)`

### Data Management (2/5 files)
- Define data arrays as constants within components
- Use array.map() for rendering lists with proper key props
- Key prop pattern: `key={index}` for static lists
- Example:
```jsx
const projects = [
  { title: "Project 1", description: "..." },
  // more items
];

{projects.map((project, index) => (
  <ProjectCard key={index} project={project} />
))}
```

### CSS Class Naming (4/5 files)
- Use BEM-like naming: `project-card`, `tech-stack`, `project-links`
- Consistent patterns: `section-title`, `tech-tag`, `project-link`
- Grid layouts: `projects-grid` for container elements

## Semantic Patterns

### External Link Security (2/5 files)
- Always use `target="_blank"` with `rel="noopener noreferrer"` for external links
- Pattern for external links:
```jsx
<a href={url} target="_blank" rel="noopener noreferrer">
  Link Text
</a>
```

### React Best Practices (3/5 files)
- Wrap root app in `<StrictMode>` for development checks
- Use React 18+ createRoot API instead of legacy ReactDOM.render
- Fragment usage: `<>` shorthand for React.Fragment

### ESLint Configuration Standards (1/5 files)
- Use flat config format with defineConfig
- Include React Hooks and React Refresh plugins
- Custom rules: ignore unused vars with uppercase pattern
- Target ES2020+ with JSX support
- Global ignores for build directories

## Internal API Usage Patterns

### Component Communication (3/5 files)
- Props drilling for simple data passing
- Object props for complex component data
- No state management library - using local component state

### Styling Architecture (2/5 files)
- Separate CSS files: `index.css` for globals, `main.css` for components
- CSS-in-JS not used - traditional CSS classes
- No CSS modules or styled-components

### Build Configuration (2/5 files)
- Minimal Vite config with React plugin only
- ES modules throughout (`"type": "module"`)
- No additional build optimizations or custom configurations

## Frequently Used Code Idioms

### Array Rendering Pattern (2/5 files)
```jsx
{array.map((item, index) => (
  <Component key={index} data={item} />
))}
```

### Conditional Rendering (Not observed in sample)
- No conditional rendering patterns found in analyzed files
- Suggests static content approach for portfolio sections

### Event Handling (Not observed in sample)
- No event handlers found in analyzed files
- Navigation uses anchor links instead of JavaScript routing