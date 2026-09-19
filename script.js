console.log("MAIN SCRIPT LOADED");
// =========================================
// NEARZA PRODUCT DATA
// =========================================

const products = [
    {
        id: 1,
        name: "Vitamin C Face Serum",
        category: "skincare",
        price: 299,
        description: "Brightening vitamin C serum",
        image: "images/product/vitamin-c-face-serum.jpg",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 2,
        name: "Hydrating Moisturizer",
        category: "skincare",
        price: 449,
        description: "Lightweight daily moisturizer",
        image: "images/product/moisturizer.jpg",
        businessId: "glow-beauty-store",
        gender: "unisex",
        delivery: "1–2 hrs"
    },

    {
        id: 3,
        name: "Daily Sunscreen SPF 50",
        category: "skincare",
        price: 599,
        description: "Lightweight UV protection",
        image: "images/product/sunscreen.jpg",
        businessId: "glow-beauty-store",
        gender: "unisex",
        delivery: "1–2 hrs"
    },

        {
        id: 4,
        name: "Daily Care Shampoo",
        category: "haircare",
        price: 379,
        description: "Gentle everyday hair care",
        image: "images/product/shampoo.webp",
        businessId: "glow-beauty-store",
        gender: "unisex",
        delivery: "1–2 hrs"
    },

    {
        id: 5,
        name: "Nourishing Hair Conditioner",
        category: "haircare",
        price: 329,
        description: "Softening daily hair care",
        image: "images/product/nourishing-hair-conditioner.jpg.webp",
        businessId: "silk-shine-hair-studio",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 6,
        name: "Mamaearth Ubtan Face Wash",
        category: "skincare",
        price: 249,
        description: "Turmeric and saffron face cleanser",
        image: "images/product/mama-earth-ubtan-face-wash.jpg",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 7,
        name: "Lakmé Sun Expert SPF 50 PA+++",
        category: "skincare",
        price: 399,
        description: "Lightweight daily sun protection",
        image: "images/product/Lakmé Sun Expert SPF 50 PA+++.jpg",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 8,
        name: "Vaseline Intensive Care Deep Restore Lotion",
        category: "skincare",
        price: 275,
        description: "Deep moisturisation for dry skin",
        image: "images/product/Vaseline Intensive Care Deep Restore Lotio.webp",
        businessId: "glow-beauty-store",
        gender: "unisex",
        delivery: "1–2 hrs"
    },

    {
        id: 9,
        name: "Garnier Men Acno Fight Face Wash",
        category: "grooming",
        price: 225,
        description: "Daily face wash for oily and acne-prone skin",
        image: "images/product/Garnier Men Acno Fight Face Wash.jpg",
        businessId: "silk-shine-hair-studio",
        gender: "men",
        delivery: "1–2 hrs"
    },

    {
        id: 10,
        name: "NIVEA Men Oil Control Face Wash",
        category: "grooming",
        price: 249,
        description: "Charcoal face wash for a fresh clean",
        image: "images/product/NIVEA Men Oil Control Face Wash.jpg",
        businessId: "silk-shine-hair-studio",
        gender: "men",
        delivery: "1–2 hrs"
    },

    {
        id: 11,
        name: "Beardo Hair Growth Oil",
        category: "grooming",
        price: 399,
        description: "Nourishing hair oil for everyday grooming",
        image: "images/product/Beardo Hair Growth Oil.jpg",
        businessId: "silk-shine-hair-studio",
        gender: "men",
        delivery: "1–2 hrs"
    },

    {
        id: 12,
        name: "Bombay Shaving Company Shaving Cream",
        category: "grooming",
        price: 299,
        description: "Rich lather for a comfortable shave",
        image: "images/product/Bombay Shaving Company Shaving Cream.webp",
        businessId: "silk-shine-hair-studio",
        gender: "men",
        delivery: "1–2 hrs"
    },

    {
        id: 13,
        name: "Dove Daily Shine Shampoo",
        category: "haircare",
        price: 349,
        description: "Gentle shampoo for smooth, shiny hair",
        image: "images/product/Dove Daily Shine Shampoo.jpg",
        businessId: "silk-shine-hair-studio",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 14,
        name: "Parachute Advansed Coconut Hair Oil",
        category: "haircare",
        price: 199,
        description: "Classic coconut oil for everyday hair care",
        image: "images/product/Parachute Advansed Coconut Hair Oil.webp",
        businessId: "silk-shine-hair-studio",
        gender: "unisex",
        delivery: "1–2 hrs"
    },

    {
        id: 15,
        name: "TRESemmé Keratin Smooth Conditioner",
        category: "haircare",
        price: 425,
        description: "Conditioner for smoother, manageable hair",
        image: "images/product/TRESemmé Keratin Smooth Conditione.webp",
        businessId: "silk-shine-hair-studio",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 16,
        name: "Lakmé Absolute Matte Melt Liquid Lip Color",
        category: "makeup",
        price: 650,
        description: "Long-wear matte liquid lip color",
        image: "images/product/Lakmé Absolute Matte Melt Liquid Lip Color.webp",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 17,
        name: "Lakmé Eyeconic Kajal",
        category: "makeup",
        price: 225,
        description: "Smudge-resistant kajal for defined eyes",
        image: "images/product/Lakmé Eyeconic Kajal.webp",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 18,
        name: "Maybelline New York Colossal Mascara",
        category: "makeup",
        price: 499,
        description: "Volumising mascara for everyday definition",
        image: "images/product/Maybelline New York Colossal Mascara.jpg",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    },

    {
        id: 19,
        name: "Bella Vita CEO Man Eau De Parfum",
        category: "fragrance",
        price: 599,
        description: "Fresh woody fragrance for everyday wear",
        image: "images/product/Bella Vita CEO Man Eau De Parfum.webp",
        businessId: "silk-shine-hair-studio",
        gender: "men",
        delivery: "1–2 hrs"
    },

    {
        id: 20,
        name: "Engage L'amante Eau De Parfum",
        category: "fragrance",
        price: 449,
        description: "Floral fragrance for day and evening wear",
        image: "images/product/Engage L'amante Eau De Parfum.jpg",
        businessId: "glow-beauty-store",
        gender: "women",
        delivery: "1–2 hrs"
    }
];


