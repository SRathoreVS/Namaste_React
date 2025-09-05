## Table of Contents

- [JavaScript](#javascript)
  - [Variables in JavaScript](#q-what-are-variables-in-javascript-and-how-do-you-declare-them)
  - [Scope in JavaScript](#q-explain-scope-in-javascript)
  - [Functions](#q-what-are-functions-and-how-do-you-define-them)
  - [Closures](#q-what-are-closures-in-javascript)
  - [Hoisting](#q-what-is-hoisting)
  - [`this` Keyword](#q-how-does-this-work-in-javascript)
  - [Prototypes](#q-what-are-prototypes)
  - [ES6 Features](#q-list-key-es6-features)
  - [Promises](#q-what-are-promises-and-how-do-you-use-them)
  - [Async/Await](#q-how-does-asyncawait-work)
  - [Event Loop](#q-explain-the-event-loop)
  - [DOM Manipulation](#q-how-do-you-manipulate-the-dom)
  - [Event Delegation](#q-what-is-event-delegation)
  - [Bind, Call, Apply](#q-how-do-bind-call-and-apply-work)
  - [Higher Order Functions](#q-what-are-higher-order-functions)
  - [Modules](#q-how-do-you-use-modules-in-javascript)
  - [Error Handling](#q-how-do-you-handle-errors)
  - [Debouncing & Throttling](#q-what-is-debouncing-and-throttling)
  - [Currying](#q-what-is-currying)
  - [Polyfill](#q-how-do-you-write-a-polyfill)
  - [Memory Management](#q-how-do-you-manage-memory-in-javascript)
- [React.js](#reactjs)
  - [React Components](#q-what-are-react-components)
  - [JSX](#q-what-is-jsx)
  - [Props and State](#q-what-are-props-and-state)
  - [Functional vs Class Components](#q-functional-vs-class-components)
  - [`useState`](#q-how-does-usestate-work)
  - [`useEffect`](#q-how-does-useeffect-work)
  - [`useContext`](#q-how-does-usecontext-work)
  - [`useReducer`](#q-how-does-usereducer-work)
  - [`useRef`](#q-how-does-useref-work)
  - [`useMemo`](#q-how-does-usememo-work)
  - [`useCallback`](#q-how-does-usecallback-work)
  - [Prop Drilling & Context](#q-what-is-prop-drilling-and-how-does-context-solve-it)
  - [Controlled vs Uncontrolled Components](#q-controlled-vs-uncontrolled-components)
  - [Handling Forms](#q-how-do-you-handle-forms-in-react)
  - [Rendering Lists & Keys](#q-how-do-you-render-lists-and-use-keys)
  - [Conditional Rendering](#q-how-do-you-do-conditional-rendering)
  - [React Router](#q-how-does-react-router-work)
  - [State Management](#q-how-do-you-manage-state-in-react-redux-context-api)
  - [Lifecycle Methods](#q-what-are-lifecycle-methods-in-react)
  - [Error Boundaries](#q-what-are-error-boundaries)
  - [Code Splitting](#q-what-is-code-splitting-in-react)
  - [Performance Optimization](#q-how-do-you-optimize-performance-in-react)
  - [Custom Hooks](#q-how-do-you-write-custom-hooks)
  - [Testing React Components](#q-how-do-you-test-react-components-jestrtl)
  - [SSR/SSG in Next.js](#q-what-is-ssrssg-in-nextjs)
  - [React 18 Features](#q-what-are-react-18-features)

---

# 🚀 JavaScript & React.js Interview Q&A Guide

## JavaScript

### Q: What are variables in JavaScript and how do you declare them?

A: Variables store data values. Use `var`, `let`, or `const`. `var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.
Code:

```javascript
var a = 1; // function-scoped
let b = 2; // block-scoped
const c = 3; // block-scoped, immutable
```

---

### Q: Explain scope in JavaScript.

A: Scope determines variable accessibility. Global scope is outside functions, local scope is inside functions/blocks.
Code:

```javascript
let x = 10; // global
function foo() {
  let y = 20; // local
  console.log(x, y);
}
foo(); // 10 20
```

---

### Q: What are functions and how do you define them?

A: Functions are reusable blocks of code. Define with function declaration, expression, or arrow function.
Code:

```javascript
function add(a, b) {
  return a + b;
}
const sub = function (a, b) {
  return a - b;
};
const mul = (a, b) => a * b;
```

---

### Q: What are closures in JavaScript?

A: Closures are functions that remember variables from their outer scope, even after the outer function has finished executing.
Code:

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
```

---

### Q: What is hoisting?

A: Hoisting moves variable and function declarations to the top of their scope. `var` is hoisted as undefined, `let`/`const` are not initialized.
Code:

```javascript
console.log(a); // undefined
var a = 5;
```

---

### Q: How does `this` work in JavaScript?

A: `this` refers to the object calling the function. In arrow functions, `this` is lexically inherited.
Code:

```javascript
const obj = {
  val: 42,
  getVal: function () {
    return this.val;
  },
};
obj.getVal(); // 42
```

---

### Q: What are prototypes?

A: Prototypes allow objects to inherit properties/methods from other objects. All objects have a prototype chain.
Code:

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};
const p = new Person("Sam");
p.sayHi(); // "Hi, Sam"
```

---

### Q: List key ES6 features.

A: ES6 introduced `let`, `const`, arrow functions, classes, template literals, destructuring, spread/rest, promises, modules.
Code:

```javascript
const arr = [1, 2, 3];
const [a, ...rest] = arr; // destructuring, rest
const sum = (x, y) => x + y; // arrow function
```

---

### Q: What are promises and how do you use them?

A: Promises handle async operations. They have `then`, `catch`, and `finally` methods.
Code:

```javascript
const p = new Promise((resolve, reject) => resolve(42));
p.then((val) => console.log(val)); // 42
```

---

### Q: How does async/await work?

A: `async` functions return promises. `await` pauses execution until the promise resolves.
Code:

```javascript
async function fetchData() {
  const res = await fetch("/api");
  const data = await res.json();
  return data;
}
```

---

### Q: Explain the event loop.

A: The event loop processes the call stack and message queue, enabling non-blocking async operations.
Code:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Output: A C B
```

---

### Q: How do you manipulate the DOM?

A: Use methods like `getElementById`, `querySelector`, and `innerHTML` to access and update DOM elements.
Code:

```javascript
document.getElementById("demo").textContent = "Hello!";
```

---

### Q: What is event delegation?

A: Event delegation attaches a single event listener to a parent, handling events for child elements via event bubbling.
Code:

```javascript
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") alert(e.target.textContent);
});
```

---

### Q: How do bind, call, and apply work?

A: They set the `this` context for functions. `bind` returns a new function, `call` and `apply` invoke immediately.
Code:

```javascript
function greet() {
  return `Hi, ${this.name}`;
}
const user = { name: "Alex" };
greet.call(user); // "Hi, Alex"
```

---

### Q: What are higher order functions?

A: Functions that take other functions as arguments or return them. Examples: `map`, `filter`, `reduce`.
Code:

```javascript
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

---

### Q: How do you use modules in JavaScript?

A: Use `export` and `import` to share code between files.
Code:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
// app.js
import { add } from "./math.js";
```

---

### Q: How do you handle errors?

A: Use `try...catch` for synchronous errors, `.catch` for promises.
Code:

```javascript
try {
  throw new Error("Oops!");
} catch (e) {
  console.error(e.message);
}
```

---

### Q: What is debouncing and throttling?

A: Debouncing delays execution until after a pause. Throttling limits execution to once per interval.
Code:

```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

---

### Q: What is currying?

A: Currying transforms a function with multiple arguments into a sequence of functions each taking one argument.
Code:

```javascript
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
}
```

---

### Q: How do you write a polyfill?

A: Polyfills add missing features to older environments. Example: `Array.prototype.includes`.
Code:

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (val) {
    return this.indexOf(val) !== -1;
  };
}
```

---

### Q: How do you manage memory in JavaScript?

A: Avoid memory leaks by cleaning up event listeners, intervals, and unused references.
Code:

```javascript
const btn = document.getElementById("btn");
function handleClick() {
  /* ... */
}
btn.addEventListener("click", handleClick);
// Later:
btn.removeEventListener("click", handleClick);
```

---

## React.js

### Q: What are React components?

A: Components are reusable UI pieces. They can be functional or class-based.
Code:

```jsx
function Hello() {
  return <h1>Hello</h1>;
}
class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

---

### Q: What is JSX?

A: JSX is a syntax extension for JavaScript, allowing HTML-like code in React.
Code:

```jsx
const element = <div>Hello, JSX!</div>;
```

---

### Q: What are props and state?

A: Props are inputs to components, state is internal data managed by the component.
Code:

```jsx
function Greet({ name }) {
  return <h1>Hello, {name}</h1>;
}
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### Q: Functional vs Class components?

A: Functional components are simpler and use hooks. Class components use lifecycle methods and `this`.
Code:

```jsx
// Functional
function App() {
  return <div>Hi</div>;
}
// Class
class App extends React.Component {
  render() {
    return <div>Hi</div>;
  }
}
```

---

### Q: How does useState work?

A: `useState` adds state to functional components.
Code:

```jsx
const [value, setValue] = useState("");
```

---

### Q: How does useEffect work?

A: `useEffect` runs side effects after render (e.g., data fetching, subscriptions).
Code:

```jsx
useEffect(() => {
  document.title = "Updated!";
}, []);
```

---

### Q: How does useContext work?

A: `useContext` accesses context values without prop drilling.
Code:

```jsx
const ThemeContext = React.createContext("light");
function App() {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

---

### Q: How does useReducer work?

A: `useReducer` manages complex state logic, similar to Redux.
Code:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

### Q: How does useRef work?

A: `useRef` creates mutable refs for DOM nodes or persistent values.
Code:

```jsx
const inputRef = useRef();
<input ref={inputRef} />;
```

---

### Q: How does useMemo work?

A: `useMemo` memoizes expensive calculations to avoid unnecessary recalculations.
Code:

```jsx
const result = useMemo(() => computeExpensive(val), [val]);
```

---

### Q: How does useCallback work?

A: `useCallback` memoizes functions to prevent unnecessary re-renders.
Code:

```jsx
const handleClick = useCallback(() => doSomething(), []);
```

---

### Q: What is prop drilling and how does context solve it?

A: Prop drilling passes data through many layers. Context provides data directly to deeply nested components.
Code:

```jsx
const UserContext = React.createContext();
function App() {
  return (
    <UserContext.Provider value="Sam">
      <Profile />
    </UserContext.Provider>
  );
}
function Profile() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}
```

---

### Q: Controlled vs uncontrolled components?

A: Controlled components use React state for form values. Uncontrolled use refs.
Code:

```jsx
// Controlled
<input value={val} onChange={e => setVal(e.target.value)} />
// Uncontrolled
<input ref={inputRef} />
```

---

### Q: How do you handle forms in React?

A: Use state for input values and handle changes with event handlers.
Code:

```jsx
const [name, setName] = useState("");
<form
  onSubmit={(e) => {
    e.preventDefault();
    alert(name);
  }}
>
  <input value={name} onChange={(e) => setName(e.target.value)} />
</form>;
```

---

### Q: How do you render lists and use keys?

A: Use `map` to render lists. Keys help React identify items.
Code:

```jsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

---

### Q: How do you do conditional rendering?

A: Use ternary operators or logical expressions to render components conditionally.
Code:

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

### Q: How does React Router work?

A: React Router manages navigation. Use `Route`, `Link`, and hooks like `useParams`.
Code:

```jsx
<Route path="/user/:id" element={<User />} />;
// In User component:
const { id } = useParams();
```

---

### Q: How do you manage state in React (Redux, Context API)?

A: Use Context for simple global state, Redux for complex state with middleware and devtools.
Code:

```jsx
// Redux example
const store = createStore(reducer);
<Provider store={store}>
  <App />
</Provider>;
```

---

### Q: What are lifecycle methods in React?

A: Class components have methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
Code:

```jsx
class MyComp extends React.Component {
  componentDidMount() {
    /* fetch data */
  }
  render() {
    return <div />;
  }
}
```

---

### Q: What are error boundaries?

A: Error boundaries catch errors in child components and display fallback UI.
Code:

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? <h1>Error!</h1> : this.props.children;
  }
}
```

---

### Q: What is code splitting in React?

A: Code splitting loads parts of the app on demand using `React.lazy` and `Suspense`.
Code:

```jsx
const LazyComp = React.lazy(() => import("./LazyComp"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComp />
</Suspense>;
```

---

### Q: How do you optimize performance in React?

A: Use memoization (`React.memo`, `useMemo`, `useCallback`), lazy loading, and windowing for large lists.
Code:

```jsx
const MemoComp = React.memo(function Comp(props) {
  /* ... */
});
```

---

### Q: How do you write custom hooks?

A: Custom hooks extract reusable logic from components.
Code:

```jsx
function useCounter(init = 0) {
  const [count, setCount] = useState(init);
  const inc = () => setCount((c) => c + 1);
  return { count, inc };
}
```

---

### Q: How do you test React components (Jest/RTL)?

A: Use Jest for assertions and React Testing Library for rendering and user events.
Code:

```jsx
import { render, fireEvent } from "@testing-library/react";
test("increments", () => {
  const { getByText } = render(<Counter />);
  fireEvent.click(getByText("Increment"));
  expect(getByText("1")).toBeInTheDocument();
});
```

---

### Q: What is SSR/SSG in Next.js?

A: SSR renders pages on the server per request. SSG generates static pages at build time.
Code:

```javascript
// pages/index.js
export async function getServerSideProps() {
  return { props: { data: await fetchData() } };
}
```

---

### Q: What are React 18 features?

A: React 18 adds concurrent rendering, automatic batching, and new hooks like `useId`.
Code:

```jsx
const id = useId();
<input id={id} />;
```

---
