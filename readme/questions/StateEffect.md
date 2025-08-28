# React Interview & Concept Notes

This document covers important **React concepts, hooks, and internal mechanisms** with detailed Q&A. It’s structured for quick reference and interview preparation.

---

## 📑 Table of Contents

- [useState and Props](#usestate-and-props)
- [Purpose and Usage of useEffect](#purpose-and-usage-of-useeffect)
- [React Rendering, Virtual DOM, and Reconciliation](#react-rendering-virtual-dom-and-reconciliation)
- [React Performance Techniques](#react-performance-techniques)
- [Lifecycle with useEffect](#lifecycle-with-useeffect)
- [Immutability of State](#immutability-of-state)
- [Hooks vs Class Components](#hooks-vs-class-components)
- [Order of Multiple useEffect Hooks](#order-of-multiple-useeffect-hooks)
- [Avoiding Infinite Loops in useEffect](#avoiding-infinite-loops-in-useeffect)
- [Multiple useState vs Single State Object](#multiple-usestate-vs-single-state-object)
- [Side Effects on Prop Change Only](#side-effects-on-prop-change-only)
- [Why State is Not Updated Immediately](#why-state-is-not-updated-immediately)
- [Cleanup Functions in useEffect](#cleanup-functions-in-useeffect)
- [React's Reconciliation Process](#reacts-reconciliation-process)
- [What Happens Internally with setState](#what-happens-internally-with-setstate)
- [React Batching Explained](#react-batching-explained)
- [Keys in Lists](#keys-in-lists)
- [useEffect vs useLayoutEffect](#useeffect-vs-uselayouteffect)

---

## useState and Props

**Q: What is the difference between state and props in React? How is state managed using `useState`?**  
**A:**

- **Props**: Passed from parent to child. Read-only inside child.
- **State**: Local to a component. Can be changed using `useState` setter function.
- Updating state causes **re-render**.

```js
import React, { useState } from "react";
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## Purpose and Usage of useEffect

**Q: Explain the purpose of useEffect. When does the function passed to useEffect execute?**  
**A:**

- Handles side effects: data-fetching, timers, subscriptions, DOM updates.
- Runs after render.
- Behavior depends on dependencies:
  - No deps → runs after every render.
  - `[]` → runs once (mount).
  - `[dep]` → runs when dep changes.

```js
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## React Rendering, Virtual DOM, and Reconciliation

**Q: How does React handle rendering behind the scenes?**  
**A:**

- Maintains a Virtual DOM (lightweight JS copy of the real DOM).
- On state/prop changes → creates a new Virtual DOM → diffs with old one.
- Uses Reconciliation algorithm to update only changed nodes in the real DOM.

```
State/Props Change
             ↓
    New Virtual DOM
             ↓ (diffing)
Old Virtual DOM  →  Minimal Updates → Real DOM
```

---

## React Performance Techniques

**Q: How does React ensure performance with frequent updates?**  
**A:**

- Batching multiple state updates.
- Uses keys in lists for efficient reconciliation.
- Optimization hooks: `useMemo`, `useCallback`, `React.memo`.
- Code-splitting & lazy loading to reduce bundle size.

---

## Lifecycle with useEffect

**Q: Describe lifecycle phases in function components using useEffect.**  
**A:**

- Mount → effect runs after first render.
- Update → effect runs when dependencies change.
- Unmount → cleanup function runs.

```js
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  return () => clearInterval(timer); // cleanup
}, []);
```

**Lifecycle Visualization:**

```
Mount → useEffect runs → [updates if deps change] → Cleanup on unmount
```

---

## Immutability of State

**Q: Why shouldn’t state be mutated directly in React?**  
**A:**

- React won’t detect direct mutations → no re-render.
- Always create a new copy (spread, concat, map).
- Use setState or state updater from useState.

---

## Hooks vs Class Components

**Q: What do hooks solve that wasn’t possible with classes?**  
**A:**

- Hooks allow state + lifecycle in functional components.
- Encourage splitting logic by feature (not lifecycle method).
- Enable custom hooks → reuse stateful logic.

---

## Order of Multiple useEffect Hooks

**Q: In what order do multiple useEffect hooks run?**  
**A:**

- Executed in the order written after render.
- State updates inside are batched.

---

## Avoiding Infinite Loops in useEffect

**Q: How can you avoid infinite loops with useEffect?**  
**A:**

- Provide correct dependency array.
- Don’t set state without condition inside effect.

**Example mistake:**

```js
useEffect(() => {
  setCount(count + 1); // runs forever if no deps
});
```

---

## Multiple useState vs Single State Object

**Q: When should you use multiple useState vs one state object?**  
**A:**

- Use multiple if states are independent.
- Use object if they are related.

```js
// Multiple
const [name, setName] = useState("");
const [age, setAge] = useState(0);

// Single object
const [form, setForm] = useState({ name: "", age: 0 });
```

---

## Side Effects on Prop Change Only

**Q: How to trigger an effect only on prop changes, not initial mount?**  
**A:**

```js
const isInitial = useRef(true);
useEffect(() => {
  if (isInitial.current) {
    isInitial.current = false;
  } else {
    // Run only on prop change
  }
}, [prop]);
```

---

## Why State is Not Updated Immediately

**Q: Why does console.log after setState show the old value?**  
**A:**

- React state updates are asynchronous + batched.
- The new state is applied on next render cycle.

---

## Cleanup Functions in useEffect

**Q: What are cleanup functions in useEffect?**  
**A:**

- Used to remove subscriptions, listeners, timers.
- Run before next effect execution OR unmount.

---

## React's Reconciliation Process

**Q: What role do keys play in reconciliation?**  
**A:**

- React uses keys in lists to track elements.
- If keys differ → element re-created.
- If keys same → element updated in place.

---

## What Happens Internally with setState

**Q: What happens when setState is called in a functional component?**  
**A:**

- Marks component as dirty.
- Schedules update (batched if possible).
- Component re-executes → new Virtual DOM.
- React diffs old vs new tree.
- Minimal DOM updates applied.

---

## React Batching Explained

**Q: How does batching work?**  
**A:**

- React groups multiple state updates in same event → one re-render.
- Improves performance & ensures consistency.

```js
setCount(1);
setName("Satyam");
// React batches them → Re-render happens once
```

---

## Keys in Lists

**Q: Why are keys important in React lists?**  
**A:**

- Help React identify which items changed, added, removed.
- Without keys, React re-renders entire list → performance issues.

```js
items.map((item) => <li key={item.id}>{item.name}</li>);
```

---

## useEffect vs useLayoutEffect

**Q: Difference between useEffect and useLayoutEffect?**  
**A:**

- `useEffect`: Runs after paint → non-blocking, good for async tasks.
- `useLayoutEffect`: Runs before paint → blocking, good for DOM measurements or sync UI updates.

```
Render → useLayoutEffect → Paint → useEffect
```
