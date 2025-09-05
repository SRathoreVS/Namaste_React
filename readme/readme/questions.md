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

A:
- Variables are containers for storing data values, like numbers, strings, arrays, or objects.
- You can declare variables using `var`, `let`, and `const`, each with different scoping rules and mutability.
- `var` is function-scoped and can be redeclared; `let` and `const` are block-scoped, but `const` cannot be reassigned.
Flow: The code demonstrates declaring variables using all three keywords and highlights their scope and mutability.

```javascript
var a = 1; // function-scoped, can be redeclared
let b = 2; // block-scoped, can be updated
const c = 3; // block-scoped, cannot be reassigned
```

---

### Q: Explain scope in JavaScript.

A:
- Scope determines the visibility and lifetime of variables, controlling where they can be accessed in code.
- Global scope means variables are accessible everywhere, while local scope restricts access to within functions or blocks.
- Proper scoping helps prevent naming conflicts and accidental variable overwrites.
Flow: The code shows a global variable, a function with a local variable, and how both are accessed within the function.

```javascript
let x = 10; // global
function foo() {
  let y = 20; // local
  console.log(x, y); // accesses both global and local variables
}
foo(); // 10 20
```

---

### Q: What are functions and how do you define them?

A:
- Functions are reusable blocks of code that perform specific tasks, improving modularity and readability.
- You can define functions using declarations, expressions, or arrow functions, each with different syntax and behavior.
- Functions can take parameters, return values, and be assigned to variables or passed as arguments.
Flow: The code shows three ways to define functions and how to use them for basic arithmetic operations.

```javascript
function add(a, b) {
  return a + b; // function declaration
}
const sub = function (a, b) {
  return a - b; // function expression
};
const mul = (a, b) => a * b; // arrow function
```

---

### Q: What are closures in JavaScript?

A:
- Closures occur when a function retains access to its outer (enclosing) scope, even after the outer function has finished executing.
- They are commonly used for data privacy, maintaining state, and creating factory functions.
- Closures can help in scenarios like event handlers, callbacks, and function factories.
Flow: The code creates a counter function that "remembers" its `count` variable through closure and increments it each call.

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    return ++count; // accesses count via closure
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
```

---

### Q: What is hoisting?

A:
- Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before code execution.
- `var` declarations are hoisted and initialized as `undefined`, while `let` and `const` are hoisted but not initialized, causing a "temporal dead zone."
- Function declarations are fully hoisted, allowing you to call them before their definition.
Flow: The code logs a variable before its declaration, showing `undefined` due to hoisting.

```javascript
console.log(a); // undefined (hoisted)
var a = 5;
```

---

### Q: How does `this` work in JavaScript?

A:
- The `this` keyword refers to the object that is currently executing the code, and its value depends on how a function is called.
- In regular functions, `this` refers to the calling object; in arrow functions, `this` is inherited from the enclosing scope.
- Understanding `this` is crucial for object methods, constructors, and event handlers.
Flow: The code defines a method inside an object and uses `this` to access the object's property.

```javascript
const obj = {
  val: 42,
  getVal: function () {
    return this.val; // 'this' refers to obj
  },
};
obj.getVal(); // 42
```

---

### Q: What are prototypes?

A:
- Prototypes enable inheritance in JavaScript, allowing objects to inherit properties and methods from other objects.
- Every object has a prototype, forming a prototype chain that JavaScript follows to resolve properties.
- Understanding prototypes is essential for working with constructor functions and classes.
Flow: The code creates a constructor function and adds a method to its prototype, which instances can access.

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, ${this.name}`; // method from prototype
};
const p = new Person("Sam");
p.sayHi(); // "Hi, Sam"
```

---

### Q: List key ES6 features.

A:
- ES6 (ECMAScript 2015) introduced `let`, `const`, arrow functions, template literals, destructuring, and modules, among others.
- Features like classes, promises, and spread/rest operators make JavaScript more powerful and concise.
- Understanding ES6 is critical for modern JavaScript development.
Flow: The code uses destructuring, the rest operator, and an arrow function—three prominent ES6 features.

```javascript
const arr = [1, 2, 3];
const [a, ...rest] = arr; // destructuring and rest
const sum = (x, y) => x + y; // arrow function
```

---

### Q: What are promises and how do you use them?

A:
- Promises are objects representing the eventual completion or failure of asynchronous operations.
- They provide `then`, `catch`, and `finally` methods to handle results or errors in async workflows.
- Promises simplify chaining of async tasks and error handling compared to callbacks.
Flow: The code creates a promise that resolves a value and logs the result using `.then()`.

```javascript
const p = new Promise((resolve, reject) => resolve(42));
p.then((val) => console.log(val)); // 42
```

---

### Q: How does async/await work?

A:
- `async` functions allow you to write asynchronous code that looks synchronous, improving readability.
- The `await` keyword pauses execution until the promise resolves, making it easier to handle async results and errors.
- Async/await is built on top of promises and helps avoid callback hell.
Flow: The code uses `async` and `await` to fetch data and wait for the response before returning it.

```javascript
async function fetchData() {
  const res = await fetch("/api"); // waits for fetch
  const data = await res.json(); // waits for JSON parsing
  return data;
}
```

---

### Q: Explain the event loop.

A:
- The event loop allows JavaScript to handle asynchronous tasks like timers, network requests, and input events in a non-blocking way.
- It manages the call stack and message queue, executing tasks in order and keeping the UI responsive.
- Understanding the event loop helps debug async code and optimize performance.
Flow: The code schedules a timeout and shows how synchronous and asynchronous logs are ordered.

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Output: A C B (event loop processes 'B' after call stack clears)
```

