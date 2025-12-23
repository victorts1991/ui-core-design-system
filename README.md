# @vtspecian/ui-core-design-system

A high-performance, accessible, and scalable UI Design System built for modern web applications.

[![NPM Version](https://img.shields.io/npm/v/@vtspecian/ui-core-design-system)](https://www.npmjs.com/package/@vtspecian/ui-core-design-system)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white)](https://ui-core-design-system.vercel.app/)

## 🔗 Quick Links
* **NPM Registry**: [@vtspecian/ui-core-design-system](https://www.npmjs.com/package/@vtspecian/ui-core-design-system)
* **Live Documentation**: [Storybook on Vercel](https://ui-core-design-system.vercel.app/)

## ✨ Core Feature: Zero-Config
This library is designed for a **plug-and-play experience**. Leveraging custom build pipelines, **you do not need to import CSS files** in your project's root. Styles are automatically injected into the DOM upon component usage.

## 🚀 **Installation**

```bash
npm install @vtspecian/ui-core-design-system
```

## 💻 **Usage**

```tsx
import { Button } from '@vtspecian/ui-core-design-system';

export const App = () => (
  <Button variant="primary" size="md">
    Interactive Button
  </Button>
);
```

## 🛠 **Tech Stack**

* **React 19**: Leveraging the newest concurrent rendering features and hooks.
* **Tailwind CSS 4**: Utilizing the latest CSS-engine for optimized, utility-first styling.
* **TypeScript 5**: Strict type-safety across all components and utility functions.
* **tsup**: Advanced bundler powered by **esbuild** for dual-format (ESM/CJS) distribution.
* **Storybook 8**: Comprehensive documentation and isolated development environment.
* **Vitest & React Testing Library**: Modern testing suite for reliable unit and interaction testing.

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