// =========================================
// DEMO SEED REVIEWS (fallback starting data)
// =========================================

const seedReviews = {
    1: [
        { name: "Priya S.", rating: 5, text: "Noticed brighter skin within a week. Love it!" },
        { name: "Rohan K.", rating: 4, text: "Good product, delivered fast as promised." }
    ],
    2: [
        { name: "Anjali M.", rating: 5, text: "Very lightweight, doesn't feel greasy at all." }
    ],
    3: [
        { name: "Simran K.", rating: 4, text: "Works well, no white cast on skin." }
    ],
    4: [
        { name: "Amit V.", rating: 5, text: "Gentle on hair, smells great too." }
    ]
};



const assetPrefix =
    window.location.pathname.includes("/pages/")
        ? "../"
        : "";

const CUSTOMER_STORAGE_KEY = "nearzaCustomer";
const WISHLIST_STORAGE_KEY = "nearzaWishlist";
const RECENTLY_VIEWED_STORAGE_KEY = "nearzaRecentlyViewed";

function getStoredProductIds(storageKey) {
    try {
        const storedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(storedIds)
            ? storedIds.map(Number).filter(Number.isFinite)
            : [];
    } catch (error) {
        return [];
    }
}

function saveStoredProductIds(storageKey, productIds) {
    localStorage.setItem(storageKey, JSON.stringify([...new Set(productIds.map(Number))]));
}

function isProductInWishlist(productId) {
    return getStoredProductIds(WISHLIST_STORAGE_KEY).includes(Number(productId));
}

function toggleWishlistProduct(productId) {
    const normalizedProductId = Number(productId);
    const wishlist = getStoredProductIds(WISHLIST_STORAGE_KEY);
    const nextWishlist = wishlist.includes(normalizedProductId)
        ? wishlist.filter(id => id !== normalizedProductId)
        : [normalizedProductId, ...wishlist];

    saveStoredProductIds(WISHLIST_STORAGE_KEY, nextWishlist);
    return nextWishlist.includes(normalizedProductId);
}

function getWishlistButtonMarkup(product) {
    const isSaved = isProductInWishlist(product.id);

    return `
        <button
            type="button"
            class="wishlist-button ${isSaved ? "is-saved" : ""}"
            data-wishlist-id="${product.id}"
            aria-label="${isSaved ? "Remove" : "Add"} ${product.name} ${isSaved ? "from" : "to"} wishlist"
            aria-pressed="${isSaved}"
        >
            ${isSaved ? "♥" : "♡"}
        </button>
    `;
}

function attachWishlistControls(container) {
    if (!container) return;

    container.querySelectorAll(".wishlist-button").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            const productId = Number(button.dataset.wishlistId);
            const isSaved = toggleWishlistProduct(productId);
            const product = products.find(item => item.id === productId);

            button.classList.toggle("is-saved", isSaved);
            button.textContent = isSaved ? "♥" : "♡";
            button.setAttribute("aria-pressed", String(isSaved));

            if (product) {
                button.setAttribute(
                    "aria-label",
                    `${isSaved ? "Remove" : "Add"} ${product.name} ${isSaved ? "from" : "to"} wishlist`
                );
            }

            document.dispatchEvent(new CustomEvent("nearza:wishlist-changed"));
        });
    });
}

function recordRecentlyViewed(productId) {
    const normalizedProductId = Number(productId);
    const recentProducts = getStoredProductIds(RECENTLY_VIEWED_STORAGE_KEY)
        .filter(id => id !== normalizedProductId);

    saveStoredProductIds(
        RECENTLY_VIEWED_STORAGE_KEY,
        [normalizedProductId, ...recentProducts].slice(0, 8)
    );
}

function getProductCardMarkup(product, options = {}) {
    const href = options.href || `${assetPrefix}product.html?id=${product.id}`;
    const includeDeliveryBadge = options.includeDeliveryBadge !== false;

    return `
        <a class="product-card" data-product-id="${product.id}" href="${href}">
            <div class="product-image">
                ${includeDeliveryBadge ? `<span class="delivery-badge">⚡ ${product.delivery}</span>` : ""}
                ${getWishlistButtonMarkup(product)}
                <img src="${assetPrefix}${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                ${getProductAvailabilityMarkup(product)}
                ${getBusinessMarkup(product)}
                <div class="product-bottom">
                    <strong>₹${product.price}</strong>
                    <button class="add-cart" data-product-id="${product.id}" ${getAddToCartAttributes(product)}>
                        ${getAvailabilityStatus(product.businessId, product.id).canAddToCart ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </a>
    `;
}

function createEmptyCustomerProfile() {
    return {
        name: "",
        phone: "",
        email: "",
        selectedAddressId: null,
        addresses: []
    };
}

