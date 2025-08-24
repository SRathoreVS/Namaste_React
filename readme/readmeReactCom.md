# React Components

---

## Table of Contents

- [Types of Components](#types-of-components)
- [One-Liner Functional Component](#one-liner-functional-component)
- [Nesting Components (Composition)](#nesting-components-composition)
- [JavaScript Expressions in JSX](#javascript-expressions-in-jsx)
- [How Components Work](#how-components-work)
- [Summary](#summary)

---

## Types of Components

### 1. Class-Based Component (Legacy)

- The old way of writing React components.
- Uses ES6 classes and lifecycle methods.
- **Not recommended for new projects.**

### 2. Functional Component (Modern)

- The recommended way to write React components.
- Just a JavaScript function that returns JSX.

**Example:**

```javascript
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component 🚀</h1>;
};
```

- JSX is a React element.
- A functional component is a JS function that returns JSX (or multiple JSX elements).

---

## One-Liner Functional Component

You can write concise components in one line:

```javascript
const Fn = () => (
  <h2 className="header">This is a 1-liner function component</h2>
);
```

---

## Nesting Components (Composition)

You can nest components inside other components:

```javascript
const TitleComponent = () => (
  <div id="title-container">
    <h1 className="header">Namaste React Functional Title Component 🚀</h1>
  </div>
);

// Component composition: using TitleComponent inside HeadingComponent
const HeadingComponent = () => (
  <div id="container">
    <h1 className="header">Namaste React Functional Component 🚀</h1>
    <TitleComponent />
  </div>
);
```

---

## JavaScript Expressions in JSX

- You can use any JavaScript expression inside JSX using `{}`.

**Example:**

```javascript
const name = "Namaste React";
const HeadingComponent = () => (
  <div>
    <h1>{name}</h1> {/* JS expression inside JSX */}
    <h2>{2 + 2}</h2> {/* Arithmetic expression */}
  </div>
);
```

- You can also call functions or components inside `{}`:
  ```javascript
  {
    TitleComponent();
  }
  ```

---

## How Components Work

- The browser does **not** care about React components.
- Babel transpiles JSX and React components into plain HTML elements.
- Only functions starting with a **capital letter** are treated as React components.

---

## Summary

- Use functional components for new React code.
- Components can be nested and written in one line.
- JSX is transpiled to HTML before rendering in the browser.
- Use `{}` to embed JavaScript expressions in JSX.
