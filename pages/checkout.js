// =========================================
// CHECKOUT PAGE LOGIC
// =========================================

let checkoutCart = JSON.parse(localStorage.getItem("nearzaCart") || "[]");

let selectedSeller = null;

const checkoutProducts = document.querySelector(".checkout-products");
const cartCount = document.querySelector(".cart-count");
const findSellerButton = document.querySelector(".find-seller-button");
const placeOrderButton = document.querySelector(".place-order-button");
const paymentSection = document.querySelector("#payment-section");
const confirmationSection = document.querySelector("#order-confirmation");
const saveCurrentAddressCheckbox = document.querySelector("#save-address-to-account");
const savedAddressList = document.querySelector("#saved-addresses-list");
const recipientOptions = document.querySelectorAll('input[name="recipient"]');
const fullNameInput = document.querySelector("#full-name");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const pincodeInput = document.querySelector("#pincode");

function updateCartBadge() {
    if (!cartCount) return;

    const totalItems = checkoutCart.reduce((total, item) => total + Number(item.quantity || 0), 0);
    cartCount.textContent = totalItems;
}

function updateCheckoutSummary() {
    const subtotal = checkoutCart.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 0), 0);
    const deliveryFee = subtotal > 0 ? 40 : 0;
    const total = subtotal + deliveryFee;

    const summaryRows = document.querySelectorAll(".checkout-summary .summary-row");

    if (summaryRows.length >= 2) {
        summaryRows[0].querySelector("strong").textContent = `₹${subtotal}`;
        summaryRows[1].querySelector("strong").textContent = `₹${deliveryFee}`;
    }

    const totalRow = document.querySelector(".checkout-summary .summary-total strong");
    if (totalRow) totalRow.textContent = `₹${total}`;

    updateCartBadge();
}

function displayCheckoutProducts() {
    if (!checkoutProducts) return;

    checkoutProducts.innerHTML = "";

    if (!checkoutCart.length) {
        checkoutProducts.innerHTML = `
            <p style="color: var(--text-secondary); font-size: 13px; margin: 0;">
                Your cart is empty.
            </p>
        `;
        updateCheckoutSummary();
        return;
    }

    checkoutCart.forEach(item => {
        const product = document.createElement("div");
        product.className = "checkout-product";
        product.innerHTML = `
            <div class="checkout-product-image">
                <img src="../${item.image}" alt="${item.name}">
            </div>
            <div class="checkout-product-info">
                <strong>${item.name}</strong>
                <span>Qty: ${item.quantity}</span>
            </div>
            <strong class="checkout-product-price">₹${Number(item.price || 0) * Number(item.quantity || 0)}</strong>
        `;
        checkoutProducts.appendChild(product);
    });

    updateCheckoutSummary();
}

function populateCheckoutFormFromAddress(address) {
    if (!address || typeof address !== "object") return;

    if (address.fullName) fullNameInput.value = address.fullName;
    if (address.phone) phoneInput.value = address.phone;
    if (address.address) addressInput.value = address.address;
    if (address.city) cityInput.value = address.city;
    if (address.pincode) pincodeInput.value = address.pincode;
}