function normalizeCustomerAddress(address) {
    if (!address || typeof address !== "object") {
        return null;
    }

    const normalized = {
        id: typeof address.id === "string" && address.id ? address.id : `addr-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        label: typeof address.label === "string" ? address.label : "Home",
        fullName: typeof address.fullName === "string" ? address.fullName : "",
        phone: typeof address.phone === "string" ? address.phone : "",
        address: typeof address.address === "string" ? address.address.trim() : "",
        city: typeof address.city === "string" ? address.city.trim() : "",
        pincode: typeof address.pincode === "string" ? address.pincode.trim() : "",
        landmark: typeof address.landmark === "string" ? address.landmark : ""
    };

    if (!normalized.address || !normalized.city || !/^\d{6}$/.test(normalized.pincode)) {
        return null;
    }

    return normalized;
}

function getCustomerProfile() {
    try {
        const rawProfile = JSON.parse(localStorage.getItem(CUSTOMER_STORAGE_KEY) || "null");

        if (!rawProfile || typeof rawProfile !== "object") {
            return createEmptyCustomerProfile();
        }

        const normalizedProfile = createEmptyCustomerProfile();
        normalizedProfile.name = typeof rawProfile.name === "string" ? rawProfile.name : "";
        normalizedProfile.phone = typeof rawProfile.phone === "string" ? rawProfile.phone : "";
        normalizedProfile.email = typeof rawProfile.email === "string" ? rawProfile.email : "";
        normalizedProfile.selectedAddressId = typeof rawProfile.selectedAddressId === "string" ? rawProfile.selectedAddressId : null;

        const normalizedAddresses = Array.isArray(rawProfile.addresses)
            ? rawProfile.addresses.map(normalizeCustomerAddress).filter(Boolean)
            : [];

        normalizedProfile.addresses = normalizedAddresses;

        if (normalizedProfile.addresses.length && !normalizedProfile.addresses.some(address => address.id === normalizedProfile.selectedAddressId)) {
            normalizedProfile.selectedAddressId = normalizedProfile.addresses[0].id;
        }

        if (!normalizedProfile.addresses.length) {
            normalizedProfile.selectedAddressId = null;
        }

        return normalizedProfile;
    } catch (error) {
        return createEmptyCustomerProfile();
    }
}

function saveCustomerProfile(profile) {
    const safeProfile = {
        name: typeof profile?.name === "string" ? profile.name : "",
        phone: typeof profile?.phone === "string" ? profile.phone : "",
        email: typeof profile?.email === "string" ? profile.email : "",
        selectedAddressId: typeof profile?.selectedAddressId === "string" ? profile.selectedAddressId : null,
        addresses: Array.isArray(profile?.addresses)
            ? profile.addresses.map(normalizeCustomerAddress).filter(Boolean)
            : []
    };

    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(safeProfile));
    return safeProfile;
}

function getSelectedSavedAddress() {
    const profile = getCustomerProfile();

    if (!profile.addresses.length) {
        return null;
    }

    if (profile.selectedAddressId) {
        return profile.addresses.find(address => address.id === profile.selectedAddressId) || profile.addresses[0];
    }

    return profile.addresses[0];
}

function setSelectedSavedAddress(addressId) {
    const profile = getCustomerProfile();

    profile.selectedAddressId = profile.addresses.some(address => address.id === addressId)
        ? addressId
        : profile.addresses[0]?.id || null;

    saveCustomerProfile(profile);
    return profile;
}

function createAddressRecord(data) {
    const safeData = data || {};
    const address = {
        id: typeof safeData.id === "string" && safeData.id ? safeData.id : `addr-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        label: typeof safeData.label === "string" && safeData.label ? safeData.label : "Home",
        fullName: typeof safeData.fullName === "string" ? safeData.fullName : "",
        phone: typeof safeData.phone === "string" ? safeData.phone : "",
        address: typeof safeData.address === "string" ? safeData.address.trim() : "",
        city: typeof safeData.city === "string" ? safeData.city.trim() : "",
        pincode: typeof safeData.pincode === "string" ? safeData.pincode.trim() : "",
        landmark: typeof safeData.landmark === "string" ? safeData.landmark.trim() : ""
    };

    if (!address.address || !address.city || !/^\d{6}$/.test(address.pincode)) {
        return null;
    }

    return address;
}

function addAddressToCustomer(data) {
    const profile = getCustomerProfile();
    const address = createAddressRecord(data);

    if (!address) {
        return { success: false, profile };
    }

    const addressFingerprint = [
        address.address.toLowerCase(),
        address.city.toLowerCase(),
        address.pincode,
        address.fullName.toLowerCase(),
        address.phone
    ].join("|");

    const existingAddressIndex = profile.addresses.findIndex(item => {
        if (item.id === address.id) return true;

        return [
            item.address.toLowerCase(),
            item.city.toLowerCase(),
            item.pincode,
            item.fullName.toLowerCase(),
            item.phone
        ].join("|") === addressFingerprint;
    });

    if (existingAddressIndex >= 0) {
        profile.addresses[existingAddressIndex] = address;
    } else {
        profile.addresses.push(address);
    }

    profile.selectedAddressId = address.id;
    saveCustomerProfile(profile);

    return { success: true, profile, address };
}

function updateCustomerProfileFields(data) {
    const profile = getCustomerProfile();
    profile.name = typeof data?.name === "string" ? data.name.trim() : profile.name;
    profile.phone = typeof data?.phone === "string" ? data.phone.trim() : profile.phone;
    profile.email = typeof data?.email === "string" ? data.email.trim() : profile.email;
    return saveCustomerProfile(profile);
}

