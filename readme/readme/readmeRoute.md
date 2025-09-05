## React Router Setup Guide

[Installation](#1-installation) • [Import Essentials](#2-import-essentials) • [Route Configuration](#3-route-configuration) • [Router Provider](#4-router-provider) • [Nested Routes & Layouts](#5-nested-routes--layouts) • [Error Handling](#6-error-handling) • [Navigation](#7-navigation) • [Routing Types](#8-routing-types) • [Dynamic Routing](#9-dynamic-routing)

Set up routing in React using the `react-router-dom` library.

### 1. Installation

```bash
npm install react-router-dom
```

### 2. Import Essentials

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

### 3. Route Configuration

Define your routes by mapping paths to components:

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

### 4. Router Provider

Wrap your app with the router provider:

```js
<RouterProvider router={appRouter} />
```

### 5. Nested Routes & Layouts

For shared layouts (e.g., headers), use nested routes:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Shared layout
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

Use `<Outlet />` in your layout component to render child routes.

### 6. Error Handling

Assign `errorElement` for custom error UIs. Use hooks like `useRouteError` for advanced error handling.

### 7. Navigation

Use `<Link>` for client-side navigation (no page reload):

- `<a>` ❌ (full reload)
- `<Link>` ✅ (SPA navigation)

### 8. Routing Types

- **Client-side routing:** Navigation updates the UI without reloading the page.
- **Server-side routing:** Each navigation triggers a network request and reloads the page.

### 9. Dynamic Routing

Use the `useParams()` hook to access route parameters:

```js
const params = useParams();
console.log(params); // { id: 1 }
```