function renderSavedAddresses() {
    if (!savedAddressList) return;

    const profile = getCustomerProfile();

    if (!profile.addresses.length) {
        savedAddressList.innerHTML = `
            <div class="empty-state compact-empty-state">
                <h3>No saved addresses yet</h3>
                <p>Add your delivery address to make checkout faster next time.</p>
            </div>
        `;
        return;
    }

    const selectedAddressId = profile.selectedAddressId || profile.addresses[0].id;

    savedAddressList.innerHTML = profile.addresses.map(address => `
        <div class="saved-address-item ${address.id === selectedAddressId ? "selected" : ""}">
            <div>
                <div class="saved-address-header">
                    <strong>${address.label || "Home"}</strong>
                    ${address.id === selectedAddressId ? '<span class="saved-address-selected">Selected</span>' : ""}
                </div>
                <p>${address.fullName || ""}${address.fullName ? " · " : ""}${address.phone || ""}</p>
                <p>${address.address}</p>
                <p>${address.city}, ${address.pincode}</p>
            </div>
            <div class="saved-address-actions">
                <button type="button" class="saved-address-select-button" data-address-id="${address.id}">
                    ${address.id === selectedAddressId ? "Selected" : "Use this address"}
                </button>
            </div>
        </div>
    `).join("");

    savedAddressList.querySelectorAll(".saved-address-select-button").forEach(button => {
        button.addEventListener("click", () => {
            const profileData = getCustomerProfile();
            const address = profileData.addresses.find(item => item.id === button.dataset.addressId);

            if (!address) return;

            setSelectedSavedAddress(button.dataset.addressId);
            populateCheckoutFormFromAddress(address);
            renderSavedAddresses();
        });
    });
}

function saveCurrentAddressToAccount() {
    if (!saveCurrentAddressCheckbox || !saveCurrentAddressCheckbox.checked) return;

    const addressValue = addressInput.value.trim();
    const cityValue = cityInput.value.trim();
    const pincodeValue = pincodeInput.value.trim();

    if (!addressValue || !cityValue || !/^\d{6}$/.test(pincodeValue)) return;

    const profile = getCustomerProfile();
    const addressRecord = createAddressRecord({
        label: "Home",
        fullName: fullNameInput.value.trim() || profile.name || "",
        phone: phoneInput.value.trim() || profile.phone || "",
        address: addressValue,
        city: cityValue,
        pincode: pincodeValue,
        landmark: ""
    });

    if (!addressRecord) return;

    const addResult = addAddressToCustomer(addressRecord);
    if (addResult.success) {
        setSelectedSavedAddress(addResult.address.id);
        renderSavedAddresses();
    }
}

function updateRecipientFields() {
    const selectedRecipient = document.querySelector('input[name="recipient"]:checked').value;

    if (selectedRecipient === "myself") {
        fullNameInput.placeholder = "Your name";
        phoneInput.placeholder = "Your phone number";
        addressInput.placeholder = "House / flat number, street, area";
        fullNameInput.removeAttribute("required");
        phoneInput.removeAttribute("required");
    } else {
        fullNameInput.placeholder = "Recipient's full name";
        phoneInput.placeholder = "Recipient's phone number";
        addressInput.placeholder = "House / flat number, street, area";
        fullNameInput.setAttribute("required", "");
        phoneInput.setAttribute("required", "");
    }

    const selectedAddress = getSelectedSavedAddress();
    if (selectedAddress && !addressInput.value.trim()) {
        populateCheckoutFormFromAddress(selectedAddress);
    }
}

function updatePaymentOptions() {
    const selectedRecipient = document.querySelector('input[name="recipient"]:checked').value;
    const codOption = document.querySelector("#cod-option");
    const codRadio = codOption.querySelector('input[value="cod"]');

    if (selectedRecipient === "someone-else") {
        codRadio.disabled = true;
        codOption.style.opacity = "0.5";
        codOption.style.cursor = "not-allowed";
        document.querySelector('input[name="payment"][value="online"]').checked = true;
    } else {
        codRadio.disabled = false;
        codOption.style.opacity = "1";
        codOption.style.cursor = "pointer";
    }
}

