## Setting Up React Router

To set up routing in React, use the `react-router-dom` library.

### 1. Install and Import

First, install the package (if not already):

```bash
npm install react-router-dom
```

Import the required functions:

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

### 2. Define Routes

Create a router configuration that maps paths to components:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Handles errors for this route
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);
```

### 3. Provide Router to Your App

Instead of rendering `<App />` directly, use the router provider:

```js
<RouterProvider router={appRouter} />
```

### 4. Handling Errors

You can specify an `errorElement` for any route to display custom error UI.

### 5. Access Router Error Hook

React Router provides hooks like `useRouteError` for advanced error handling in your components.