function deleteCustomerAddress(addressId) {
    const profile = getCustomerProfile();
    const filteredAddresses = profile.addresses.filter(address => address.id !== addressId);
    profile.addresses = filteredAddresses;

    if (profile.selectedAddressId === addressId) {
        profile.selectedAddressId = filteredAddresses[0]?.id || null;
    }

    saveCustomerProfile(profile);
    return profile;
}

function getBusinessPageUrl(businessId) {
    const businessPage =
        window.location.pathname.includes("/pages/")
            ? "business.html"
            : "pages/business.html";

    return `${businessPage}?id=${encodeURIComponent(businessId)}`;
}

function renderBusinessDiscovery(container) {
    if (!container) return;

    if (typeof businesses === "undefined" || !businesses.length) {
        container.innerHTML = `
            <div class="business-discovery-empty">
                No local businesses are available right now.
            </div>
        `;
        return;
    }

    container.innerHTML = businesses.map(business => {
        const productCount = products.filter(product =>
            product.businessId === business.id
        ).length;

        const verification = business.verifiedLabel
            ? `<span class="business-card-badge">${business.verifiedLabel}</span>`
            : "";

        const type = business.businessType
            ? `<p class="business-card-type">${business.businessType}</p>`
            : "";

        const rating = business.rating !== undefined
            ? `<span>⭐ ${business.rating}</span>`
            : "";

        const distance = business.distance
            ? `<span>📍 ${business.distance}</span>`
            : "";

        const location = [business.city, business.location]
            .filter(Boolean)
            .join(" · ");

        const hours = business.openingTime && business.closingTime
            ? `${business.openingTime} – ${business.closingTime}`
            : business.openingTime || business.closingTime || "";

        return `
            <a
                class="business-card"
                href="${getBusinessPageUrl(business.id)}"
            >
                <div class="business-card-header">
                    <span class="business-card-icon" aria-hidden="true">🏪</span>
                    <div>
                        <h3>${business.name}</h3>
                        ${type}
                    </div>
                </div>

                ${verification}

                <div class="business-card-meta">
                    ${rating}
                    ${distance}
                </div>

                ${location ? `<p class="business-card-location">${location}</p>` : ""}

                <div class="business-card-footer">
                    <span>${productCount} product${productCount === 1 ? "" : "s"}</span>
                    ${hours ? `<span>${hours}</span>` : ""}
                </div>

                <span class="business-card-action">View Store →</span>
            </a>
        `;
    }).join("");
}

renderBusinessDiscovery(
    document.querySelector("#homepage-businesses")
);

renderBusinessDiscovery(
    document.querySelector("#catalog-businesses")
);



// =========================================
// CART
// =========================================

let cart = JSON.parse(
    localStorage.getItem("nearzaCart")
) || [];

function getStoredOrders() {
    try {
        const orders = JSON.parse(
            localStorage.getItem("nearzaOrders")
        );

        return Array.isArray(orders) ? orders : [];
    } catch (error) {
        return [];
    }
}

function saveStoredOrders(orders) {
    localStorage.setItem(
        "nearzaOrders",
        JSON.stringify(orders)
    );
}

function getOrderStatusSequence() {
    return [
        "Pending",
        "Accepted",
        "Preparing",
        "Ready",
        "Completed"
    ];
}

function getOrderStatusIndex(status) {
    const sequence = getOrderStatusSequence();
    const label = status || "Pending";
    const index = sequence.indexOf(label);

    return index >= 0 ? index : 0;
}

function getOrderStatusClass(status) {
    return (status || "Pending")
        .toLowerCase()
        .replace(/\s+/g, "-");
}

function formatOrderDate(dateValue) {
    if (!dateValue) {
        return "Unknown date";
    }

    const parsedDate = new Date(dateValue);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Unknown date";
    }

    return parsedDate.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function getCartTotals(items) {
    const subtotal = (items || []).reduce(
        (total, item) => total + (Number(item.price || 0) * Number(item.quantity || 0)),
        0
    );

    const deliveryFee = subtotal > 0 ? 40 : 0;
    const total = subtotal + deliveryFee;

    return {
        subtotal,
        deliveryFee,
        total
    };
}

function buildOrderItemSnapshot(cartItem) {
    const productId = Number(cartItem.id);
    const product = products.find(item => item.id === productId);
    const business = product ? getBusinessById(product.businessId) : null;

    return {
        productId,
        name: product ? product.name : (cartItem.name || "Product"),
        image: product ? product.image : (cartItem.image || ""),
        price: Number(product ? product.price : (cartItem.price || 0)),
        quantity: Number(cartItem.quantity || 0),
        businessId: product ? product.businessId : (cartItem.businessId || ""),
        businessName: business ? business.name : (cartItem.businessName || "Local store")
    };
}

function buildOrderFromCart(cartItems, customerInfo, paymentMethod) {
    const items = (cartItems || []).map(buildOrderItemSnapshot);
    const totals = getCartTotals(items);

    return {
        id: "NZ-" + Date.now().toString() + Math.random().toString(36).slice(2, 6).toUpperCase(),
        createdAt: new Date().toISOString(),
        customer: {
            name: customerInfo.name || "",
            phone: customerInfo.phone || "",
            address: customerInfo.address || "",
            city: customerInfo.city || "",
            pincode: customerInfo.pincode || ""
        },
        items,
        subtotal: totals.subtotal,
        deliveryFee: totals.deliveryFee,
        total: totals.total,
        paymentMethod: paymentMethod || "Online Payment",
        status: "Pending"
    };
}


// =========================================
// CART STORAGE
// =========================================

function saveCart() {

    localStorage.setItem(
        "nearzaCart",
        JSON.stringify(cart)
    );

}


