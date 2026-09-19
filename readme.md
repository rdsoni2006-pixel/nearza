# Nearza

**A frontend-only local marketplace for discovering and ordering products from nearby stores.**

Nearza is a static e-commerce marketplace prototype focused on connecting customers with local stores and providing a fast, modern shopping experience.

> **Your city. Your stores. Your products.**

---

## 🚀 Overview

Nearza is designed around a simple idea:

Instead of waiting days for products ordered from distant marketplaces, customers can discover products from nearby stores and get them through a local delivery experience.

The current prototype focuses on **beauty and personal-care products**, while the architecture is designed to support additional categories in the future.

### Current concept

* 🛍️ Browse products from local businesses
* 📍 Discover nearby stores
* ⚡ Fast local delivery concept
* 🏪 Products associated with individual businesses
* 🛒 Persistent shopping cart
* ❤️ Wishlist
* 👀 Recently viewed products
* 👤 Customer profile
* 📦 Saved delivery addresses
* 🧾 Checkout flow
* 🏷️ Seller matching
* 📋 Order history
* 🔄 Reorder functionality
* ⭐ Product reviews
* 📱 Responsive desktop and mobile interface

---

## 🛠️ Tech Stack

Nearza currently uses only frontend technologies:

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **LocalStorage**
* **Git & GitHub**

There is currently:

* ❌ No backend
* ❌ No database
* ❌ No API
* ❌ No real authentication
* ❌ No real payment gateway
* ❌ No seller dashboard
* ❌ No real inventory system
* ❌ No real delivery tracking

The project is intentionally being developed as a **frontend-first MVP**.

---

## 📁 Project Structure

```text
nearza/
│
├── index.html
├── product.html
├── script.js
├── businesses.js
├── availability.js
├── style.css
├── PROJECT_CONTEXT.md
│
├── account.html
├── account.js
│
├── images/
│   ├── categories/
│   └── product/
│
└── pages/
    ├── business.html
    ├── cart.html
    ├── cart.js
    ├── checkout.html
    ├── checkout.js
    ├── order.html
    ├── order.js
    ├── orders.html
    ├── orders.js
    ├── products.html
    ├── wishlist.html
    └── wishlist.js
```

---

## ✨ Features

### Product Discovery

Users can:

* Browse the product catalog
* Search for products
* Filter by category
* Sort products
* Open individual product pages
* View related products
* View product descriptions and seller information

---

### 🏪 Local Business Discovery

Products are associated with local businesses through a `businessId`.

Businesses contain information such as:

* Business name
* Location
* Rating
* Opening hours
* Verification status
* Delivery information

Users can open dedicated business profile pages.

---

### 🛒 Shopping Cart

The cart supports:

* Adding products
* Removing products
* Updating quantities
* Persistent cart state
* Cart totals
* Availability validation
* Seller-aware cart handling

Cart data is stored locally using:

```text
nearzaCart
```

---

### ❤️ Wishlist

Users can save products to a persistent wishlist.

Wishlist data is stored using:

```text
nearzaWishlist
```

Wishlist controls are available from product cards and product detail pages.

---

### 👀 Recently Viewed

Nearza tracks recently viewed products.

The system:

* Keeps products newest-first
* Prevents duplicates
* Limits the list to 8 products
* Persists the list between sessions

Storage key:

```text
nearzaRecentlyViewed
```

---

### 👤 Customer Account

The account system currently works entirely on the frontend.

Customer information can include:

* Name
* Phone number
* Email
* Saved addresses
* Selected/default address

Storage key:

```text
nearzaCustomer
```

---

### 📍 Saved Addresses

Customers can:

* Add addresses
* Edit addresses
* Delete addresses
* Select a default address
* Reuse saved addresses during checkout
* Save a new checkout address to their account

---

### 🏷️ Seller Matching

Nearza uses product/business relationships and demo availability data to simulate seller matching.

The checkout flow:

1. Reads the products in the cart
2. Checks product availability
3. Identifies eligible businesses
4. Handles single-business and mixed-business carts
5. Allows the customer to continue once seller requirements are satisfied

This is currently a **frontend simulation**, not a real marketplace fulfillment system.

---

### 💳 Checkout

The checkout experience includes:

* Customer information
* Saved-address selection
* New-address entry
* Someone-else delivery flow
* Seller matching
* Payment selection
* Order validation
* Order confirmation

Payment is currently simulated.

---

### 📦 Orders

Orders are stored locally after successful checkout.

The system supports:

* Order creation
* Order history
* Individual order details
* Customer/address snapshots
* Product snapshots
* Business snapshots
* Order totals
* Order status timeline
* Reordering

Orders are stored using:

```text
nearzaOrders
```

Current demo order lifecycle:

