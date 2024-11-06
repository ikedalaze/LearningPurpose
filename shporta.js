// Load cart items on cart page
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("shporta.html")) {
        loadCartItems();
        updateTotalPrice();
    }
});

// Function to load cart items
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}€</td>
            <td>
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
            </td>
            <td>${item.price * item.quantity}€</td>
            <td><button onclick="removeItem('${item.name}')">Fshij</button></td>
        `;

        cartItemsContainer.appendChild(row);
    });
}

// Function to update quantity
function updateQuantity(name, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.name !== name);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItems();
        updateTotalPrice();
        updateCartCount();
    }
}

// Function to remove an item
function removeItem(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateTotalPrice();
    updateCartCount();
}

// Function to update the total price
function updateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total-price").innerText = total + "€";
}
