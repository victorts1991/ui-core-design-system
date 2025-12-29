# Contributing to @vtspecian/ui-core-design-system

First of all, thank you for considering contributing to this project! This is a learning-driven UI library focused on modern React practices.

## 🛠 Tech Stack
* **React 19**
* **Tailwind CSS 4**
* **TypeScript 5**
* **Vitest** for unit testing

## 🚀 How to Contribute

1. **Pick an Issue**: Check our open issues and let me know if you want to tackle one.
2. **Branching**: Create a new branch from `main` using a descriptive name:
   `feat/your-feature-name` or `fix/your-fix-name`.
3. **Coding Standards**:
   * Follow the existing component patterns.
   * Ensure your code is strictly typed with TypeScript.
   * Write unit tests using Vitest for every new component.
4. **Commit Messages**: Use clear, descriptive commit messages (e.g., `feat: add badge component with variants`).

## 📥 Pull Request Process

As per our repository security rules:
* All changes must be submitted via **Pull Request**.
* Direct pushes to the `main` branch are blocked by **Repository Rulesets**.
* Every PR requires at least **one approval** from the maintainer (@victorts1991) before merging.
* The CI/CD pipeline will automatically run build and test checks on your PR.

## 📦 Publishing Process (CI/CD)
This project uses **GitHub Actions Environments** to ensure secure and controlled releases:
* **Manual Gatekeeping**: After a PR is merged, the deployment to NPM (Production) is not automatic.
* **Approval Required**: A manual review and approval by the maintainer are mandatory to trigger the final publish step.
* This setup prevents accidental releases and ensures that only production-ready code is published.

## 🧪 Quality Assurance

Before submitting your PR, please run:
```bash
npm test
npm run build
```

---
Let's build something great together!
