# Nearza Project Context

LAST UPDATED: 2026-09-18

This document reflects the actual final state of the project in the current workspace, including the frontend-only order system, customer account flow, saved-address management, cart-based seller matching, wishlist, recently viewed products, order history pages, order detail page, and reorder flow.

## 1. Project overview

Nearza is a static front-end marketplace prototype for beauty products. It combines local discovery, product browsing, cart management, checkout simulation, and browser-persisted order history in a demo-only workflow.

The project remains entirely client-side. It does not include a backend API, database layer, real payment service, seller dashboard, or fulfillment system.

## 2. Current project structure

```text
nearza/
├── index.html
├── product.html
├── script.js
├── businesses.js
├── availability.js
├── style.css
├── PROJECT_CONTEXT.md
├── images/
│   ├── categories/
│   │   ├── fragrance.jpg
│   │   ├── grooming.jpg
│   │   ├── haircare.jpg
│   │   ├── makeup.jpg
│   │   └── skincare.jpg
│   └── product/
│       ├── Bella Vita CEO Man Eau De Parfum.webp
│       ├── Beardo Hair Growth Oil.jpg
│       ├── Bombai Shaving Company Shaving Cream.webp
│       ├── Dove Daily Shine Shampoo.jpg
│       ├── Engage L'amante Eau De Parfum.jpg
│       ├── Garnier Men Acno Fight Face Wash.jpg
│       ├── Lakmé Absolute Matte Melt Liquid Lip Color.webp
│       ├── Lakmé Eyeconic Kajal.webp
│       ├── Lakmé Sun Expert SPF 50 PA+++.jpg
│       ├── Mamaearth Ubtan Face Wash.jpg
│       ├── Maybelline New York Colossal Mascara.jpg
│       ├── NIVEA Men Oil Control Face Wash.jpg
│       ├── Nourishing Hair Conditioner.jpg.webp
│       ├── Parachute Advansed Coconut Hair Oil.webp
│       ├── TRESemmé Keratin Smooth Conditione.webp
│       ├── Vaseline Intensive Care Deep Restore Lotio.webp
│       ├── moisturizer.jpg
│       ├── shampoo.webp
│       ├── sunscreen.jpg
│       └── vitamin-c-face-serum.jpg
├── account.html
├── account.js
├── pages/
│   ├── business.html
│   ├── cart.html
│   ├── cart.js
│   ├── checkout.html
│   ├── checkout.js
│   ├── order.html
│   ├── orders.html
│   ├── orders.js
│   ├── order.js
│   ├── products.html
│   ├── wishlist.html
│   └── wishlist.js
└── README.md (if present in a different branch, not part of the current workspace)
```

### Main files

- `index.html`: Home page for the local beauty marketplace.
- `product.html`: Product detail page with reviews and seller information.
- `pages/products.html`: Catalog page with search, category filter, and sorting.
- `pages/business.html`: Business profile page with business metadata and product list.
- `pages/cart.html`: Cart summary and item editing page.
- `pages/checkout.html`: Checkout form, seller matching, payment selection, and confirmation display.
- `pages/wishlist.html`: Browser-local wishlist page.
- `pages/wishlist.js`: Wishlist rendering and removal behavior.
- `pages/orders.html`: Browser-local order history page.
- `pages/order.html`: Order detail page with status timeline and reorder action.
- `script.js`: Shared product catalog, cart, routing, reviews, business rendering, customer profile helper logic, and order helper logic.
- `businesses.js`: In-memory business registry.
- `availability.js`: Demo business/product stock availability layer.
- `account.html`: Customer profile and saved-address management page.
- `account.js`: Profile editing, address save/edit/delete, and selected-address logic.
- `pages/cart.js`: Cart-specific rendering and quantity controls.
- `pages/checkout.js`: Checkout validation, confirm-save flow, and order creation.
- `pages/orders.js`: Order history rendering from `nearzaOrders`.
- `pages/order.js`: Order detail rendering, status timeline, and reorder logic.
- `style.css`: Shared styling for the storefront, account, checkout, wishlist, and order UI.

## 3. Completed features

The final implementation includes all of the following:

- Homepage storefront with categories, business discovery, and product cards.
- Search, category filtering, and sorting on the catalog page.
- Product detail rendering and related-product recommendations.
- Add-to-cart behavior from multiple entry points.
- Browser-persistent cart using `nearzaCart`.
- Checkout validation for address and recipient requirements.
- Seller selection simulation and payment option flow.
- Frontend-only order creation into `nearzaOrders`.
- Order confirmation using the actual saved order record.
- Order history page displaying newest orders first.
- Order details page with customer, item, summary, and timeline data.
- Reorder flow that validates current availability and adds only available items.
- Responsive styling for desktop and mobile layouts.
- Local review persistence in `nearzaReviews`.
- Customer account profile with name, phone, and email stored in `nearzaCustomer`.
- Saved delivery addresses with select, edit, delete, and reuse logic for checkout.
- Checkout saved-address integration with a quick-select UI and optional “save to account” checkbox.
- Cart-based seller matching using product `businessId`, the business registry, and availability validation.
- Persistent wishlist controls on product cards and product detail, plus a dedicated wishlist page.
- Recently viewed product tracking, newest-first, deduplicated, and capped at eight products.

