# Namaste React – Project Overview

---

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [NPM & Package Management](#npm--package-management)
- [Bundlers](#bundlers)
- [Parcel Features](#parcel-features)
- [Dependencies](#dependencies)
- [Gitignore](#gitignore)
- [React Setup](#react-setup)
- [React Core Concepts](#react-core-concepts)
- [Nested & Sibling Elements](#nested--sibling-elements)
- [BrowserList](#browserlist)

---

## Introduction

This project demonstrates a modern React setup using Parcel as the bundler. It covers basic configuration, dependency management, and core React concepts.

---

## Project Structure

```
Namaste_React/
  ├── index.html
  ├── index.js
  ├── package.json
  ├── package-lock.json
  ├── node_modules/
  └── readme.md
```

---

## NPM & Package Management

- **NPM** is the package manager used to install dependencies.
- **package.json**: Configuration for npm; keeps track of all dependencies and their versions.
- **package-lock.json**: Records the exact versions installed for reproducible builds.
- **node_modules/**: Contains all installed packages and their dependencies.

---

## Bundlers

Popular bundlers include:

- **Vite**
- **Parcel**
- **Create React App (CRA)**
- **Webpack**

Bundlers package your app for production.

---

## Parcel Features

- Dev Build & Local Server
- Hot Module Replacement (HMR)
- File Watching (C++ algorithm)
- Image Optimization
- Minification & Compression
- Bundling & Code Splitting
- Consistent Hashing
- Diagnostics & Error Handling
- HTTP/HTTPS support
- Tree Shaking (removes unused code)
- Separate dev and prod bundles

---

## Dependencies

- **Dev Dependencies** (e.g., Parcel):  
  Installed with `npm install --save-dev parcel`
- **Production Dependencies** (e.g., React, ReactDOM):  
  Installed with `npm install react react-dom`

---

## Gitignore

Add `node_modules/` to `.gitignore` because you can always reinstall it using `package.json` and `package-lock.json`.

---

## React Setup

**Install React and ReactDOM:**

```sh
npm install react react-dom
```

**Install Parcel:**

```sh
npm install --save-dev parcel
```

**Start Development Server:**

```sh
npm run start
```

---

## React Core Concepts

You can write React code using plain JS with `React.createElement` or using JSX (preferred).

**Example (JS):**

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading", className: "head-text" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

---

## Nested & Sibling Elements

**Nested Example:**

```javascript
const nested1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am the H1 test nested tag"),
    React.createElement(
      "p",
      {},
      "I am the paragraph for the nested H1 tag to be printed"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am the H1 test2 nested tag"),
    React.createElement(
      "p",
      {},
      "I am the paragraph for the nested H1 tag to be printed2"
    ),
  ])
);
```

- Children can be a single value or an array (for siblings).

---

## BrowserList

You can write React code in plain JS (with `React.createElement`) or JSX.  
JSX is preferred for readability and maintainability.

---

\*\*End
