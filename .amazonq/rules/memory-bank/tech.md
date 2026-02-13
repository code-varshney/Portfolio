# Technology Stack

## Core Technologies

### Frontend Framework
- **React 19.2.0**: Latest React version with modern hooks and concurrent features
- **React DOM 19.2.0**: DOM rendering library for React components

### Build System
- **Vite 7.2.4**: Next-generation frontend build tool with fast HMR
- **@vitejs/plugin-react 5.1.1**: Official Vite plugin for React support

### Development Tools
- **ESLint 9.39.1**: JavaScript/JSX linting and code quality enforcement
- **@eslint/js 9.39.1**: ESLint JavaScript configuration
- **eslint-plugin-react-hooks 7.0.1**: React Hooks specific linting rules
- **eslint-plugin-react-refresh 0.4.24**: React Fast Refresh linting support

### Type Support
- **@types/react 19.2.5**: TypeScript definitions for React
- **@types/react-dom 19.2.3**: TypeScript definitions for React DOM

### Runtime Environment
- **Node.js**: ES6 modules support (`"type": "module"` in package.json)
- **Modern JavaScript**: ES2020+ features and syntax

## Development Commands

### Local Development
```bash
npm run dev
```
Starts Vite development server with hot module replacement

### Production Build
```bash
npm run build
```
Creates optimized production bundle in `dist/` directory

### Code Quality
```bash
npm run lint
```
Runs ESLint to check code quality and enforce standards

### Preview Build
```bash
npm run preview
```
Serves production build locally for testing

## Configuration Files

### Vite Configuration
- **vite.config.js**: Minimal setup with React plugin
- Supports modern ES modules and fast refresh

### ESLint Configuration
- **eslint.config.js**: Modern flat config format
- React-specific rules and best practices
- Hooks and refresh plugin integration

### Package Management
- **package-lock.json**: Dependency version locking
- **Private package**: Not intended for npm publication