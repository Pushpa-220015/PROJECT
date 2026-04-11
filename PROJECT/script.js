// =========================
// Cloud Chef - Full JS Code
// =========================

// Cart storage
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    updateCartCount();

    alert(name + " added to cart!");
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// View cart details
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🛒 Your Cart:\n\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });

    message += `\nTotal: ₹${total}`;

    alert(message);
}

// Remove last item from cart
function removeItem() {
    if (cart.length === 0) {
        alert("Cart is already empty!");
        return;
    }

    let removedItem = cart.pop();
    total -= removedItem.price;

    updateCartCount();

    alert(removedItem.name + " removed from cart!");
}

// Clear entire cart
function clearCart() {
    cart = [];
    total = 0;

    updateCartCount();

    alert("Cart cleared!");
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!\nTotal Amount: ₹" + total);

    clearCart();
}

// =========================
// Optional: Auto-load setup
// =========================

// Reset cart count on page load
window.onload = function () {
    updateCartCount();
};// =========================
// Cloud Chef - Full JS Code
// =========================

// Cart storage
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    updateCartCount();

    alert(name + " added to cart!");
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// View cart details
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🛒 Your Cart:\n\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });

    message += `\nTotal: ₹${total}`;

    alert(message);
}

// Remove last item from cart
function removeItem() {
    if (cart.length === 0) {
        alert("Cart is already empty!");
        return;
    }

    let removedItem = cart.pop();
    total -= removedItem.price;

    updateCartCount();

    alert(removedItem.name + " removed from cart!");
}

// Clear entire cart
function clearCart() {
    cart = [];
    total = 0;

    updateCartCount();

    alert("Cart cleared!");
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!\nTotal Amount: ₹" + total);

    clearCart();
}

// =========================
// Optional: Auto-load setup
// =========================

// Reset cart count on page load
window.onload = function () {
    updateCartCount();
};