// =========================================
// CART COUNT
// =========================================

function updateCartCount() {

    const cartCount =
        document.querySelector(".cart-count");

    if (!cartCount) return;


    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    cartCount.textContent = totalItems;

}


// =========================================
// ADD PRODUCT TO CART
// =========================================

function getBusinessMarkup(product) {
    const business =
        getBusinessById(product.businessId);

    if (!business) return "";

    return `
        <div class="product-business-row">
            <span class="product-business-label">From</span>
            <button
                type="button"
                class="product-business-link"
                data-business-id="${business.id}"
            >
                ${business.name}
            </button>
            <span class="product-business-meta">
                · ⭐ ${business.rating} · ${business.distance}
            </span>
        </div>
    `;
}

function getProductAvailabilityMarkup(product) {
    const availability =
        getAvailabilityStatus(product.businessId, product.id);

    const statusClass =
        availability.status.toLowerCase().replace("_", "-");

    return `
        <span
            class="product-availability product-availability-${statusClass}"
            aria-label="${availability.label}"
        >
            ${availability.label}
        </span>
    `;
}

function getAddToCartAttributes(product) {
    const availability =
        getAvailabilityStatus(product.businessId, product.id);

    return availability.canAddToCart
        ? ""
        : "disabled aria-disabled=\"true\"";
}

function attachBusinessLinks(container) {
    container.querySelectorAll(".product-business-link")
        .forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();

                window.location.href =
                    getBusinessPageUrl(link.dataset.businessId);
            });
        });
}

function addHomepageBusinessRows() {
    document.querySelectorAll(
        ".products-section .product-card"
    ).forEach(card => {
        const product =
            products.find(item =>
                item.id === Number(card.dataset.productId)
            );

        const description =
            card.querySelector(".product-description");

        if (!product || !description ||
            card.querySelector(".product-business-row")) {
            return;
        }

        description.insertAdjacentHTML(
            "afterend",
            getBusinessMarkup(product)
        );
    });

    attachBusinessLinks(document);
}

addHomepageBusinessRows();

function addHomepageProductAvailability() {
    document.querySelectorAll(
        ".products-section .product-card"
    ).forEach(card => {
        const product = products.find(item =>
            item.id === Number(card.dataset.productId)
        );

        if (!product || card.querySelector(".product-availability")) {
            return;
        }

        const description =
            card.querySelector(".product-description");

        if (description) {
            description.insertAdjacentHTML(
                "afterend",
                getProductAvailabilityMarkup(product)
            );
        }

        const addButton = card.querySelector(".add-cart");
        const availability =
            getAvailabilityStatus(product.businessId, product.id);

        if (addButton && !availability.canAddToCart) {
            addButton.disabled = true;
            addButton.setAttribute("aria-disabled", "true");
            addButton.textContent = "Out of Stock";
        }
    });
}

addHomepageProductAvailability();
document.querySelectorAll(".products-section .product-card").forEach(card => {
    const product = products.find(item => item.id === Number(card.dataset.productId));
    const image = card.querySelector(".product-image");

    if (product && image && !image.querySelector(".wishlist-button")) {
        image.insertAdjacentHTML("afterbegin", getWishlistButtonMarkup(product));
    }
});
attachWishlistControls(document);

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;

    const availability =
        getAvailabilityStatus(product.businessId, product.id);

    if (!availability.canAddToCart) return;


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    updateCartCount();

}


// =========================================
// HOMEPAGE ADD TO CART
// =========================================

const homepageAddButtons =
    document.querySelectorAll(".add-cart");


homepageAddButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();


        const productCard =
            button.closest(".product-card");


        if (!productCard) return;


        const productId =
            Number(
                productCard.dataset.productId
            );


        addToCart(productId);

    });

});

document.querySelectorAll(".products-section .product-card").forEach(card => {
    const openProduct = () => {
        window.location.href = `product.html?id=${card.dataset.productId}`;
    };

    card.addEventListener("click", (event) => {
            if (!event.target.closest(".add-cart, .product-business-link, .wishlist-button")) {
            openProduct();
        }
    });

    card.addEventListener("keydown", (event) => {
           if ((event.key === "Enter" || event.key === " ") && !event.target.closest(".add-cart, .product-business-link, .wishlist-button")) {
            event.preventDefault();
            openProduct();
        }
    });
});


// =========================================
// SEARCH
// =========================================

const searchInput =
    document.querySelector(".search-input");

const searchButton =
    document.querySelector(".search-button");


function performSearch() {

    if (!searchInput) return;


    const query =
        searchInput.value.trim();


    if (!query) return;
    const currentPage =
        window.location.pathname.includes("/pages/")
            ? "products.html"
            : "pages/products.html";

    window.location.href =
    `${currentPage}?search=${encodeURIComponent(query)}`;
}


// Search button

if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


// Press Enter

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


// =========================================
// PRODUCT DETAILS PAGE
// =========================================

const productDetails =
    document.querySelector("#product-details");