function validateCartAvailabilityForOrder() {
    if (!Array.isArray(checkoutCart) || checkoutCart.length === 0) {
        return "Your cart is empty. Add a product before placing an order.";
    }

    for (const item of checkoutCart) {
        const productId = Number(item.id);
        const product = products.find(entry => entry.id === productId);

        if (!product) {
            return `${item.name || "A product in your cart"} is no longer available. Please review your cart and try again.`;
        }

        const availabilityRecord = getBusinessProductAvailability(product.businessId, product.id);
        if (!availabilityRecord || availabilityRecord.available === false || Number(availabilityRecord.stockQuantity) <= 0) {
            return `${product.name} is currently unavailable. Please review your cart before checkout.`;
        }

        if (Number(item.quantity || 0) > Number(availabilityRecord.stockQuantity)) {
            return `${product.name} has only ${availabilityRecord.stockQuantity} item${Number(availabilityRecord.stockQuantity) === 1 ? "" : "s"} left in stock. Please update your cart.`;
        }
    }

    return null;
}

function getCartSellerOptions() {
    const sellerIds = [...new Set(checkoutCart.map(item => {
        const product = products.find(entry => entry.id === Number(item.id));
        return product?.businessId;
    }).filter(Boolean))];

    return sellerIds
        .map(businessId => getBusinessById(businessId))
        .filter(business => business && business.status === "Available");
}

function renderSellerOptions(sellerResult, sellerOptions) {
    sellerResult.innerHTML = `
        <div class="seller-matching">
            <div class="seller-matching-title">
                <div class="seller-matching-icon">✓</div>
                <div>
                    <h3>${sellerOptions.length > 1 ? "Local sellers found" : "Seller found"}</h3>
                    <p>These businesses match the products in your cart.</p>
                </div>
            </div>
            <div class="seller-option-list">
                ${sellerOptions.map(business => `
                    <div class="seller-card seller-option-card">
                        <div class="seller-card-top">
                            <span class="seller-card-name">${business.name}</span>
                            <span class="seller-status">${business.status}</span>
                        </div>
                        <div class="seller-details">
                            <span class="seller-detail">📍 <strong>${business.distance}</strong> away</span>
                            <span class="seller-detail">⭐ <strong>${business.rating}</strong></span>
                            <span class="seller-detail">⚡ <strong>${business.fulfillmentTime}</strong></span>
                        </div>
                    </div>
                `).join("")}
            </div>
            <button class="seller-continue">
                Continue with ${sellerOptions.length > 1 ? "these sellers" : "this seller"}
            </button>
        </div>
    `;

    const sellerContinue = sellerResult.querySelector(".seller-continue");
    sellerContinue.addEventListener("click", () => {
        sellerContinue.disabled = true;
        sellerContinue.textContent = "Confirming seller...";

        setTimeout(() => {
            selectedSeller = {
                businessIds: sellerOptions.map(business => business.id),
                businesses: sellerOptions
            };
            sellerContinue.textContent = "✓ Seller Confirmed";
            sellerContinue.style.background = "var(--success)";
            paymentSection.style.display = "block";
            paymentSection.scrollIntoView({ behavior: "smooth", block: "start" });
            const sellerNames = sellerOptions.map(business => business.name).join(", ");
            document.querySelector("#confirmed-seller-name").textContent = sellerNames;
            document.querySelector("#confirmation-seller-name").textContent = sellerNames;
            updatePaymentOptions();
        }, 1200);
    });
}

