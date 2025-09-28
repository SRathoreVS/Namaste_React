## React Class Component Lifecycle: Step-by-Step

React class components follow a specific lifecycle, which determines how they are created, updated, and destroyed. Here’s a clear breakdown of the main phases and methods:

### 1. Mounting (Component Creation)

- **constructor**  
  Initializes state and receives props.  
  _Called first when the component is created._

- **render**  
  Returns JSX to describe the UI.  
  _Called after the constructor._

- **componentDidMount**  
  Runs after the component is added to the DOM.  
  _Ideal for API calls or side effects._

### 2. Updating (State or Props Change)

- **render**  
  Called again when state or props change (e.g., via `this.setState()`).

- **componentDidUpdate**  
  Runs after the component updates and the DOM is re-rendered.  
  _Useful for reacting to changes._

### 3. Unmounting (Component Removal)

- **componentWillUnmount**  
  Called just before the component is removed from the DOM.  
  _Clean up resources here (e.g., timers, subscriptions)._

---

### How State Updates Work

1. You call `this.setState()` to update state.
2. React batches updates, calculates the difference (diff), and reconciles changes.
3. The `render` method runs again with the new state.
4. After the DOM updates, `componentDidUpdate` is called.

---

### Visual Lifecycle Flow

```mermaid
graph TD
  A[constructor] --> B[render]
  B --> C[componentDidMount]
  C --> D[User interacts / setState()]
  D --> B
  B --> E[componentDidUpdate]
  E --> D
  C --> F[componentWillUnmount]
```

---

**Summary Table**

| Phase      | Method               | Purpose                           |
| ---------- | -------------------- | --------------------------------- |
| Mounting   | constructor          | Initialize state, receive props   |
|            | render               | Return JSX                        |
|            | componentDidMount    | Run side effects (API calls)      |
| Updating   | render               | Re-render UI with new state/props |
|            | componentDidUpdate   | Respond to updates                |
| Unmounting | componentWillUnmount | Cleanup before removal            |

---

**Tip:**  
For most new React projects, prefer functional components with hooks, which provide similar lifecycle features in a simpler way.
