// =========================================
// LOAD CART
// =========================================

let cart = JSON.parse(
    localStorage.getItem("nearzaCart")
) || [];


// =========================================
// ELEMENTS
// =========================================

const cartItemsContainer = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");


// =========================================
// DISPLAY CART
// =========================================

function displayCart() {

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>

                <h2>Your cart is empty</h2>

                <p>
                    Looks like you haven't added anything yet.
                </p>

                <a href="../index.html" class="hero-button">
                    Continue Shopping
                </a>
            </div>
        `;

        updateCartSummary();
        return;
    }


    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-image">
                <img
                    src="../${item.image}"
                    alt="${item.name}"
                >
            </div>


            <div class="cart-item-details">

                <span class="product-category">
                    ${item.category}
                </span>

                <h3>${item.name}</h3>

                <p>
                    ${item.description}
                </p>

                <span class="cart-delivery">
                    ⚡ Delivery in ${item.delivery}
                </span>

            </div>


            <div class="cart-item-actions">

                <strong class="cart-item-price">
                    ₹${item.price}
                </strong>


                <div class="quantity-controls">

                    <button
                        class="quantity-button"
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        class="quantity-button"
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    onclick="removeItem(${item.id})"
                >
                    Remove
                </button>

            </div>

        `;

        cartItemsContainer.appendChild(cartItem);

    });


    updateCartSummary();
}


// =========================================
// CHANGE QUANTITY
// =========================================

function changeQuantity(productId, change) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== productId
        );

    }


    saveCart();

    displayCart();

}


// =========================================
// REMOVE ITEM
// =========================================

function removeItem(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    displayCart();

}


// =========================================
// SAVE CART
// =========================================

function saveCart() {

    localStorage.setItem(
        "nearzaCart",
        JSON.stringify(cart)
    );

}


// =========================================
// UPDATE CART COUNT
// =========================================

function updateCartCount() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;

}


// =========================================
// UPDATE ORDER SUMMARY
// =========================================

function updateCartSummary() {

    const subtotal = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );


    const delivery = subtotal > 0 ? 40 : 0;

    const total = subtotal + delivery;


    const summaryRows =
        document.querySelectorAll(".summary-row");

    summaryRows[0].querySelector("strong").textContent =
        `₹${subtotal}`;

    summaryRows[1].querySelector("strong").textContent =
        delivery > 0 ? `₹${delivery}` : "₹0";


    document.querySelector(
        ".summary-total strong"
    ).textContent = `₹${total}`;


    updateCartCount();

}


// =========================================
// START
// =========================================

displayCart();