## 4. Current architecture

The project remains a static multi-page vanilla JavaScript application.

### Architectural pattern

- `script.js` contains shared storefront and order logic used across pages.
- `businesses.js` defines static store metadata.
- `availability.js` stores demo inventory records separate from products.
- `pages/cart.js` handles cart page rendering.
- `pages/checkout.js` handles checkout validation and order persistence.
- `pages/orders.js` and `pages/order.js` manage order list and detail screens.
- `localStorage` is used for cart, reviews, orders, customer data, wishlist, and recently viewed products instead of an API.
- `nearzaCustomer` stores the current customer profile and saved-address records.
- No build system or package manifest is present.

### Important data relationships

- Products belong to businesses through `product.businessId`.
- Business names are resolved through `getBusinessById(product.businessId)`.
- Stock checks are performed through `availability.js` by `businessId` and `productId`.
- Orders persist a snapshot of each item with `productId`, `name`, `image`, `price`, `quantity`, `businessId`, and `businessName`.
- `nearzaOrders` stores the complete order history as a JSON array.
- Cart items are separate from order snapshots so order records remain stable even if product data changes later.

## 5. Current business and product model

### Product model

The product catalog contains 20 products. Each product object includes:

```js
{
  id: Number,
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String,
  businessId: String,
  gender: String,
  delivery: String
}
```

### Business model

The business registry contains static local stores such as:

- Glow Beauty Store
- Silk & Shine Hair Studio

Each business exposes metadata such as name, city, location, rating, hours, verified label, and delivery info.

## 6. Availability and inventory behavior

Availability remains a front-end demo model and is not a real backend inventory system.

The stock layer in `availability.js` contains records like:

```js
{
  businessId: "glow-beauty-store",
  productId: 1,
  available: true,
  stockQuantity: 18
}
```

The actual logic is:

- `IN_STOCK`: available and stock quantity above 5
- `LOW_STOCK`: available and stock quantity 1–5
- `OUT_OF_STOCK`: unavailable or quantity 0

The UI blocks add-to-cart when stock is unavailable, and checkout validates the cart again before order creation.

## 7. localStorage keys

Actual browser keys in the current project:

- `nearzaCart`: cart entries with product data plus `quantity`
- `nearzaReviews`: product review data keyed by product ID
- `nearzaOrders`: persisted order history array
- `nearzaCustomer`: customer profile record containing `name`, `phone`, `email`, `selectedAddressId`, and `addresses`
- `nearzaWishlist`: deduplicated array of saved product IDs
- `nearzaRecentlyViewed`: newest-first deduplicated array of recently opened product IDs, capped at eight records

There is no real API persistence, authentication state, or server-backed inventory.

## 8. Routes and pages

### Root pages

- `/index.html` — homepage
- `/product.html?id=<id>` — product detail page

### Page directory routes

- `/pages/products.html` — catalog page
- `/pages/business.html?id=<businessId>` — business profile page
- `/pages/cart.html` — cart page
- `/pages/checkout.html` — checkout page
- `/pages/orders.html` — order history page
- `/pages/order.html?id=<orderId>` — order detail page
- `/account.html` — customer account and saved address management page

### Route behavior

- Search routes to the catalog page with `search=<query>`.
- Category cards route to `products.html?category=<category>`.
- Product cards route to `product.html?id=<id>`.
- Business cards route to `business.html?id=<businessId>`.
- Order cards route to `order.html?id=<orderId>`.
- Header and account links route to `account.html` for customer information and saved addresses.
- Account navigation links to `/pages/wishlist.html`.

### Customer account and saved addresses

The final implementation includes a frontend-only customer account flow.

- The profile is stored in `nearzaCustomer` as a single JSON object.
- The profile stores `name`, `phone`, `email`, `selectedAddressId`, and `addresses`.
- Address records include `id`, `label`, `fullName`, `phone`, `address`, `city`, `pincode`, and optional `landmark`.
- The account page lets users update profile details, add/save addresses, edit and delete them, and choose a default selected address.
- Checkout displays the saved addresses and lets the user reuse a saved location, while keeping the more basic checkout validation path intact.
- Saving a currently entered address via the checkout checkbox stores it into the same localStorage-backed profile structure.
- New manual checkout addresses receive a new ID and do not overwrite the selected saved address; practical duplicates are updated instead of duplicated.

### Seller matching

- Checkout loads the existing `availability.js` module and validates every cart line before seller matching.
- Seller candidates are the available businesses referenced by the cart products’ `businessId` values.
- A single-business cart shows that matching seller; a mixed-business cart shows all matching businesses together.
- Continuing from the seller result stores the selected business IDs in checkout state and unlocks payment.
- Orders continue to preserve per-item business snapshots through `buildOrderFromCart`.

