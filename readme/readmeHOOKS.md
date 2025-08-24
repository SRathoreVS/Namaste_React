# React Hooks Notes 🚀

## HOOKS

React provides **Hooks** to make plain JavaScript variables into **reactive variables**.  
At the end of the day, Hooks are nothing but **JavaScript functions**.

---

### 🔑 Most Important Hooks

1. `useState()`
2. `useEffect()`

---

## `useState`

The `useState` Hook is used for **state management** inside a functional component.

- **Import**
  import { useState } from "react";

text

- **Why use it?**
- To create local **state variables** in a component.
- To update state and trigger **re-render**.

- **Syntax**
  const [value, setValue] = useState(defaultValue);

- `value` → current state value.
- `setValue(newValue)` → state update function.
-

- **Key Points**

1. `useState` is imported in **curly braces** (named import).
2. First element inside `[]` → the **state variable**.
3. Second element → function to **update** the state.
4. It helps React decide when to re-render the UI.
5. it helps the logic and UI to make work parallely
6. whenever the state Variable **updates** the UI will re-render itself

---

//super power variable => state hook
// local state
// 2nd param is for what functionality or modification we need for that variable we declared

## Example: Restaurant List Component 🍔

Here is a complete example demonstrating `useState` and updating state:

import { useState } from "react";
import RestroCards from "./RestroCards"; // example child component

const Body = () => {
// Superpower variable => state hook
const [listOfRestro, setListOfRestro] = useState([
{
id: 1,
name: "Meghna Foods",
cuisine: ["Biryani", "North-Indian", "Asian"],
rating: 4.3,
time: "38 mins",
image:
"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
},
{
id: 3,
name: "Jumbo King",
cuisine: ["Burger", "North-Indian", "Asian"],
rating: 4.8,
time: "38 mins",
image:
"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
},
{
id: 2,
name: "Burger King",
cuisine: ["Biryani", "North-Indian", "Asian"],
rating: 3.3,
time: "38 mins",
image:
"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
},
]);

return (

<div className="body">
{/* Search Bar */}
<div className="search">
<input />
<button type="search">Search</button>
</div>

{/_ Filter Button _/}

  <div className="filter">
    <button
      className="filter-btn"
      onClick={() => {
        // filter logic => top rated restaurants
        const filteredList = listOfRestro.filter((res) => res.rating > 4);
        setListOfRestro(filteredList); // updates state
      }}
    >
      Top Rated
    </button>
  </div>

{/_ Render Restaurant Cards _/}

  <div className="res-container">
    {listOfRestro.map((restaurant) => (
      <RestroCards key={restaurant.id} resData={restaurant} />
    ))}
  </div>
</div>
);
};

export default Body;

---

## Key Takeaways 📌

- **Always use** the state updater function (`setValue`) instead of modifying state directly.
- Updating state will **trigger a re-render** of the component.
- You can filter, sort, or transform data before updating state.

---

✅ Everything is in this single `.md` file: **Hook theory + Example + Code + Takeaways**.
