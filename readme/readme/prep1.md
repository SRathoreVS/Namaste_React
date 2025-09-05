1. **Preload, Reconnect, Prefetch, and Prerender**

   - **Preload**: Tells the browser to fetch critical resources early.
   - **Prefetch**: Fetches resources that might be needed later.
   - **Prerender**: Loads and renders an entire page in the background.
   - **Reconnect**: Re-establishes connections (e.g., DNS, TLS) before actual requests.

2. **Website Caching**

   - HTTP headers (`Cache-Control`, `ETag`, `Last-Modified`).
   - Service Workers for offline cache.
   - Browser cache and CDN edge caching.

3. **ETag, Cache-Control, Document Fragment**

   - **ETag**: Validator for caching, allows conditional requests.
   - **Cache-Control**: Defines caching policy (e.g., `max-age`, `no-cache`).
   - **Document Fragment**: Lightweight DOM object to hold nodes before appending to DOM.

4. **Optimizing Assets / Image Compression**

   - Minification (JS, CSS).
   - Tree-shaking (unused code removal).
   - Image formats:
     - **WebP**: Modern, smaller, supports lossy/lossless, transparency.
     - **PNG**: Lossless, good for transparency.
     - **JPG**: Lossy, good for photos.

5. **Memory Leak**

   - Unreleased memory due to unreferenced objects staying in memory (e.g., global variables, event listeners not removed).

6. **Repaint vs Reflow**

   - **Repaint**: Redrawing an element’s appearance without layout changes (e.g., color).
   - **Reflow**: Recalculating layout and positions (more expensive).

7. **Canceling Old API Calls**

   - Use **AbortController** in Fetch or cancellation in Axios.
   - Only keep the latest request result.

8. **Does React use Promise.allSettled()?**

   - React itself doesn’t internally use it for rendering, but in Suspense/data fetching scenarios, batching parallel promises is common.

9. **Array.prototype.sort() Algorithm**

   - Uses **Timsort** (V8 engine).
   - `[1, null, 5, 2, undefined].sort()` → `[1, 2, 5, null, undefined]` (null/undefined get coerced).

10. **What Happens When Hitting a URL (CRP)**

    - DNS lookup → TCP/TLS → HTTP request → Response → Parse HTML → CSSOM + DOM → Render Tree → Layout → Paint → Composite.
    - CRP: Optimizing this path for faster load.

11. **Loading Events**

    - `DOMContentLoaded` → when HTML is parsed.
    - `load` → when all assets are loaded.
    - `beforeunload` / `unload`.

12. **Prototypal vs Classical Inheritance**

    - Prototypal → JS uses prototype chains.
    - Classical → Classes/constructors simulate inheritance.

13. **JS Async Handling**

    - Callbacks, Promises, async/await.
    - Event Loop manages execution order.

14. **SOLID Principles**

    - Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

15. **OOP in JS**

    - Achieved via classes, prototypes, constructor functions.

16. **Semantic HTML**

    - Elements with meaning: `<header>`, `<main>`, `<article>`, `<footer>`.

17. **srcset in HTML**

    - Defines multiple image sources for responsive design.

18. **display: none vs visibility: hidden**

    - `display: none`: Removes from layout flow.
    - `visibility: hidden`: Element occupies space but is invisible.

19. **Common Performance Qs**

    - Lazy load, minification, CDN, caching, compression.

20. **new Operator**

    - Creates new object, links it to prototype, binds `this`.

21. **Webpack Build Process**

    - Entry → Loaders → Plugins → Bundle → Output.

22. **App Architecture for Multi-Device**

    - Responsive UI, adaptive images, API versioning.

23. **HTTP Headers**

    - Metadata for requests/responses (e.g., `Content-Type`, `Authorization`).

24. **Render-Blocking Resources**

    - CSS/JS that delay page rendering (solutions: async/defer, critical CSS).

25. **Event Capturing vs Bubbling vs Delegation**

    - Capturing → Top-down.
    - Bubbling → Bottom-up.
    - Delegation → Single listener on parent.

26. **Arrow Functions and `this`**

    - Cannot bind `this`.
    - Cannot be used with `new` (no prototype).

27. **Map vs Object**

    - Map → preserves order, allows non-string keys.
    - Object → string/symbol keys only.

28. **Closures, Event Loop, Hoisting, Currying**

    - Closures: Retains outer scope.
    - Event Loop: Async queue handling.
    - Hoisting: Vars/functions moved up.
    - Currying: Breaking function args into multiple calls.

29. **Web Core Vitals**

    - LCP, FID, CLS.
    - Improve via lazy load, preloading, code splitting.

30. **Web Performance Metrics**
    - TTFB, FCP, LCP, CLS, TTI, FID.
