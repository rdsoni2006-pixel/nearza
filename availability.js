const businessProducts = [
    { businessId: "glow-beauty-store", productId: 1, available: true, stockQuantity: 18 },
    { businessId: "glow-beauty-store", productId: 2, available: true, stockQuantity: 12 },
    { businessId: "glow-beauty-store", productId: 3, available: true, stockQuantity: 6 },
    { businessId: "glow-beauty-store", productId: 4, available: true, stockQuantity: 4 },
    { businessId: "silk-shine-hair-studio", productId: 5, available: true, stockQuantity: 3 },
    { businessId: "glow-beauty-store", productId: 6, available: true, stockQuantity: 14 },
    { businessId: "glow-beauty-store", productId: 7, available: true, stockQuantity: 8 },
    { businessId: "glow-beauty-store", productId: 8, available: true, stockQuantity: 2 },
    { businessId: "silk-shine-hair-studio", productId: 9, available: true, stockQuantity: 10 },
    { businessId: "silk-shine-hair-studio", productId: 10, available: true, stockQuantity: 7 },
    { businessId: "silk-shine-hair-studio", productId: 11, available: true, stockQuantity: 5 },
    { businessId: "silk-shine-hair-studio", productId: 12, available: true, stockQuantity: 16 },
    { businessId: "silk-shine-hair-studio", productId: 13, available: true, stockQuantity: 9 },
    { businessId: "silk-shine-hair-studio", productId: 14, available: true, stockQuantity: 1 },
    { businessId: "silk-shine-hair-studio", productId: 15, available: true, stockQuantity: 11 },
    { businessId: "glow-beauty-store", productId: 16, available: true, stockQuantity: 13 },
    { businessId: "glow-beauty-store", productId: 17, available: true, stockQuantity: 6 },
    { businessId: "glow-beauty-store", productId: 18, available: true, stockQuantity: 4 },
    { businessId: "silk-shine-hair-studio", productId: 19, available: true, stockQuantity: 8 },
    { businessId: "glow-beauty-store", productId: 20, available: false, stockQuantity: 0 }
];

function getBusinessProductAvailability(businessId, productId) {
    return businessProducts.find(record =>
        record.businessId === businessId &&
        record.productId === Number(productId)
    ) || null;
}

function getAvailabilityStatus(businessId, productId) {
    const record =
        getBusinessProductAvailability(businessId, productId);

    if (!record || record.available === false || record.stockQuantity <= 0) {
        return {
            status: "OUT_OF_STOCK",
            label: "Out of Stock",
            stockQuantity: 0,
            canAddToCart: false
        };
    }

    if (record.stockQuantity <= 5) {
        return {
            status: "LOW_STOCK",
            label: `Only ${record.stockQuantity} left`,
            stockQuantity: record.stockQuantity,
            canAddToCart: true
        };
    }

    return {
        status: "IN_STOCK",
        label: "In Stock",
        stockQuantity: record.stockQuantity,
        canAddToCart: true
    };
}