---

### Q: How do you manipulate the DOM?

A:
- DOM manipulation lets you access, modify, and interact with HTML elements using JavaScript.
- Common methods include `getElementById`, `querySelector`, and properties like `innerHTML` or `textContent`.
- Manipulating the DOM is essential for updating UI dynamically.
Flow: The code selects an element by ID and changes its text content.

```javascript
document.getElementById("demo").textContent = "Hello!";
// Finds the element and updates its displayed text
```

---

### Q: What is event delegation?

A:
- Event delegation attaches a single event listener to a parent element to handle events for its children, improving efficiency.
- It leverages event bubbling, where events propagate up the DOM tree to ancestor elements.
- Event delegation is useful for dynamic content and reduces memory usage.
Flow: The code adds a click listener to a parent list and handles clicks on child items.

```javascript
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") alert(e.target.textContent);
});
// Single listener handles all <li> clicks
```

---

### Q: How do bind, call, and apply work?

A:
- `bind`, `call`, and `apply` control the `this` context inside functions.
- `bind` returns a new function with the specified `this`, while `call` and `apply` invoke the function immediately.
- Use `call` for argument lists and `apply` for argument arrays.
Flow: The code uses `call` to invoke a function with a custom `this` object.

```javascript
function greet() {
  return `Hi, ${this.name}`;
}
const user = { name: "Alex" };
greet.call(user); // "Hi, Alex"
```

---

### Q: What are higher order functions?

A:
- Higher order functions take other functions as arguments or return them as results.
- They are fundamental for functional programming, enabling abstraction and code reuse.
- Examples include `map`, `filter`, and `reduce` in arrays.
Flow: The code uses `map` to double each number in an array using a callback function.

```javascript
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

---

### Q: How do you use modules in JavaScript?

A:
- Modules allow you to split code into separate files, improving organization and reusability.
- Use `export` to expose functions/variables and `import` to bring them into other files.
- Modules help manage dependencies and prevent global variable conflicts.
Flow: The code exports a function from one file and imports it into another for use.

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

A:
- Error handling ensures your program can respond gracefully to unexpected situations.
- Use `try...catch` for synchronous errors, and `.catch` for handling promise rejections.
- Always provide meaningful error messages and consider fallback behavior.
Flow: The code throws an error inside a try block and catches it, logging the message.

```javascript
try {
  throw new Error("Oops!"); // throws an error
} catch (e) {
  console.error(e.message); // handles and logs error
}
```

---

### Q: What is debouncing and throttling?

A:
- Debouncing delays execution of a function until a set time has passed since its last invocation, ideal for input events.
- Throttling limits a function to run at most once per interval, useful for scroll or resize events.
- Both techniques optimize performance and prevent excessive function calls.
Flow: The code implements a debounce function that waits before calling the original function.

```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
// Only runs fn after no calls for 'delay' ms
```

---

### Q: What is currying?

A:
- Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.
- It enables partial application, allowing you to fix some arguments and reuse functions.
- Currying is useful in functional programming and composing reusable logic.
Flow: The code defines a curry function that returns new functions until all arguments are provided.

```javascript
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
}
// Allows calling with arguments in steps
```

---

### Q: How do you write a polyfill?

A:
- Polyfills add missing functionality to older browsers or environments by implementing new features using existing code.
- They help bridge the gap for unsupported features, ensuring compatibility.
- Always check if a feature exists before adding a polyfill to avoid overwriting native implementations.
Flow: The code adds a polyfill for `Array.prototype.includes` if it's missing.

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (val) {
    return this.indexOf(val) !== -1;
  };
}
// Custom method behaves like native includes
```

