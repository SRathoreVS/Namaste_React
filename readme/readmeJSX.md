# JSX in React

---

## What is JSX?

- **JSX** stands for **JavaScript XML**.
- It is an HTML-like syntax used to describe UI elements in React.
- JSX is **not** an integral part of React, but it makes building React apps easier and more readable.

---

## How JSX Works

- JSX looks like HTML or XML, but it is actually **syntactic sugar** for JavaScript.
- Example JSX code:
  ```jsx
  const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀🚀</h1>;
  ```
- Browsers **do not understand JSX** directly. They only understand JavaScript (ES6+).

---

## Transpiling JSX

- Before reaching the browser, JSX is **transpiled** (converted) into regular JavaScript.
- Example transpilation:

  ```jsx
  // JSX
  const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀🚀</h1>;

  // Transpiled to JS using BABEL
  const jsxHeading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React using JSX 🚀🚀"
  );

  //then to HTML element to render
  <h1 id="heading">"Namaste React using JSX 🚀🚀"</h1>;
  ```

- **Parcel** (or other bundlers like Webpack, Vite) handles this transpilation automatically.

---

-**BABEL** - a javascript compiler that compiles JSX to React.createElement()

-**in JSX we need to wrap our code in () in js if we are writing in multiple lines , so that babel can understand**

## Summary

- JSX makes React code easier to write and read.
- It must be transpiled to JavaScript before running in the browser.
- Tools like Parcel manage this process for you where Babel is transpiling .
