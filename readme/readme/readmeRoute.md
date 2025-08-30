## Setting Up React Router

To set up routing in React, use the `react-router-dom` library.

### 1. Install and Import

Install the package:

```bash
npm install react-router-dom
```

Import the required functions:

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

### 2. Define Routes

Configure your routes by mapping paths to components:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Custom error UI
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);
```

### 3. Provide Router to Your App

Wrap your application with the router provider:

```js
<RouterProvider router={appRouter} />
```

### 4. Nested Routes

For layouts with shared components (like headers), use nested routes:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contains shared layout
    children: [
      {
        path: "about",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

Use the `<Outlet />` component in your layout to render child routes.

### 5. Error Handling

Assign an `errorElement` to routes for custom error UIs. Use hooks like `useRouteError` for advanced error handling in components.

**Navigation:**  
Use `<Link>` for client-side navigation without page reloads.  
- `<a>` ❌ (causes full reload)  
- `<Link>` ✅ (single-page navigation)

**Types of Routing:**
- **Client-side routing:** Components are loaded in the browser at initial page load; navigation does not trigger a full page reload (except for API calls).
- **Server-side routing:** Navigating between pages triggers a network request and reloads the entire page, fetching new HTML from the server.