---

### Q: How do you manage memory in JavaScript?

A:
- Memory management involves cleaning up unused references to prevent leaks and optimize performance.
- Remove event listeners, clear timers, and avoid excessive global variables.
- Garbage collection helps, but manual cleanup is essential for long-running apps.
Flow: The code adds and then removes an event listener to avoid memory leaks.

```javascript
const btn = document.getElementById("btn");
function handleClick() {
  /* ... */
}
btn.addEventListener("click", handleClick);
// Later:
btn.removeEventListener("click", handleClick);
// Ensures browser can reclaim memory
```

---

## React.js

### Q: What are React components?

A:
- Components are the building blocks of React UIs, representing reusable and independent pieces of the interface.
- They can be functional or class-based, each with their own syntax and features.
- Components accept inputs (props) and manage their own state, rendering UI based on data.
Flow: The code demonstrates both functional and class components rendering simple headings.

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

A:
- JSX is a syntax extension that allows you to write HTML-like code inside JavaScript, making UI definition intuitive.
- Under the hood, JSX is transpiled to React's `createElement` calls.
- JSX supports expressions, props, and nesting, making complex UI structures readable.
Flow: The code creates a JSX element, which React interprets and renders to the DOM.

```jsx
const element = <div>Hello, JSX!</div>;
// Looks like HTML, but is JavaScript code
```

---

### Q: What are props and state?

A:
- Props are inputs passed to components from parent components, making components dynamic and reusable.
- State is internal, mutable data managed by the component, often used for user interactions and UI changes.
- Props are read-only; state can be updated with hooks or setState.
Flow: The code shows a greeting component using props and a counter component using state.

