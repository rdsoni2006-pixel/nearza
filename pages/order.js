const orderPageContent = document.querySelector("#order-page-content");

function getOrderById(orderId) {
    if (!orderId) return null;
    return getStoredOrders().find(order => order.id === orderId) || null;
}

function renderOrderTimeline(status) {
    const statuses = getOrderStatusSequence();
    const activeIndex = getOrderStatusIndex(status);

    return statuses.map((label, index) => {
        const completed = index < activeIndex;
        const active = index === activeIndex;
        const icon = completed ? "✓" : index === activeIndex ? "●" : "○";

        return `
            <div class="status-step ${completed ? "done" : ""} ${active ? "active" : ""}">
                <span class="status-dot">${icon}</span>
                <span class="status-label">${label}</span>
            </div>
        `;
    }).join("");
}

function getDisplayName(value) {
    return value && String(value).trim() ? String(value).trim() : "Not provided";
}

function renderOrderPage() {
    if (!orderPageContent) return;

    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");
    const order = getOrderById(orderId);

    if (!orderId) {
        orderPageContent.innerHTML = `<div class="order-error"><h2>Order not found</h2><p>No order ID was provided in the URL.</p></div>`;
        return;
    }

    if (!order) {
        orderPageContent.innerHTML = `<div class="order-error"><h2>Order not found</h2><p>The order you requested does not exist or may have been removed.</p></div>`;
        return;
    }

    const itemCount = (order.items || []).reduce((total, item) => total + Number(item.quantity || 0), 0);
    const statusLabel = order.status || "Pending";

    const customerName = getDisplayName(order.customer?.name || "");
    const customerPhone = getDisplayName(order.customer?.phone || "");
    const customerAddress = getDisplayName(order.customer?.address || "");
    const customerCity = getDisplayName(order.customer?.city || "");
    const customerPincode = getDisplayName(order.customer?.pincode || "");

    const itemsMarkup = (order.items || []).map(item => {
        const productId = Number(item.productId || 0);
        const businessLink = item.businessId ? `business.html?id=${encodeURIComponent(item.businessId)}` : "#";
        const productLink = productId ? `../product.html?id=${productId}` : "#";
        const businessLabel = item.businessName || "Local store";
        const itemImage = item.image ? `../${item.image}` : "../images/product/default-product.jpg";

        return `
            <div class="order-item-row">
                <a href="${productLink}"><img src="${itemImage}" alt="${item.name || "Product image"}"></a>
                <div class="order-item-name">
                    <a href="${productLink}">${item.name || "Product"}</a>
                    <span class="order-item-meta">Qty: ${Number(item.quantity || 0)} · <a href="${businessLink}">${businessLabel}</a></span>
                </div>
                <div class="order-item-price">₹${Number(item.price || 0) * Number(item.quantity || 0)}</div>
            </div>
        `;
    }).join("");

    orderPageContent.innerHTML = `
        <div class="order-layout">
            <div>
                <section class="order-detail-card">
                    <div class="order-detail-section">
                        <h2>Order information</h2>
                        <div class="order-detail-grid">
                            <div class="info-row"><span>Order ID</span><strong>${order.id || "Unknown"}</strong></div>
                            <div class="info-row"><span>Date</span><strong>${formatOrderDate(order.createdAt)}</strong></div>
                            <div class="info-row"><span>Status</span><strong>${statusLabel}</strong></div>
                            <div class="info-row"><span>Items</span><strong>${itemCount}</strong></div>
                        </div>
                    </div>

                    <div class="order-detail-section">
                        <h2>Customer information</h2>
                        <div class="order-detail-grid">
                            <div class="info-row"><span>Name</span><strong>${customerName}</strong></div>
                            <div class="info-row"><span>Phone</span><strong>${customerPhone}</strong></div>
                            <div class="info-row"><span>Address</span><strong>${customerAddress}</strong></div>
                            <div class="info-row"><span>City</span><strong>${customerCity}</strong></div>
                            <div class="info-row"><span>Pincode</span><strong>${customerPincode}</strong></div>
                        </div>
                    </div>

                    <div class="order-detail-section">
                        <h2>Order items</h2>
                        <div class="order-items-list">${itemsMarkup || `<p class="order-warning">No items are available in this order.</p>`}</div>
                    </div>
                </section>
            </div>

            <div>
                <section class="order-status-card">
                    <h2>Status timeline</h2>
                    <div class="status-timeline">
                        ${renderOrderTimeline(statusLabel)}
                    </div>
                </section>

                <section class="order-summary-card" style="margin-top: 20px;">
                    <h2>Summary</h2>
                    <div class="summary-row"><span>Subtotal</span><strong>₹${Number(order.subtotal || 0)}</strong></div>
                    <div class="summary-row"><span>Delivery fee</span><strong>₹${Number(order.deliveryFee || 0)}</strong></div>
                    <div class="summary-row"><span>Total</span><strong>₹${Number(order.total || 0)}</strong></div>
                    <div class="summary-row"><span>Payment</span><strong>${order.paymentMethod || "Online Payment"}</strong></div>
                    <button type="button" class="reorder-button" style="margin-top: 18px; width: 100%;">Reorder</button>
                </section>
            </div>
        </div>
    `;

    const reorderButton = document.querySelector(".reorder-button");
    if (reorderButton) {
        reorderButton.addEventListener("click", () => {
            const result = reorderFromOrder(order);
            if (result.message) {
                alert(result.message);
            }
        });
    }
}

