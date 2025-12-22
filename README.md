# @victorts1991/ui-core-design-system

A high-performance, accessible, and scalable UI Design System built for modern web applications. This project follows industry-leading architectural patterns for component libraries, ensuring a robust foundation for React-based ecosystems.

## 🚀 **Tech Stack**

* **React 19**: Leveraging the newest concurrent rendering features and hooks.
* **Tailwind CSS 4**: Utilizing the latest CSS-engine for optimized, utility-first styling.
* **TypeScript 5**: Strict type-safety across all components and utility functions.
* **tsup**: Advanced bundler powered by **esbuild** for dual-format (ESM/CJS) distribution.
* **Storybook 8**: Comprehensive documentation and isolated development environment.
* **Vitest & React Testing Library**: Modern testing suite for reliable unit and interaction testing.

## 🛠 **Project Architecture**

The project follows a modular structure designed for maintainability and clear separation of concerns:

```text
src/
├── components/     # Atomic UI components with logic and variants
├── styles/         # Global styles and Tailwind v4 theme definitions
├── test/           # Test setup and global configuration
└── index.ts        # Library public API (Entry point)
```

## 🧪 **Quality Assurance (QA)**

As an **Architect-led project**, code reliability is a priority. Every component is tested for interaction logic and visual states.

### **Automated Testing**
To run the unit test suite:
```bash
npm test
```

### **Documentation & Visual Testing**
To explore the component library in isolation via **Storybook**:
```bash
npm run storybook
```

## 🏗 **Development Workflow**

1. **Building for Production**: Generates an optimized bundle in the **dist/** directory, including type definitions.
   ```bash
   npm run build
   ```
2. **Linting**: Static analysis to ensure code consistency.
   ```bash
   npm run lint
   ```

## 📖 **Component Principles**

* **Accessibility First**: Every component is designed with **ARIA compliance** and keyboard navigation in mind.
* **Performance**: Zero-runtime overhead by leveraging **Tailwind CSS 4** and optimized build steps.
* **Extensibility**: Components use the **composition pattern**, allowing consumers to extend functionality via props and className merging.


--------
TODO: 

- CI/CD publish in npm and update storybook in vercel;
- Update Readme.md;
- Add: Input, Card, Typography and Badge