```jsx
function Greet({ name }) {
  return <h1>Hello, {name}</h1>; // uses prop 'name'
}
function Counter() {
  const [count, setCount] = useState(0); // uses state
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### Q: Functional vs Class components?

A:
- Functional components are simpler, stateless by default, but can use hooks for state and effects.
- Class components use ES6 classes, have lifecycle methods, and manage state with `this.state`.
- Hooks have made functional components the preferred approach in modern React.
Flow: The code shows both component types rendering similar content.

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

A:
- `useState` is a React hook that lets functional components maintain internal state.
- It returns a state variable and a setter function to update the value.
- Updating state triggers a re-render with the new state value.
Flow: The code declares a state variable and updates it on input change.

```jsx
const [value, setValue] = useState("");
// 'value' holds state, 'setValue' updates it
```

---

### Q: How does useEffect work?

A:
- `useEffect` is a hook for running side effects, like data fetching, subscriptions, or manual DOM updates.
- It runs after every render by default, but can be controlled with dependency arrays.
- Cleanup functions can be returned to handle resource management.
Flow: The code sets the document title after rendering and only on mount due to the empty dependency array.

```jsx
useEffect(() => {
  document.title = "Updated!";
}, []);
// Runs once when component mounts
```

---

### Q: How does useContext work?

A:
- `useContext` allows components to access context values directly, avoiding prop drilling through many layers.
- Context provides a way to share global data like themes, users, or settings.
- Use a Provider to set the context value, and `useContext` to consume it in children.
Flow: The code defines a context and reads its value inside a component.

```jsx
const ThemeContext = React.createContext("light");
function App() {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

---

### Q: How does useReducer work?

A:
- `useReducer` is a hook for managing complex state logic, similar to how Redux works.
- It takes a reducer function and initial state, returning current state and a dispatch function.
- Useful for scenarios with multiple state transitions or actions.
Flow: The code defines a reducer for counting and dispatches actions to update state.

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

A:
- `useRef` creates mutable reference objects, typically used for accessing DOM nodes or storing persistent values.
- Unlike state, changes to refs do not trigger re-renders.
- Useful for focusing inputs, storing intervals, or caching values.
Flow: The code attaches a ref to an input element for direct DOM access.

```jsx
const inputRef = useRef();
<input ref={inputRef} />;
// Use inputRef.current to access the DOM node
```

---

### Q: How does useMemo work?

A:
- `useMemo` memoizes the result of expensive calculations, preventing unnecessary recalculations on every render.
- It takes a function and dependency array; recalculates only when dependencies change.
- Improves performance in components with heavy computations.
Flow: The code calculates a value only when its dependency changes.

```jsx
const result = useMemo(() => computeExpensive(val), [val]);
// Only recalculates if 'val' changes
```

---

### Q: How does useCallback work?

A:
- `useCallback` memoizes functions, preventing them from being recreated on every render.
- Useful for passing stable callbacks to child components, avoiding unnecessary re-renders.
- Takes a function and dependency array, updating only when dependencies change.
Flow: The code memoizes a click handler to maintain its identity across renders.

```jsx
const handleClick = useCallback(() => doSomething(), []);
// 'handleClick' won't change unless dependencies change
```

---

### Q: What is prop drilling and how does context solve it?

A:
- Prop drilling is passing data through many layers of components, even when only deeply nested children need it.
- It can make code harder to maintain and read.
- Context API solves this by providing a direct way to supply data to deeply nested components.
Flow: The code creates a context and provides its value to a child component without passing props through intermediate components.

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

A:
- Controlled components have form values managed by React state, giving you full control over input values.
- Uncontrolled components use refs to access DOM values directly, relying less on React state.
- Controlled components are preferred for validation, dynamic updates, and complex forms.
Flow: The code compares controlled and uncontrolled input handling.

```jsx
// Controlled
<input value={val} onChange={e => setVal(e.target.value)} />
// Uncontrolled
<input ref={inputRef} />
```

---

### Q: How do you handle forms in React?

A:
- Use state to store input values, updating them via `onChange` handlers.
- Form submission is managed by `onSubmit`, often with validation and feedback.
- Controlled components allow real-time updates and validation.
Flow: The code uses state for an input field and handles form submission with a custom event handler.

```jsx
const [name, setName] = useState("");
<form
  onSubmit={(e) => {
    e.preventDefault();
    alert(name); // uses state value
  }}
>
  <input value={name} onChange={(e) => setName(e.target.value)} />
</form>;
```

---

### Q: How do you render lists and use keys?

A:
- Use `map` to render arrays of components, with each item assigned a unique `key` prop.
- Keys help React track changes, additions, or removals for efficient rendering.
- Never use array indexes as keys if items can change order; prefer unique IDs.
Flow: The code maps over an array and renders each item with a unique key.

```jsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
// Keys optimize rendering and reconciliation
```

---

### Q: How do you do conditional rendering?

A:
- Conditional rendering shows or hides UI elements based on state or props.
- Use ternary operators, logical AND, or functions to control which components are displayed.
- Helps create dynamic and interactive UIs.
Flow: The code renders different components based on a boolean value.

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
// Renders Dashboard if logged in, otherwise Login
}
```

---

### Q: How does React Router work?

A:
- React Router is a library for handling navigation and routing in React apps.
- It uses declarative components like `Route`, `Link`, and hooks such as `useParams` to manage routes and parameters.
- Supports nested routes, dynamic URLs, and client-side navigation.
Flow: The code sets up a route with a dynamic parameter and reads it inside the component.

```jsx
<Route path="/user/:id" element={<User />} />;
// In User component:
const { id } = useParams();
// Reads current route parameter
```

---

### Q: How do you manage state in React (Redux, Context API)?

A:
- State management libraries like Redux are useful for large apps with complex state and multiple components needing access.
- Context API is simpler for small to medium apps with basic global state needs.
- Redux offers middleware, devtools, and predictable state updates via reducers and actions.
Flow: The code initializes a Redux store and provides it to the app via the Provider component.

```jsx
// Redux example
const store = createStore(reducer);
<Provider store={store}>
  <App />