if (productDetails) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        Number(
            params.get("id")
        );


    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {

        productDetails.innerHTML = `

            <div class="no-products">

                <h2>Product not found</h2>

                <p>
                    Sorry, this product doesn't exist.
                </p>

            </div>

        `;

    } else {

        recordRecentlyViewed(product.id);

        productDetails.innerHTML = `

            <div class="product-detail-image">

                <img
                    src="${assetPrefix}${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-detail-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h1>
                    ${product.name}
                </h1>

                <p class="product-detail-description">
                    ${product.description}
                </p>

                ${getProductAvailabilityMarkup(product)}

                <h2 class="product-detail-price">
                    ₹${product.price}
                </h2>

                <p class="product-delivery">
                    🚚 Delivery in ${product.delivery}
                </p>

                 <div class="product-quantity">
    <span>Quantity</span>

    <div class="quantity-selector">
        <button class="quantity-minus">−</button>
        <span class="quantity-value">1</span>
        <button class="quantity-plus">+</button>
    </div>
</div>

<button
    class="add-to-cart-detail"
    data-product-id="${product.id}"
    ${getAddToCartAttributes(product)}
>
    ${getAvailabilityStatus(product.businessId, product.id).canAddToCart ? "Add to Cart" : "Out of Stock"}
</button>

<div class="product-detail-actions">
    ${getWishlistButtonMarkup(product)}
</div>

            </div>

        `;

        const business =
            getBusinessById(product.businessId);

        if (business) {

            document.querySelector("#seller-name").textContent =
                business.name;

            document.querySelector("#seller-card-link").href =
                `pages/business.html?id=${business.id}`;

            document.querySelector("#seller-location").textContent =
                `📍 ${business.location}`;

            document.querySelector("#seller-rating").textContent =
                `${business.rating}/5`;

            document.querySelector("#seller-delivery-label").textContent =
                business.deliveryLabel;

            document.querySelector("#seller-delivery-time").textContent =
                business.deliveryTime;

            document.querySelector("#seller-verified-label").textContent =
                business.verifiedLabel;

            document.querySelector("#seller-verified-description").textContent =
                business.verifiedDescription;

            document.querySelector("#seller-hours").textContent =
                `${business.openingTime} – ${business.closingTime}`;
        }


        // Product detail Add to Cart

        const detailAddButton =
            productDetails.querySelector(
                ".add-to-cart-detail"
            );

        let quantity = 1;

        attachWishlistControls(productDetails);
        const quantityValue =
            productDetails.querySelector(".quantity-value");
        const quantityMinus =
            productDetails.querySelector(".quantity-minus");
        const quantityPlus =
            productDetails.querySelector(".quantity-plus");

        if (quantityPlus) {
            quantityPlus.addEventListener("click", () => {
                quantity++;
                quantityValue.textContent = quantity;
            });
        }

        if (quantityMinus) {
            quantityMinus.addEventListener("click", () => {
                if (quantity > 1) {
                    quantity--;
                    quantityValue.textContent = quantity;
                }
            });
        }
                detailAddButton.addEventListener("click", function () {
            for (let i = 0; i < quantity; i++) {
                addToCart(product.id);
            }

            this.innerHTML = "✓ Added to Cart";
            this.disabled = true;

            setTimeout(() => {
                this.innerHTML = "Add to Cart";
                this.disabled = false;
            }, 1500);
        });


        // =========================================
        // RELATED PRODUCTS
        // =========================================

        const relatedGrid =
            document.querySelector("#related-products-grid");

        const relatedSection =
            document.querySelector("#related-products");

        if (relatedGrid) {

            const relatedProducts =
                products.filter(item =>
                    item.category === product.category &&
                    item.id !== product.id
                );

            if (relatedProducts.length === 0) {

                if (relatedSection) {
                    relatedSection.style.display = "none";
                }

            } else {

                relatedGrid.innerHTML =
                    relatedProducts.map(item => `

                        <a
                            class="product-card"
                            data-product-id="${item.id}"
                            href="${assetPrefix}product.html?id=${item.id}"
                        >

                            <div class="product-image">

                                <span class="delivery-badge">
                                    ⚡ ${item.delivery}
                                </span>

                                <img
                                    src="${assetPrefix}${item.image}"
                                    alt="${item.name}"
                                >

                                ${getWishlistButtonMarkup(item)}

                            </div>


                            <div class="product-details">

                                <span class="product-category">
                                    ${item.category}
                                </span>

                                <h3>
                                    ${item.name}
                                </h3>

                                <p>
                                    ${item.description}
                                </p>

                                ${getProductAvailabilityMarkup(item)}

                                ${getBusinessMarkup(item)}


                                <div class="product-bottom">

                                    <strong>
                                        ₹${item.price}
                                    </strong>

                                    <button
                                        class="add-cart"
                                        data-product-id="${item.id}"
                                        ${getAddToCartAttributes(item)}
                                    >
                                        ${getAvailabilityStatus(item.businessId, item.id).canAddToCart ? "Add to Cart" : "Out of Stock"}
                                    </button>

                                </div>

                            </div>

                        </a>

                    `).join("");


                              // Add to cart buttons for related products

                attachBusinessLinks(relatedGrid);
                attachWishlistControls(relatedGrid);

                relatedGrid.querySelectorAll(".add-cart")
                    .forEach(button => {

                        button.addEventListener("click", (event) => {

                            event.preventDefault();
                            event.stopPropagation();

                            const relatedId =
                                Number(button.dataset.productId);

                            addToCart(relatedId);

                        });

                    });
            }
        }


        // =========================================
        // REVIEWS & RATINGS
        // =========================================

        renderRecentlyViewed(
            document.querySelector("#recently-viewed-grid")
        );

        const reviewsList =
            document.querySelector("#reviews-list");

        const reviewsSummary =
            document.querySelector("#reviews-summary");

        const reviewForm =
            document.querySelector("#review-form");


        function loadStoredReviews() {

            return JSON.parse(
                localStorage.getItem("nearzaReviews")
            ) || {};

        }


        function saveStoredReviews(allReviews) {

            localStorage.setItem(
                "nearzaReviews",
                JSON.stringify(allReviews)
            );

        }


        function getReviewsForProduct(productId) {

            const stored =
                loadStoredReviews();

            const seed =
                seedReviews[productId] || [];

            const userAdded =
                stored[productId] || [];

            return [...seed, ...userAdded];

        }


        function renderReviews() {

            const currentReviews =
                getReviewsForProduct(product.id);


            // Summary

            if (currentReviews.length === 0) {

                reviewsSummary.innerHTML = `
                    <span class="reviews-count">No reviews yet</span>
                `;

            } else {

                const average =
                    currentReviews.reduce(
                        (total, review) => total + Number(review.rating),
                        0
                    ) / currentReviews.length;

                const roundedAverage =
                    Math.round(average * 10) / 10;

                const fullStars =
                    Math.round(average);

                reviewsSummary.innerHTML = `
                    <span class="reviews-average">${roundedAverage}</span>
                    <span class="reviews-stars">${"⭐".repeat(fullStars)}</span>
                    <span class="reviews-count">
                        (${currentReviews.length} review${currentReviews.length === 1 ? "" : "s"})
                    </span>
                `;

            }


            // List

            if (currentReviews.length === 0) {

                reviewsList.innerHTML = `
                    <p class="no-reviews">
                        Be the first to review this product.
                    </p>
                `;

                return;

            }

            reviewsList.innerHTML =
                currentReviews.map(review => `

                    <div class="review-card">

                        <div class="review-card-top">
                            <span class="review-author">${review.name}</span>
                            <span class="review-stars">${"⭐".repeat(Number(review.rating))}</span>
                        </div>

                        <p class="review-text">${review.text}</p>

                    </div>

                `).join("");

        }


        renderReviews();


        // Handle new review submission

        if (reviewForm) {

            reviewForm.addEventListener("submit", (event) => {

                event.preventDefault();


                const name =
                    document.querySelector("#review-name").value.trim();

                const rating =
                    document.querySelector("#review-rating").value;

                const text =
                    document.querySelector("#review-text").value.trim();


                if (!name || !rating || !text) return;


                const stored =
                    loadStoredReviews();

                if (!stored[product.id]) {
                    stored[product.id] = [];
                }

                stored[product.id].push({
                    name: name,
                    rating: Number(rating),
                    text: text
                });

                saveStoredReviews(stored);


                reviewForm.reset();

                renderReviews();

            });

        }
    }
}