function handleFindSeller() {
    if (!checkoutCart.length) {
        alert("Your cart is empty. Add a product before checkout.");
        window.location.href = "cart.html";
        return;
    }

    const availabilityError = validateCartAvailabilityForOrder();
    if (availabilityError) {
        alert(availabilityError);
        return;
    }

    const selectedRecipient = document.querySelector('input[name="recipient"]:checked').value;
    const name = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const addressValue = addressInput.value.trim();
    const cityValue = cityInput.value.trim();
    const pincodeValue = pincodeInput.value.trim();

    const selectedAddress = getSelectedSavedAddress();
    if (selectedAddress && !addressValue) {
        populateCheckoutFormFromAddress(selectedAddress);
    }

    if (!addressInput.value.trim()) {
        alert("Please enter your complete delivery address.");
        addressInput.focus();
        return;
    }

    if (!cityInput.value.trim()) {
        alert("Please enter your city.");
        cityInput.focus();
        return;
    }

    if (!/^\d{6}$/.test(pincodeInput.value.trim())) {
        alert("Please enter a valid 6-digit pincode.");
        pincodeInput.focus();
        return;
    }

    if (selectedRecipient === "someone-else") {
        if (!name) {
            alert("Please enter the recipient's full name.");
            fullNameInput.focus();
            return;
        }
        if (!phone) {
            alert("Please enter the recipient's phone number.");
            phoneInput.focus();
            return;
        }
    }

    const sellerOptions = getCartSellerOptions();
    if (!sellerOptions.length) {
        alert("No available seller can fulfil the products in your cart.");
        return;
    }

    findSellerButton.disabled = true;
    findSellerButton.textContent = "Finding a seller...";

    const sellerResult = document.querySelector("#seller-result");
    sellerResult.style.display = "block";
    sellerResult.innerHTML = `
        <div class="seller-matching">
            <div class="seller-matching-title">
                <div class="seller-matching-icon">📍</div>
                <div>
                    <h3>Finding nearby sellers</h3>
                    <p>Checking stock, distance and delivery speed...</p>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        renderSellerOptions(sellerResult, sellerOptions);
        findSellerButton.style.display = "none";
    }, 1800);
}

function handlePlaceOrder() {
    if (saveCurrentAddressCheckbox && saveCurrentAddressCheckbox.checked) {
        saveCurrentAddressToAccount();
    }

    if (!checkoutCart.length) {
        alert("Your cart is empty. Add a product before placing an order.");
        window.location.href = "cart.html";
        return;
    }

    const validationError = validateCartAvailabilityForOrder();
    if (validationError) {
        alert(validationError);
        window.location.href = "cart.html";
        return;
    }

    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    const recipient = document.querySelector('input[name="recipient"]:checked').value;
    if (!selectedSeller) {
        alert("Please confirm a seller before placing your order.");
        return;
    }

    const profile = getCustomerProfile();
    const customer = {
        name: fullNameInput.value.trim() || profile.name || "",
        phone: phoneInput.value.trim() || profile.phone || "",
        address: addressInput.value.trim(),
        city: cityInput.value.trim(),
        pincode: pincodeInput.value.trim()
    };

    const paymentText = selectedPayment === "cod" ? "Cash on Delivery" : "Online Payment";
    const buttonText = selectedPayment === "cod" ? "Placing Order..." : "Processing Payment...";

    placeOrderButton.disabled = true;
    placeOrderButton.textContent = buttonText;

    const newOrder = buildOrderFromCart(checkoutCart, customer, paymentText);
    const savedOrders = getStoredOrders();
    savedOrders.push(newOrder);
    saveStoredOrders(savedOrders);

    checkoutCart = [];
    localStorage.setItem("nearzaCart", JSON.stringify(checkoutCart));
    updateCartBadge();

    setTimeout(() => {
        document.querySelector("#order-id").textContent = newOrder.id;
        document.querySelector("#confirmation-payment").textContent = paymentText;
        document.querySelector("#confirmation-total").textContent = `₹${newOrder.total}`;
        document.querySelector("#confirmation-status").textContent = newOrder.status;

        paymentSection.style.display = "none";
        confirmationSection.style.display = "block";
        confirmationSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1800);
}

if (findSellerButton) {
    findSellerButton.addEventListener("click", handleFindSeller);
}

if (placeOrderButton) {
    placeOrderButton.addEventListener("click", handlePlaceOrder);
}

recipientOptions.forEach(option => {
    option.addEventListener("change", () => {
        updateRecipientFields();
        updatePaymentOptions();
    });
});

window.addEventListener("DOMContentLoaded", () => {
    displayCheckoutProducts();
    updateRecipientFields();
    updatePaymentOptions();
    renderSavedAddresses();
});

displayCheckoutProducts();
updateRecipientFields();
updatePaymentOptions();
renderSavedAddresses();