</Provider>;
// Makes state available to all components
```

---

### Q: What are lifecycle methods in React?

A:
- Lifecycle methods are special functions in class components that run at specific stages of a component's existence.
- Common methods include `componentDidMount` (after mount), `componentDidUpdate` (after update), and `componentWillUnmount` (before unmount).
- They are useful for data fetching, subscriptions, and cleanup tasks.
Flow: The code runs a method after the component mounts to fetch data.

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

A:
- Error boundaries are React components that catch JavaScript errors in child components and display fallback UI.
- They use lifecycle methods like `getDerivedStateFromError` and `componentDidCatch`.
- Only class components can be error boundaries; they prevent crashes and improve user experience.
Flow: The code wraps children with an error boundary that displays a message on error.

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

A:
- Code splitting loads only the necessary parts of your app when needed, improving initial load time.
- Use `React.lazy` for dynamic imports and `Suspense` to handle loading states.
- Essential for large apps and optimizing performance.
Flow: The code dynamically imports a component and renders a fallback while loading.

```jsx
const LazyComp = React.lazy(() => import("./LazyComp"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComp />
</Suspense>;
// Loads LazyComp only when needed
```

---

### Q: How do you optimize performance in React?

A:
- Use memoization (`React.memo`, `useMemo`, `useCallback`) to avoid unnecessary re-renders and recalculations.
- Implement lazy loading and windowing for large lists (e.g., `react-window`).
- Minimize expensive operations and avoid passing new objects/functions as props.
Flow: The code wraps a component with `React.memo` to prevent re-renders unless props change.

```jsx
const MemoComp = React.memo(function Comp(props) {
  /* ... */
});
// Only re-renders if props change
```

---

### Q: How do you write custom hooks?

A:
- Custom hooks are functions that use React hooks to share reusable logic across components.
- They follow the `use` naming convention and can call other hooks internally.
- Custom hooks simplify complex logic and keep components clean.
Flow: The code creates a custom hook for a counter with increment logic.

```jsx
function useCounter(init = 0) {
  const [count, setCount] = useState(init);
  const inc = () => setCount((c) => c + 1);
  return { count, inc }; // returns count state and increment function
}
```

---

### Q: How do you test React components (Jest/RTL)?

A:
- Use Jest for test running and assertions; React Testing Library (RTL) for rendering components and simulating user events.
- Test user interaction, component rendering, and expected outputs.
- Good tests cover edge cases, accessibility, and error handling.
Flow: The code renders a component, simulates a click, and asserts the expected result.

```jsx
import { render, fireEvent } from "@testing-library/react";
test("increments", () => {
  const { getByText } = render(<Counter />);
  fireEvent.click(getByText("Increment"));
  expect(getByText("1")).toBeInTheDocument();
});
// Verifies button click updates count
```

---

### Q: What is SSR/SSG in Next.js?

A:
- SSR (Server-Side Rendering) generates HTML on each request, improving SEO and initial load performance.
- SSG (Static Site Generation) builds HTML at compile time, serving static pages for fast loads.
- Next.js supports both methods for flexible data fetching and page rendering.
Flow: The code uses Next.js `getServerSideProps` to fetch data on the server for each request.

```javascript
// pages/index.js
export async function getServerSideProps() {
  return { props: { data: await fetchData() } };
}
// Data is fetched and rendered server-side
```

---

### Q: What are React 18 features?

A:
- React 18 introduces concurrent rendering, allowing React to interrupt and resume rendering for better responsiveness.
- Automatic batching groups multiple state updates for fewer renders and improved performance.
- New hooks like `useId` help with stable unique IDs for server/client rendering.
Flow: The code uses `useId` to generate a unique input ID for accessibility.

```jsx
const id = useId();
<input id={id} />;
// Ensures the input has a unique, stable ID
```

---
