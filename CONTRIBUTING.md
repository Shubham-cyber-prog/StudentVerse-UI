# 🤝 Contributing to StudentVerse UI

First off, thank you for considering contributing to StudentVerse UI! 🎉

This document provides guidelines and steps for contributing. Following these guidelines helps communicate that you respect the time of the developers managing this project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Submitting a Component](#submitting-a-component)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

---

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Inclusive**: Welcome newcomers and help them learn
- **Be Collaborative**: Work together and share knowledge
- **Be Patient**: Remember that everyone is learning

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Git
- A GitHub account

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/studentverse-ui.git
   cd studentverse-ui
   ```

3. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/studentverse-ui/studentverse-ui.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the dev server**
   ```bash
   npm run dev
   ```

---

## 💡 How Can I Contribute?

### 🎨 Adding UI Components

The most common contribution! Add new buttons, cards, loaders, forms, etc.

**Great components are:**
- ✅ Original or properly attributed
- ✅ Clean and well-formatted code
- ✅ Responsive and accessible
- ✅ Well-documented

### 🛠️ Building Student Tools

Create useful utilities like:
- Study planners
- Grade calculators
- Productivity tools
- Academic helpers

### 🐛 Fixing Bugs

Found a bug? Here's how to report it:

1. Check if the bug is already reported in [Issues](https://github.com/studentverse-ui/issues)
2. If not, create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### 📝 Improving Documentation

- Fix typos
- Add examples
- Clarify instructions
- Translate documentation

### ✨ Suggesting Features

Open an issue with the `enhancement` label describing:
- The feature you'd like
- Why it would be useful
- How it might work

---

## 🎨 Submitting a Component

### Component Structure

Each component should include:

```typescript
// Example component structure
const MyComponent = {
  name: "Gradient Button",        // Descriptive name
  description: "A button with...", // What it does
  category: "Buttons",            // Category
  techStack: "Tailwind CSS",      // Technology used
  difficulty: "Beginner",         // Skill level
  code: `...`,                    // The actual code
  author: "Your Name",            // Your name
  github: "yourusername",         // GitHub username
};
```

### Component Guidelines

1. **Code Quality**
   - Use consistent formatting
   - Remove unnecessary comments
   - Optimize for readability

2. **Styling**
   - Use Tailwind CSS utilities when possible
   - Ensure dark mode compatibility
   - Make it responsive

3. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation works
   - Use semantic HTML

4. **Performance**
   - Avoid unnecessary animations
   - Optimize images
   - Keep bundle size small

---

## 📤 Pull Request Process

### Before Submitting

1. **Sync your fork**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, documented code
   - Test your changes locally
   - Ensure no linting errors

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

### Commit Message Format

Use these prefixes:
- `Add:` - New feature or component
- `Fix:` - Bug fix
- `Update:` - Updating existing feature
- `Docs:` - Documentation changes
- `Style:` - Code style changes
- `Refactor:` - Code refactoring

### Submitting the PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template**
   - Describe your changes
   - Link related issues
   - Add screenshots if applicable

4. **Wait for review**
   - Respond to feedback
   - Make requested changes
   - Be patient!

---

## 🎨 Style Guidelines

### TypeScript/React

```typescript
// ✅ Good
const ComponentName = ({ prop1, prop2 }: Props) => {
  return <div className="...">{content}</div>;
};

// ❌ Avoid
function componentName(props) {
  return <div style={{...}}>{props.content}</div>;
}
```

### Tailwind CSS

```html
<!-- ✅ Good - Use design system tokens -->
<button className="bg-primary text-primary-foreground hover:bg-primary/90">

<!-- ❌ Avoid - Hardcoded colors -->
<button className="bg-blue-500 text-white hover:bg-blue-600">
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `GradientButton.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Pages: `PascalCase.tsx` (e.g., `Components.tsx`)

---

## 🏷️ Labels

| Label | Description |
|-------|-------------|
| `good first issue` | Perfect for newcomers |
| `help wanted` | Extra attention needed |
| `bug` | Something isn't working |
| `enhancement` | New feature request |
| `documentation` | Documentation improvements |
| `hacktoberfest` | Hacktoberfest eligible |
| `gssoc` | GSSoC eligible |

---

## 🎖️ Recognition

Contributors are recognized through:

- 🏆 Leaderboard ranking
- 🎖️ Contributor badges
- 📜 README acknowledgment
- ⭐ Featured contributor spotlight

---

## 💬 Community

- **Discord**: [Join our server](https://discord.gg/studentverse)
- **Twitter**: [@studentverse](https://twitter.com/studentverse)
- **Discussions**: [GitHub Discussions](https://github.com/studentverse-ui/discussions)

---

## ❓ Questions?

Don't hesitate to ask! Open an issue or reach out on Discord.

**Happy Contributing! 🚀**
