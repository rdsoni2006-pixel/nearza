const wishlistGrid = document.querySelector("#wishlist-grid");

function renderWishlistPage() {
    if (!wishlistGrid) return;

    const wishlistProducts = getStoredProductIds(WISHLIST_STORAGE_KEY)
        .map(productId => products.find(product => product.id === productId))
        .filter(Boolean);

    if (!wishlistProducts.length) {
        wishlistGrid.innerHTML = `
            <div class="no-products compact-empty-state">
                <h2>Your wishlist is empty</h2>
                <p>Tap the heart on a product to save it here.</p>
                <a class="nearza-button wishlist-browse-button" href="products.html">Browse products</a>
            </div>
        `;
        return;
    }

    wishlistGrid.innerHTML = wishlistProducts
        .map(product => getProductCardMarkup(product))
        .join("");

    wishlistGrid.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(Number(button.dataset.productId));
        });
    });

    attachBusinessLinks(wishlistGrid);
    attachWishlistControls(wishlistGrid);
}

document.addEventListener("nearza:wishlist-changed", renderWishlistPage);
renderWishlistPage();