## 9. Order behavior in the current implementation

The project now includes a persistent frontend-only order system.

### Order creation

When checkout succeeds, the app:

1. validates the cart is not empty
2. validates all current cart items against current availability
3. reads the current `nearzaCart`
4. builds a snapshot order object
5. preserves product and business information
6. computes subtotal, delivery fee, and total
7. saves the new order to `nearzaOrders`
8. clears `nearzaCart` only after the save succeeds
9. shows the confirmation UI using the saved order data

### Order statuses

The order status system uses:

- Pending
- Accepted
- Preparing
- Ready
- Completed

Newly created orders start as `Pending`. The app does not move them automatically through the later stages.

### Order details and history

- `pages/orders.html` displays all orders newest first.
- `pages/order.html?id=<orderId>` renders the selected order.
- The detail page shows order information, customer information, order items, summary, and a status timeline.
- The order details page also includes a reorder action that adds only currently available products to the cart with stock-aware limits.

## 10. Important constraints and intentional deferrals

The project remains intentionally limited to a frontend prototype.

### Current constraints

- No backend or API exists.
- No real payment flow exists.
- No seller dashboard or admin dashboard exists.
- No real inventory reservation or stock deduction occurs.
- No rider, delivery fleet, or real-time tracking exists.
- All order management is browser-local.

### Features intentionally deferred

- server-backed checkout integration
- firebase/supabase backend
- seller or admin portal
- real inventory synchronization
- real delivery tracking
- real order fulfillment

## 11. Latest completed milestone

The current milestone is the frontend-only customer and marketplace UX feature set layered on top of the order lifecycle.

This includes:

- persistent order storage in `nearzaOrders`
- checkout-time availability validation before order creation
- successful cart clearing only after a valid order save
- order history and order detail pages
- order status timeline UI
- reorder flow with stock-aware cart restoration
- navigation links to the new order pages from storefront and in-page layouts
- customer profile and saved-address reuse in checkout
- cart-based seller matching and seller confirmation state
- persistent wishlist and recently viewed products
- shared wishlist controls across product cards and product detail

This remains a prototype and is intentionally not wired to a backend or real commerce infrastructure.

## 12. Important development notes

- The cart key remains `nearzaCart` and is not renamed.
- Order creation does not clear the cart when validation fails.
- Order IDs are generated in the browser and are formatted in a Nearza-style pattern such as `NZ-XXXXXXXX`.
- Missing or invalid order IDs show a clean error state instead of raw `undefined` values.
- The order timeline reflects the current order status and does not simulate fake progress beyond the UI state.
- The project is still a static HTML/CSS/JS app with no framework or build step.

## 13. Current known limitations

- Order statuses are purely front-end state and are not persisted by a real backend.
- Reorder logic respects current published stock but does not parallel a real inventory system.
- Business and product data remain hard-coded in local JavaScript arrays.
- The project has no real authentication or server-backed user profile layer.
- Seller matching is a frontend simulation based on static business and availability records; it does not reserve stock or contact a real seller.
- Payment remains a simulated choice; no payment provider is integrated.

## 14. Feature history

1. Static storefront and catalog creation
2. Product detail and reviews
3. Shoppable cart and checkout prototype
4. Business discovery and business-specific availability
5. Persistent frontend order history, order details, reorder logic, and checkout validation
6. Customer profile, saved addresses, wishlist, recently viewed, and marketplace UX polish

## 15. Verification performed

- JavaScript syntax checks passed for `script.js`, `account.js`, `pages/checkout.js`, and `pages/wishlist.js` using `node --check`.
- Editor diagnostics reported no errors for the modified JavaScript files.
- Browser preview was run from a local Node static server at `http://localhost:8000`.
- Account address save was verified, including display and selected-address state.
- Checkout reused the saved address for Myself, matched Glow Beauty Store from the cart, opened payment, created a Pending order, and cleared `nearzaCart`.
- Orders history and Order Detail were verified for the created order, including customer address, item business snapshot, totals, and Pending timeline state.
- A second manual checkout address saved through the checkbox created a second saved address without overwriting the first and produced a second successful order.
- Someone else recipient state was verified with different recipient details and Cash on Delivery disabled.
- Invalid checkout with no saved address blocked seller matching with a useful missing-address message.
- Mixed-business cart matching displayed both existing available businesses from the cart.
- Wishlist was verified from product detail, persisted across page navigation, rendered on the wishlist page, and removed successfully through the heart control.
- Recently viewed was verified across three product detail pages, persisted across refresh, remained newest-first, and deduplicated a repeated product.
- Homepage product cards rendered wishlist controls with the saved state reflected after refresh.

The final source of truth remains the current code in the workspace rather than any earlier documentation or plans.

