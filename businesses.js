const businesses = [
    {
        id: "glow-beauty-store",
        name: "Glow Beauty Store",
        description: "A trusted local store for everyday beauty essentials.",
        businessType: "Beauty and personal care store",
        city: "Ludhiana",
        location: "Available near you",
        rating: 4.7,
        openingTime: "9:00 AM",
        closingTime: "9:00 PM",
        deliveryLabel: "Fast delivery",
        deliveryTime: "Usually within 1–2 hrs",
        distance: "1.8 km",
        fulfillmentTime: "35–50 min",
        status: "Available",
        verifiedLabel: "Verified seller",
        verifiedDescription: "Trusted local store"
    },
    {
        id: "silk-shine-hair-studio",
        name: "Silk & Shine Hair Studio",
        description: "A neighborhood hair-care studio for everyday styling and care.",
        businessType: "Hair-care and styling store",
        city: "Ludhiana",
        location: "Available near you",
        rating: 4.6,
        openingTime: "10:00 AM",
        closingTime: "8:00 PM",
        deliveryLabel: "Fast delivery",
        deliveryTime: "Usually within 1–2 hrs",
        distance: "2.4 km",
        fulfillmentTime: "40–55 min",
        status: "Available",
        verifiedLabel: "Verified seller",
        verifiedDescription: "Trusted local studio"
    }
];

function getBusinessById(businessId) {
    return businesses.find(
        business => business.id === businessId
    );
}