function reorderFromOrder(order) {
    if (!order || !Array.isArray(order.items)) {
        return { message: "This order cannot be reordered right now." };
    }

    const itemsToAdd = [];
    let unavailableCount = 0;

    order.items.forEach(item => {
        const productId = Number(item.productId);
        const product = products.find(entry => entry.id === productId);

        if (!product) {
            unavailableCount += 1;
            return;
        }

        const availability = getAvailabilityStatus(product.businessId, product.id);
        if (!availability.canAddToCart) {
            unavailableCount += 1;
            return;
        }

        const stockInfo = getBusinessProductAvailability(product.businessId, product.id);
        const requestedQty = Number(item.quantity || 0);
        const availableStock = Number(stockInfo?.stockQuantity || 0);
        const allowedQty = Math.min(requestedQty, availableStock);

        if (allowedQty <= 0) {
            unavailableCount += 1;
            return;
        }

        itemsToAdd.push({
            id: product.id,
            quantity: allowedQty,
            name: product.name,
            businessId: product.businessId,
            businessName: getBusinessById(product.businessId)?.name || "Local store"
        });
    });

    if (!itemsToAdd.length) {
        return { message: "No items from this order are currently available to reorder." };
    }

    let addedCount = 0;
    itemsToAdd.forEach(item => {
        const existingCartItem = cart.find(cartItem => cartItem.id === item.id);
        const existingQty = existingCartItem ? Number(existingCartItem.quantity || 0) : 0;
        const newQty = existingQty + item.quantity;
        const stockInfo = getBusinessProductAvailability(item.businessId, item.id);
        const maxStock = Number(stockInfo?.stockQuantity || 0);

        if (maxStock > 0) {
            const finalQty = Math.min(newQty, maxStock);
            if (existingCartItem) {
                existingCartItem.quantity = finalQty;
            } else {
                const product = products.find(entry => entry.id === item.id);
                if (product) {
                    cart.push({ ...product, quantity: finalQty });
                }
            }
            addedCount += finalQty - existingQty;
        }
    });

    localStorage.setItem("nearzaCart", JSON.stringify(cart));
    updateCartCount();

    const summaryMessage = unavailableCount > 0
        ? `${addedCount} item${addedCount === 1 ? "" : "s"} added to your cart. ${unavailableCount} item${unavailableCount === 1 ? "" : "s"} was unavailable.`
        : `${addedCount} item${addedCount === 1 ? "" : "s"} added to your cart.`;

    return { message: summaryMessage };
}

renderOrderPage();