```text
Pending
   ↓
Accepted
   ↓
Preparing
   ↓
Ready
   ↓
Completed
```

New orders start at **Pending** and do not automatically progress.

---

### ⭐ Reviews

Product reviews are stored locally using:

```text
nearzaReviews
```

Reviews are currently frontend-only and are not connected to a backend database.

---

## 💾 LocalStorage Architecture

Nearza currently uses browser `localStorage` for persistence.

| Key                    | Purpose                        |
| ---------------------- | ------------------------------ |
| `nearzaCart`           | Shopping cart                  |
| `nearzaReviews`        | Product reviews                |
| `nearzaOrders`         | Order history                  |
| `nearzaCustomer`       | Customer profile and addresses |
| `nearzaWishlist`       | Wishlist                       |
| `nearzaRecentlyViewed` | Recently viewed products       |

Because the application is frontend-only, this data belongs to the browser being used.

---

## 🧩 Product Model

Products currently follow this general structure:

```javascript
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

Products are connected to businesses through:

```javascript
businessId
```

This allows the marketplace architecture to associate products with individual local stores.

---

## 📦 Availability System

Nearza contains a demo availability system using `availability.js`.

Availability records include information such as:

```javascript
{
    businessId: "glow-beauty-store",
    productId: 1,
    available: true,
    stockQuantity: 18
}
```

Products can be classified as:

```text
IN_STOCK
LOW_STOCK
OUT_OF_STOCK
```

Availability is checked when adding products to the cart and again during checkout.

---

## 🖥️ Running the Project

Nearza does not currently require a build system or package manager.

You can run it using a local development server.

For example, with VS Code:

1. Open the Nearza folder.
2. Open `index.html`.
3. Start **Live Server**.
4. Open the local URL provided by Live Server.

Alternatively, the project can be served using a simple local HTTP server.

---

## 🧪 Current Development Status

Nearza currently has a functional frontend marketplace flow covering:

```text
Homepage
   ↓
Product Discovery
   ↓
Product Details
   ↓
Cart
   ↓
Checkout
   ↓
Seller Matching
   ↓
Payment Simulation
   ↓
Order Creation
   ↓
Order History
   ↓
Order Details
   ↓
Reorder
```

Additional supporting features include:

```text
Account
Saved Addresses
Wishlist
Recently Viewed
Reviews
Business Profiles
Availability
Responsive UI
```

The current implementation is intended as a **frontend MVP/prototype**, not a production marketplace.

---

## 🔮 Future Development

Potential future development areas include:

### Marketplace

* More product categories
* More local businesses
* Better business discovery
* Location-based store discovery
* More advanced search and filtering

### Customer Experience

* Improved personalization
* Better recommendations
* Improved checkout experience
* Mobile-first refinements
* More detailed order tracking

### Seller Experience

* Seller dashboard
* Product management
* Inventory management
* Order management
* Seller notifications

### Backend

A future backend could introduce:

* Authentication
* Database
* Real customer accounts
* Real inventory
* Real seller accounts
* Real order processing
* Payment gateway integration
* Delivery management
* APIs
* Real-time order status

These are **not currently implemented**.

---

## ⚠️ Important Project Limitations

Nearza is currently a frontend prototype.

The following functionality is simulated:

* Seller matching
* Payment
* Inventory
* Order fulfillment
* Delivery
* Authentication

Data stored in `localStorage` is not shared between users or devices.

There is also no real mechanism yet for:

* Reserving inventory
* Deducting stock after an order
* Assigning riders
* Processing real payments
* Authenticating customers
* Managing stores from a server
* Synchronizing marketplace data

---

## 🎯 Project Goal

The long-term goal of Nearza is to explore a local marketplace model where customers can discover products from stores in their city and receive them much faster than through traditional long-distance e-commerce.

The current project focuses on building and validating the **customer-side marketplace experience first** before introducing backend infrastructure.

---

## 📌 Development Philosophy

Nearza is being developed incrementally.

The current priority is:

```text
Frontend
   ↓
User Experience
   ↓
Marketplace Logic
   ↓
Validation & Testing
   ↓
Backend Architecture
   ↓
Production Infrastructure
```

Backend development will be introduced only after the frontend marketplace experience is sufficiently complete and tested.

---

## 📄 Project Documentation

`PROJECT_CONTEXT.md` contains the detailed technical and development context of the project, including:

* Architecture
* File structure
* Data models
* LocalStorage keys
* Routes
* Business logic
* Order flow
* Current limitations
* Verification status
* Development history

It is intended primarily as **development/AI-agent context**, while this README provides the public-facing overview of the project.

---

## 👨‍💻 Status

**Nearza — Frontend Marketplace MVP**

Built with:

**HTML • CSS • JavaScript • LocalStorage**

The project is actively evolving toward a more complete local-commerce marketplace experience.