// =========================================
// PRODUCTS PAGE
// =========================================

const productsContainer =
    document.querySelector("#products-container");


if (productsContainer) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const searchQuery =
        params.get("search");


    const categoryQuery =
        params.get("category");


    let filteredProducts = [...products];


    // =========================================
    // SEARCH FILTER
    // =========================================

    if (searchQuery) {

        const query =
            searchQuery
                .toLowerCase()
                .trim();


        filteredProducts =
            filteredProducts.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

                ||

                product.description
                    .toLowerCase()
                    .includes(query)

            );

    }


    // =========================================
    // CATEGORY FILTER
    // =========================================

    if (categoryQuery) {

        const category =
            categoryQuery
                .toLowerCase()
                .trim();


        filteredProducts =
            filteredProducts.filter(product =>

                product.category
                    .toLowerCase()
                    .includes(category)

            );

    }


    // =========================================
    // PAGE MESSAGE
    // =========================================

    const searchMessage =
        document.querySelector(
            "#search-message"
        );


    if (searchMessage) {

        if (searchQuery) {

            searchMessage.textContent =
                `Search results for "${searchQuery}"`;

        }

        else if (categoryQuery) {

            searchMessage.textContent =
                `Showing products in "${categoryQuery}"`;

        }

    }


    // =========================================
    // RENDER PRODUCTS
    // =========================================

    function renderProducts(productList) {

        const productsCount =
            document.querySelector(
                "#products-count"
            );


        // Product count

        if (productsCount) {

            productsCount.textContent =
                `${productList.length} product${productList.length === 1 ? "" : "s"}`;

        }


        // No products

        if (productList.length === 0) {

            productsContainer.innerHTML = `

                <div class="no-products">

                    <h2>No products found</h2>

                    <p>
                        We couldn't find any products matching
                        your selection.
                    </p>

                </div>

            `;

            return;

        }


        // Display products

        productsContainer.innerHTML =
            productList.map(product => getProductCardMarkup(product)).join("");


        // Add to cart buttons

        const pageAddButtons =
            productsContainer.querySelectorAll(
                ".add-cart"
            );


        pageAddButtons.forEach(button => {

            button.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    const productId =
                        Number(
                            button.dataset.productId
                        );


                    addToCart(productId);

                }
            );

        });

        attachBusinessLinks(productsContainer);
        attachWishlistControls(productsContainer);
    }

    


    // =========================================
    // SORT PRODUCTS
    // =========================================

    const sortProducts =
        document.querySelector(
            "#sort-products"
        );


    if (sortProducts) {

        sortProducts.addEventListener(
            "change",
            () => {

                const sortValue =
                    sortProducts.value;


                const sortedProducts =
                    [...filteredProducts];


                if (sortValue === "price-low") {

                    sortedProducts.sort(
                        (a, b) =>
                            a.price - b.price
                    );

                }

                else if (sortValue === "price-high") {

                    sortedProducts.sort(
                        (a, b) =>
                            b.price - a.price
                    );

                }

                else if (sortValue === "name") {

                    sortedProducts.sort(
                        (a, b) =>
                            a.name.localeCompare(
                                b.name
                            )
                    );

                }


                renderProducts(
                    sortedProducts
                );

            }
        );

    }


    // =========================================
    // INITIAL DISPLAY
    // =========================================

    renderProducts(
        filteredProducts
    );

}


