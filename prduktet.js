// Load cart count on page load
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

// Function to add product to the cart
function addToCart(productName, productPrice) {
    // Retrieve cart from local storage or initialize it
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find if the product already exists in the cart
    let product = cart.find(item => item.name === productName);

    if (product) {
        product.quantity += 1; // Increment quantity if product exists
    } else {
        // Add new product to cart
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count display
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);

    // Display cart count on the cart icon
    document.querySelector(".shopping-cart").innerText = count;
}

// Event listener for 'Add to Cart' buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let productName = this.getAttribute("data-name");
        let productPrice = parseFloat(this.getAttribute("data-price"));
        addToCart(productName, productPrice);
        alert("Product added to cart!");
    });
});
