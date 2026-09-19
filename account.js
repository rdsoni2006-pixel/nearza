const accountNameInput = document.querySelector("#account-name");
const accountPhoneInput = document.querySelector("#account-phone");
const accountEmailInput = document.querySelector("#account-email");
const accountProfileForm = document.querySelector("#account-profile-form");
const accountStatus = document.querySelector("#profile-status");
const accountError = document.querySelector("#profile-error");
const accountResetButton = document.querySelector("#account-reset-button");

const addressLabelInput = document.querySelector("#address-label");
const addressFullNameInput = document.querySelector("#address-full-name");
const addressPhoneInput = document.querySelector("#address-phone");
const addressCityInput = document.querySelector("#address-city");
const addressLineInput = document.querySelector("#address-line");
const addressLandmarkInput = document.querySelector("#address-landmark");
const addressPincodeInput = document.querySelector("#address-pincode");
const addressForm = document.querySelector("#address-form");
const addressStatus = document.querySelector("#address-status");
const addressError = document.querySelector("#address-error");
const addressResetButton = document.querySelector("#address-reset-button");
const savedAddressesPanel = document.querySelector("#saved-addresses-panel");

function renderAccountProfile() {
    const profile = getCustomerProfile();

    if (!accountNameInput || !accountPhoneInput || !accountEmailInput) return;

    accountNameInput.value = profile.name || "";
    accountPhoneInput.value = profile.phone || "";
    accountEmailInput.value = profile.email || "";
}

function renderSavedAddressesPanel() {
    if (!savedAddressesPanel) return;

    const profile = getCustomerProfile();

    if (!profile.addresses.length) {
        savedAddressesPanel.innerHTML = `
            <div class="empty-state compact-empty-state">
                <h3>No saved addresses</h3>
                <p>Add a delivery address to save it for faster checkout.</p>
            </div>
        `;
        return;
    }

    savedAddressesPanel.innerHTML = profile.addresses.map(address => `
        <div class="saved-address-item ${address.id === profile.selectedAddressId ? "selected" : ""}">
            <div>
                <div class="saved-address-header">
                    <strong>${address.label || "Home"}</strong>
                    ${address.id === profile.selectedAddressId ? '<span class="saved-address-selected">Selected</span>' : ""}
                </div>
                <p>${address.fullName || ""}${address.fullName ? " · " : ""}${address.phone || ""}</p>
                <p>${address.address}</p>
                <p>${address.city}, ${address.pincode}${address.landmark ? ` · ${address.landmark}` : ""}</p>
            </div>

            <div class="saved-address-actions">
                <button type="button" class="saved-address-select-button" data-address-id="${address.id}">
                    ${address.id === profile.selectedAddressId ? "Selected" : "Use this"}
                </button>
                <button type="button" class="address-action-button" data-action="edit" data-address-id="${address.id}">Edit</button>
                <button type="button" class="address-action-button" data-action="delete" data-address-id="${address.id}">Delete</button>
            </div>
        </div>
    `).join("");

    savedAddressesPanel.querySelectorAll(".saved-address-select-button").forEach(button => {
        button.addEventListener("click", () => {
            setSelectedSavedAddress(button.dataset.addressId);
            renderSavedAddressesPanel();
        });
    });

    savedAddressesPanel.querySelectorAll(".address-action-button").forEach(button => {
        button.addEventListener("click", () => {
            const addressId = button.dataset.addressId;
            const address = getCustomerProfile().addresses.find(item => item.id === addressId);

            if (!address) return;

            if (button.dataset.action === "delete") {
                deleteCustomerAddress(addressId);
                renderSavedAddressesPanel();
                addressStatus.textContent = "Address deleted";
                addressError.textContent = "";
                return;
            }

            addressLabelInput.value = address.label || "";
            addressFullNameInput.value = address.fullName || "";
            addressPhoneInput.value = address.phone || "";
            addressCityInput.value = address.city || "";
            addressLineInput.value = address.address || "";
            addressLandmarkInput.value = address.landmark || "";
            addressPincodeInput.value = address.pincode || "";
            addressForm.dataset.editAddressId = address.id;
            addressStatus.textContent = "Editing saved address";
            addressError.textContent = "";
        });
    });
}

if (accountProfileForm) {
    accountProfileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const profile = updateCustomerProfileFields({
            name: accountNameInput.value,
            phone: accountPhoneInput.value,
            email: accountEmailInput.value
        });

        accountStatus.textContent = "Profile saved successfully";
        accountError.textContent = "";

        saveCustomerProfile(profile);
    });
}

if (accountResetButton) {
    accountResetButton.addEventListener("click", () => {
        accountNameInput.value = "";
        accountPhoneInput.value = "";
        accountEmailInput.value = "";
        accountStatus.textContent = "Fields cleared";
        accountError.textContent = "";
        updateCustomerProfileFields({
            name: "",
            phone: "",
            email: ""
        });
    });
}

if (addressForm) {
    addressForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const addressData = {
            id: addressForm.dataset.editAddressId || undefined,
            label: addressLabelInput.value.trim() || "Home",
            fullName: addressFullNameInput.value.trim(),
            phone: addressPhoneInput.value.trim(),
            address: addressLineInput.value.trim(),
            city: addressCityInput.value.trim(),
            landmark: addressLandmarkInput.value.trim(),
            pincode: addressPincodeInput.value.trim()
        };

        if (!addressData.address || !addressData.city || !/^\d{6}$/.test(addressData.pincode)) {
            addressError.textContent = "Please enter a valid address, city and 6-digit pincode.";
            addressStatus.textContent = "";
            return;
        }

        const result = addAddressToCustomer(addressData);

        if (!result.success) {
            addressError.textContent = "We could not save this address. Please check the details and try again.";
            addressStatus.textContent = "";
            return;
        }

        addressForm.reset();
        delete addressForm.dataset.editAddressId;
        addressStatus.textContent = "Address saved successfully";
        addressError.textContent = "";
        renderSavedAddressesPanel();
    });
}

if (addressResetButton) {
    addressResetButton.addEventListener("click", () => {
        addressForm.reset();
        delete addressForm.dataset.editAddressId;
        addressStatus.textContent = "Form cleared";
        addressError.textContent = "";
    });
}

renderAccountProfile();
renderSavedAddressesPanel();