// =========================================
// INITIAL CART COUNT
// =========================================

updateCartCount();

// =========================================
// BUSINESS PROFILE PAGE
// =========================================

function parseBusinessTime(timeValue) {
    if (typeof timeValue !== "string") return null;

    const match = timeValue.trim().match(
        /^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i
    );

    if (!match) return null;

    let hours = Number(match[1]);
    const minutes = Number(match[2] || 0);
    const meridiem = match[3]?.toUpperCase();

    if (minutes > 59) return null;

    if (meridiem) {
        if (hours < 1 || hours > 12) return null;
        if (meridiem === "AM" && hours === 12) hours = 0;
        if (meridiem === "PM" && hours !== 12) hours += 12;
    } else if (hours > 23) {
        return null;
    }

    return hours * 60 + minutes;
}

function isBusinessOpen(business, currentTime = new Date()) {
    const openingMinutes = parseBusinessTime(business.openingTime);
    const closingMinutes = parseBusinessTime(business.closingTime);

    if (openingMinutes === null || closingMinutes === null) return false;

    const currentMinutes =
        currentTime.getHours() * 60 + currentTime.getMinutes();

    if (openingMinutes <= closingMinutes) {
        return currentMinutes >= openingMinutes &&
            currentMinutes < closingMinutes;
    }

    return currentMinutes >= openingMinutes ||
        currentMinutes < closingMinutes;
}

function setBusinessProfileField(selector, value, hideWhenEmpty = false) {
    const field = document.querySelector(selector);

    if (!field) return;

    const hasValue = value !== undefined && value !== null && value !== "";
    field.textContent = hasValue ? value : "";

    if (hideWhenEmpty) {
        const container = field.closest(".business-detail") || field;
        container.hidden = !hasValue;
    }
}

const businessProductsContainer =
    document.querySelector("#business-products-container");

if (businessProductsContainer) {

    const businessProfile =
        document.querySelector("#business-profile");

    const businessProductsSection =
        document.querySelector(".business-products-section");

    const businessParams =
        new URLSearchParams(window.location.search);

    const business =
        getBusinessById(businessParams.get("id"));

    if (!business) {

        businessProfile.innerHTML = `
            <div class="no-products">
                <h2>Business not found</h2>
                <p>Sorry, this business doesn't exist.</p>
            </div>
        `;

        businessProductsSection.style.display = "none";

    } else {

        document.title = `${business.name} | Nearza`;

        setBusinessProfileField("#business-name", business.name);
        setBusinessProfileField("#business-type", business.businessType, true);
        setBusinessProfileField("#business-verified", business.verifiedLabel, true);
        setBusinessProfileField("#business-description", business.description, true);
        setBusinessProfileField("#business-city", business.city);
        setBusinessProfileField("#business-location", business.location);
        setBusinessProfileField(
            "#business-rating",
            business.rating !== undefined ? `${business.rating}/5` : "",
            true
        );
        setBusinessProfileField("#business-distance", business.distance, true);

        const businessHours =
            business.openingTime && business.closingTime
                ? `${business.openingTime} – ${business.closingTime}`
                : business.openingTime || business.closingTime || "";

        setBusinessProfileField("#business-hours", businessHours, true);

        const businessStatus = document.querySelector("#business-status");
        const statusLabel = isBusinessOpen(business) ? "Open" : "Closed";

        if (businessStatus) {
            businessStatus.textContent = statusLabel;
            businessStatus.classList.add(
                statusLabel === "Open"
                    ? "business-status-open"
                    : "business-status-closed"
            );
        }

        const businessProducts =
            products.filter(product =>
                product.businessId === business.id
            );

        const productCountLabel =
            `${businessProducts.length} product${businessProducts.length === 1 ? "" : "s"}`;

        setBusinessProfileField(
            "#business-product-count",
            productCountLabel
        );

        document.querySelector("#business-products-heading").textContent =
            `Products from ${business.name}`;

        setBusinessProfileField(
            "#business-products-count",
            `${productCountLabel} available`
        );

        if (businessProducts.length === 0) {

            businessProductsContainer.classList.add("business-products-empty");

            businessProductsContainer.innerHTML = `
                <div class="no-products">
                    <h2>No products available</h2>
                    <p>No products available from this business yet.</p>
                </div>
            `;

        } else {

            businessProductsContainer.innerHTML =
                businessProducts.map(product => getProductCardMarkup(product)).join("");

            businessProductsContainer
                .querySelectorAll(".add-cart")
                .forEach(button => {
                    button.addEventListener("click", event => {
                        event.preventDefault();
                        event.stopPropagation();
                        addToCart(Number(button.dataset.productId));
                    });
                });

            attachBusinessLinks(businessProductsContainer);
            attachWishlistControls(businessProductsContainer);
        }
    }
}

function renderRecentlyViewed(container) {
    if (!container) return;

    const recentProducts = getStoredProductIds(RECENTLY_VIEWED_STORAGE_KEY)
        .map(productId => products.find(product => product.id === productId))
        .filter(Boolean);

    if (!recentProducts.length) {
        container.innerHTML = `
            <div class="no-products compact-empty-state">
                <h3>No recently viewed products</h3>
                <p>Products you open will appear here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recentProducts
        .map(product => getProductCardMarkup(product))
        .join("");

    container.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(Number(button.dataset.productId));
        });
    });

    attachBusinessLinks(container);
    attachWishlistControls(container);
}