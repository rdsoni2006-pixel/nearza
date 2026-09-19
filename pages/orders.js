const ordersList = document.querySelector("#orders-list");

function renderOrdersPage() {
    const orders = getStoredOrders().slice().reverse();

    if (!ordersList) return;

    if (!orders.length) {
        ordersList.innerHTML = `
            <div class="order-empty">
                <h2>No orders yet</h2>
                <p>Your order history will appear here after you place a purchase.</p>
            </div>
        `;
        return;
    }

    ordersList.innerHTML = orders.map(order => {
        const badgeClass = getOrderStatusClass(order.status);
        const itemCount = (order.items || []).reduce((total, item) => total + Number(item.quantity || 0), 0);

        return `
            <article class="order-card">
                <div class="order-card-main">
                    <div class="order-meta">
                        <span>Order ${order.id || "Unknown"}</span>
                        <span>${formatOrderDate(order.createdAt)}</span>
                    </div>
                    <h3>${itemCount} item${itemCount === 1 ? "" : "s"}</h3>
                    <div class="order-meta">
                        <span>${order.paymentMethod || "Payment method unavailable"}</span>
                    </div>
                </div>

                <div class="order-card-side">
                    <div class="order-total">
                        <span>Total</span>
                        <strong>₹${Number(order.total || 0)}</strong>
                    </div>
                    <span class="order-status-badge ${badgeClass}">${order.status || "Pending"}</span>
                </div>

                <div class="order-card-actions">
                    <a class="view-order-button" href="order.html?id=${encodeURIComponent(order.id)}">View Order</a>
                </div>
            </article>
        `;
    }).join("");
}

renderOrdersPage();
